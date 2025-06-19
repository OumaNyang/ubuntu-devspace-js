document.addEventListener("DOMContentLoaded", (() => {
  "use strict";
  class UbuntuDevSpace {
      constructor() {
          this.html = document.documentElement;
          this.body = document.body;
          this.currentDomain = window.location.hostname;
      }

      async fetchClientData() {
          try {
            // const response = await fetch("./data/clients.data.json");
            const response = await fetch("https://cdn.jsdelivr.net/gh/OumaNyang/ubuntu-devspace-js@main/data/clients.data.json");

              const devData = await response.json();
              this.handleLicenseStatus(devData);
          } catch (error) {
              console.error("Failed to load client data:", error);
          }
      }

      handleLicenseStatus(devData) {
          const domainData = devData[this.currentDomain];
          
          if (!domainData) {
              this.displayNotice('deleted');
              return;
          }

          const status = domainData.dev_licence_status;

          switch (status) {
              case 'development':
                  this.displayNotice('development', domainData);
                  break;
              case 'maintenance':
                  this.displayNotice('maintenance', domainData);
                  break;
              case 'suspended':
                  this.displayNotice('suspended', domainData);
                  break;
              case 'legal_hold':
                  this.displayNotice('legal_hold', domainData);
                  break;
              case 'deleted':
                  this.displayBlankPage();
                  break;
              case 'active':
                  // Do nothing, show normal website
                  break;
              default:
                  this.displayNotice('suspended', domainData);
          }
      }

      displayNotice(type, domainData = null) {
          const notices = {
              development: {
                  title: "Exciting Changes Coming Soon!",
                  message: "We're currently working behind the scenes to bring you a more robust, interactive, and modern website experience. Please check back soon for our exciting new launch!",
                  color: "#4a6fa5", // Muted blue
                  icon: "🚀",
                  gradient: "linear-gradient(135deg, #e6f0ff 0%, #c9e2ff 100%)",
                  contactLabel: "For inquiries, please contact:"
              },
              maintenance: {
                  title: "Maintenance Ongoing",
                  message: "We're currently performing important updates to improve your experience. Our team is working to complete this as quickly as possible. Thank you for your patience!",
                  color: "#5a8f69", // Muted green
                  icon: "🔧",
                  gradient: "linear-gradient(135deg, #f0fff4 0%, #d1ffe1 100%)",
                  contactLabel: "Need immediate assistance?"
              },
              suspended: {
                  title: "Service Unavailable",
                  message: "This website is currently inaccessible due to administrative reasons.",
                  color: "#a04a4a", // Muted red
                  icon: "⚠️",
                  gradient: "linear-gradient(135deg, #fff0f0 0%, #ffd1d1 100%)",
                  contactLabel: "For support inquiries:"
              },
              legal_hold: {
                  title: "Access Restricted",
                  message: "This website is temporarily unavailable due to legal proceedings.",
                  color: "#6a4a8f", // Muted purple
                  icon: "⚖️",
                  gradient: "linear-gradient(135deg, #f5f0ff 0%, #e2d1ff 100%)",
                  contactLabel: "Legal inquiries:"
              },
              deleted: {
                  title: "Website Not Available",
                  message: "This website is no longer active.",
                  color: "#5a5a5a", // Muted gray
                  icon: "❌",
                  gradient: "linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)",
                  contactLabel: ""
              }
          };

          const notice = notices[type] || notices.suspended;
          const clientEmail = domainData?.customer_email || domainData?.client_email || "info@example.com";
          const clientName = domainData?.client_name || "the website owner";
          const clientPhone = domainData?.customer_phone ? `<p>Phone: ${domainData.customer_phone}</p>` : "";

          const noticeHTML = `
              <style>
                  body {
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
                      height: 1px;
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
                      <p>${clientName}</p>
                  </div>
                  ` : ''}
              </div>
          `;
          
          const container = document.createElement('div');
          container.innerHTML = noticeHTML;
          this.body.innerHTML = '';
          this.body.appendChild(container);
      }

      displayBlankPage() {
          this.body.innerHTML = '';
          this.body.style.backgroundColor = 'white';
          this.body.style.margin = '0';
          this.body.style.padding = '0';
          this.body.style.minHeight = '100vh';
      }

      init() {
          this.fetchClientData();
      }
  }
  
  new UbuntuDevSpace().init();

}));