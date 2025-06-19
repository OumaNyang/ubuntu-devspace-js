# Ubuntu DevSpace JS License Manager

![License Status](https://img.shields.io/badge/license-MIT-blue.svg) 
![Version](https://img.shields.io/badge/version-2.0.0-green.svg)

A lightweight JavaScript module for domain license management that validates developer licenses and displays appropriate status notifications.

## Key Features

- ✅ Real-time domain license verification
- 🛠 Multiple status types (active, suspended, maintenance, etc.)
- 📱 Fully responsive notification system
- 📞 Client-specific contact information display
- ⚡ Automatic updates from centralized JSON data

## Installation

### CDN Installation (Recommended)
``` 
<script src="https://cdn.jsdelivr.net/gh/OumaNyang/ubuntu-devspace-js@main/dist/ubuntu.dev.min.js"></script> ```
 
### npm Installation
```
``` npm install ubuntu-devspace-js ```
Manual Installation
Download the latest release:
 
git clone [https://github.com/OumaNyang/ubuntu-devspace-js.git](https://github.com/OumaNyang/ubuntu-devspace-js.git)
Include in your project:

```html

<script src="/path/to/ubuntu.dev.min.js"></script> ```
### Configuration
#### Data Structure
Create a clients.data.json file with your domain information:
 ```
{
  "example.com": {
    "client_name": "Example Client",
    "client_domain": "example.com",
    "project": "Corporate Website",
    "date_published": "2024-01-15 09:00:00",
    "domain_status": "online",
    "last_update": "2024-06-01 14:30:00",
    "dev_licence_status": "active",
    "customer_email": "support@example.com",
    "customer_phone": "+254700123456"
  }
} ```
Status Types
Status	Description	Visual Indicator
active	Fully operational	(No display)
development	Under construction	🚀 Blue notice
maintenance	Temporary maintenance	🔧 Green notice
suspended	License suspended	⚠️ Red notice
legal_hold	Restricted access	⚖️ Purple notice
deleted	Permanently removed	❌ Blank page

Export to Sheets
Implementation Guide
Basic Implementation:
JavaScript

document.addEventListener("DOMContentLoaded", () => {
  new UbuntuDevSpace().init();
});
Advanced Configuration:
JavaScript

const config = {
  dataUrl: "[https://yourdomain.com/data/clients.data.json](https://yourdomain.com/data/clients.data.json)",
  noticeDisplayDays: 45, // Custom notice duration
  customStyles: {
    development: {
      color: "#3a7bd5",
      icon: "👷"
    }
  }
};
new UbuntuDevSpace(config).init();
Project Structure
ubuntu-devspace-js/
├── dist/                   # Compiled files
│   ├── ubuntu.dev.js       # Development version
│   └── ubuntu.dev.min.js   # Production version
├── data/
│   └── clients.data.json   # Client license data
├── src/                    # Source files
├── LICENSE
└── README.md
Best Practices
Data Management:
Update clients.data.json regularly
Use ISO 8601 format for dates (YYYY-MM-DD HH:MM:SS)
Include complete client contact information
Performance:
Use the minified version in production
Host JSON data on a CDN for faster access
Implement caching where possible
Troubleshooting
Issue	Solution
Notifications not displaying	Verify domain exists in clients.data.json
Incorrect status shown	Check dev_licence_status value
Slow loading	Use CDN-hosted JSON file

Export to Sheets
Contributing
We welcome contributions! Please follow these steps:

Fork the repository
Create a feature branch:
Bash

git checkout -b feature/improvement
Commit your changes:
Bash

git commit -m 'Add new feature'
Push to the branch:
Bash

git push origin feature/improvement
Open a Pull Request
Support
For assistance, contact:

Email: support@azacloud.com
GitHub Issues: Report an issue
License
This project is licensed under the MIT License — see the LICENSE file for details.

Maintained by: Ouma Nyang | Azacloud Solutions
Last Updated: June 2025