document.addEventListener("DOMContentLoaded", (() => {
  "use strict";
  class UbuntuDevSpace {
      constructor(config = {}) {
          this.config = {
            // dataUrl: "./data/clients.data.json",
            dataUrl: "https://cdn.jsdelivr.net/gh/OumaNyang/ubuntu-devspace-js@main/data/clients.data.json",
              noticeDisplayDays: 30,
              ...config
          };
          this.html = document.documentElement;
          this.body = document.body;
          this.currentDomain = window.location.hostname;
          this.notices = this.createNoticeTemplates();
      }

      createNoticeTemplates() {
          return {
              development: {
                  title: "Exciting Changes Coming Soon!",
                  message: "We're currently working behind the scenes to bring you a more robust, interactive, and modern website experience.",
                  color: "#4a6fa5",
                  icon: "🚀",
                  gradient: "linear-gradient(135deg, #e6f0ff 0%, #c9e2ff 100%)",
                  contactLabel: "For inquiries, please contact:"
              },
              maintenance: {
                  title: "Maintenance Ongoing",
                  message: "We're performing important updates to improve your experience. Thank you for your patience!",
                  color: "#5a8f69",
                  icon: "🔧",
                  gradient: "linear-gradient(135deg, #f0fff4 0%, #d1ffe1 100%)",
                  contactLabel: "Need immediate assistance?"
              },
              administrative_hold: {
                  title: "Administrative Hold",
                  message: "This website is temporarily unavailable due to administrative review.",
                  color: "#b35900",
                  icon: "⏸️",
                  gradient: "linear-gradient(135deg, #fff4e6 0%, #ffe0b3 100%)",
                  contactLabel: "For status inquiries:"
              },
              suspended: {
                  title: "License Suspended",
                  message: "This website is currently unavailable due to license suspension.",
                  color: "#a04a4a",
                  icon: "⛔",
                  gradient: "linear-gradient(135deg, #fff0f0 0%, #ffd1d1 100%)",
                  contactLabel: "For reinstatement:"
              },
              expired: {
                  title: "License Expired",
                  message: "This website is unavailable because the development license has expired.",
                  color: "#8e44ad",
                  icon: "⌛",
                  gradient: "linear-gradient(135deg, #f5eef8 0%, #e8daef 100%)",
                  contactLabel: "To renew your license:"
              },
              legal_hold: {
                  title: "Legal Restriction",
                  message: "This website is temporarily unavailable due to legal proceedings.",
                  color: "#6a4a8f",
                  icon: "⚖️",
                  gradient: "linear-gradient(135deg, #f5f0ff 0%, #e2d1ff 100%)",
                  contactLabel: "Legal inquiries:"
              },
              compliance_hold: {
                  title: "Compliance Review",
                  message: "This website is temporarily unavailable during compliance verification.",
                  color: "#2980b9",
                  icon: "🔍",
                  gradient: "linear-gradient(135deg, #eaf2f8 0%, #d4e6f1 100%)",
                  contactLabel: "For compliance questions:"
              },
              deleted: {
                  title: "Service Terminated",
                  message: "This website is no longer available.",
                  color: "#5a5a5a",
                  icon: "❌",
                  gradient: "linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)",
                  contactLabel: ""
              }
          };
      }

      async fetchClientData() {
          try {
              const response = await fetch(this.config.dataUrl);
              if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
              return await response.json();
          } catch (error) {
              console.error("Failed to load client data:", error);
              return null;
          }
      }

      async handleLicenseStatus() {
          const devData = await this.fetchClientData();
          if (!devData) return;

          const domainData = devData[this.currentDomain];
          
          if (!domainData) {
              this.displayNotice('deleted');
              return;
          }

          const status = domainData.dev_licence_status;
          const validStatuses = Object.keys(this.notices);

          if (validStatuses.includes(status)) {
              if (status === 'deleted') {
                  this.displayBlankPage();
              } else if (status === 'active') {
                  // Do nothing, show normal website
              } else {
                  this.displayNotice(status, domainData);
              }
          } else {
              this.displayNotice('suspended', domainData);
          }
      }

      displayNotice(type, domainData = null) {
          const notice = this.notices[type] || this.notices.suspended;
          const clientEmail = domainData?.customer_email || domainData?.client_email || "info@example.com";
          const clientName = domainData?.client_name || "the website owner";
          const clientPhone = domainData?.customer_phone ? `<p>Phone: ${domainData.customer_phone}</p>` : "";

          const noticeHTML = `
              <style>
                  .license-notice-container {
                      margin: 0;
                      padding: 0;
                      background: ${notice.gradient};
                      font-family: 'Ubuntu', 'Segoe UI', Roboto, sans-serif;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      min-height: 100vh;
                      color: #333;
                      line-height: 1.5;
                  }
                  
                  .license-notice {
                      background: white;
                      width: calc(100% - 40px);
                      max-width: 500px;
                      border-radius: 12px;
                      box-shadow: 0 5px 15px rgba(0,0,0,0.08);
                      padding: 1.5rem;
                      margin: 20px;
                      text-align: center;
                      animation: fadeIn 0.4s ease-out;
                      border: 1px solid rgba(0,0,0,0.05);
                  }
                  
                  .notice-title {
                      color: ${notice.color};
                      font-weight: 700;
                      font-size: 1.4rem;
                      margin-bottom: 1rem;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      gap: 0.5rem;
                  }
                  
                  .notice-content {
                      color: #444;
                      font-size: 1rem;
                      margin-bottom: 1rem;
                  }
                  
                  .divider {
                      height: 3px;
                      background: linear-gradient(90deg, transparent, ${notice.color}, transparent);
                      margin: 1.5rem auto;
                      width: 80%;
                      opacity: 0.3;
                  }
                  
                  .support-info {
                      background: rgba(0,0,0,0.02);
                      padding: 1rem;
                      border-radius: 8px;
                      margin: 1.5rem 0;
                      border-left: 3px solid ${notice.color};
                      text-align: left;
                  }
                  
                  .support-link {
                      color: ${notice.color};
                      text-decoration: none;
                      font-weight: 600;
                      word-break: break-all;
                      display: inline-block;
                      margin-top: 0.3rem;
                  }
                  
                  .client-info {
                      font-size: 0.85rem;
                      margin-top: 1rem;
                      color: #666;
                  }
                  
                  .icon {
                      font-size: 1.3em;
                  }
                  
                  @keyframes fadeIn {
                      from { opacity: 0; transform: translateY(20px); }
                      to { opacity: 1; transform: translateY(0); }
                  }
                  
                  @media (max-width: 350px) {
                      .license-notice {
                          padding: 1.2rem;
                          margin: 10px;
                      }
                      
                      .notice-title {
                          font-size: 1.2rem;
                      }
                  }
              </style>
              
              <div class="license-notice">
                  <h2 class="notice-title">
                      <span class="icon">${notice.icon}</span>
                      ${notice.title}
                  </h2>
                  
                  <div class="notice-content">
                      <p>${notice.message}</p>
                  </div>
                  
                  ${type !== 'deleted' ? `
                  <div class="divider"></div>
                  
                  <div class="support-info">
                      <p style="margin:0 0 5px 0;font-weight:500;">${notice.contactLabel}</p>
                      <a class="support-link" href="mailto:${clientEmail}">
                          ${clientEmail}
                      </a>
                      ${clientPhone}
                  </div>
                  ` : ''}
                  
                  ${domainData ? `
                  <div class="client-info">
                      <h4>${clientName}</h4>
                  </div>
                  ` : ''}
              </div>
          `;
          
          this.body.innerHTML = '';
          this.body.className = 'license-notice-container';
          this.body.innerHTML = noticeHTML;
      }

      displayBlankPage() {
          this.body.innerHTML = '';
          this.body.style.backgroundColor = 'white';
          this.body.style.margin = '0';
          this.body.style.padding = '0';
          this.body.style.minHeight = '100vh';
      }

      init() {
          this.handleLicenseStatus();
      }
  }
  
  // Initialize with optional configuration
  new UbuntuDevSpace({
      // dataUrl: "https://cdn.example.com/path/to/clients.data.json",
      // noticeDisplayDays: 45
  }).init();
}));