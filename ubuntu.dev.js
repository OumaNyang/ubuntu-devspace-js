document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  /*
  Author : Ouma Nyang
  Modules : DevSpace JS
  */
  class UbuntuDevSpace {
  constructor() {
    this.html = document.getElementsByTagName('html')[0];
    this.body = document.getElementsByTagName('body')[0];
    this.currentDomain = window.location.hostname;  
  }

  async fetchClientData() {
    try {
      const response = await fetch('./data/clients.data.json');  
      const devData = await response.json();  
       this.DevLicence(devData);  
    } catch (error) {
      console.error('Error fetching client data:', error);
    }
  }

  DevLicence(devData) {

  const domainData = devData[this.currentDomain]; 
  
  if (domainData || domainData.dev_licence_status === 'suspended') {
  //  if (!domainData || domainData.dev_licence_status !== 'active') {

    const licenceNotice = `
      <style>
        body {
          background: #4600DF;
          font-family: 'Ubuntu', Tahoma, Geneva, Verdana, sans-serif;
        }
        #notice {
          background: #ffffff;
          width: 40vw;
          height: auto;
          border: 2px solid #8c8c8c;
          border-radius: 5px;
          margin: 50px auto;
          box-shadow: 0px 0px 5px #8c8c8c;
          padding: 20px;
          text-align: center;
        }
        #notice .notice-title {
          font-weight: 700;
          font-size: 1.3em;
          color: #1F1F1F;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        #notice .notice-contents {
          color: #232323;
          font-size: 1.2em;
          line-height: 1.8em;
        }
        .line-divider {
          border: 1px solid #B3B3B3;
          margin: 10px 0;
        }
        .support-email {
          color: #4600DF;
          text-decoration: none;
        }
      </style>
      <div id="notice">
        <h4 class="notice-title">Application Not Available</h4>
        <div class="line-divider"></div>
        <div class="notice-contents">
          <p>This website is not available due to a suspended developer license.</p>
          <p>If you are the application owner, kindly contact webmaster support at 
            <a class="support-email" href="mailto:support@azacloud.com">support@azacloud.com</a>.
          </p>
        </div>
      </div>
    `;

    const wrapper = document.createElement('div');
    wrapper.innerHTML = licenceNotice;
    this.body.appendChild(wrapper);
  }
}

init() {
  this.fetchClientData() 
  this.DevLicence();
}
}
new UbuntuDevSpace().init();

});
