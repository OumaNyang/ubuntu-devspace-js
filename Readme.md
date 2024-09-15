 ## Ubuntu DevSpace JS Module

This project is a JavaScript module that checks the domain availability and developer license status based on a dataset. If the domain is not available or the developer license is suspended, the module displays a notification to the user.

### Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Data Format](#data-format)
- [Contributing](#contributing)
- [License](#license)

## About the Project

The `UbuntuDevSpace` module allows you to check domain status from a `clients.data.json` file. It compares the current domain (using `window.location.hostname`) with data provided in a JSON file and responds with a notification if the domain has a suspended developer license.

### Features

- Fetches domain data from a `clients.data.json` file.
- Displays a notification when the developer license is suspended.
- Easily configurable and customizable for any website.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/OumaNyang/ubuntu-devspace-js.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ubuntu-devspace-js
   ```

3. Make sure to place your `clients.data.json` file in the appropriate directory.

## Usage

1. Ensure you have a `clients.data.json` file that contains domain data. The JSON file should look like this:

   ```json
   {
     "localhost": {
       "client_name": "Local Developer",
       "client_domain": "localhost",
       "project": "website",
       "date_published": "2024-03-15 04:25:52",
       "domain_status": "online",
       "last_update": "2024-09-15 19:34:24",
       "dev_licence_status": "suspended"
     },
     "example.com": {
       "client_name": "Example Client",
       "client_domain": "example.com",
       "project": "website",
       "date_published": "2023-02-10 12:34:56",
       "domain_status": "online",
       "last_update": "2024-09-10 11:22:33",
       "dev_licence_status": "active"
     }
   }
   ```

2. Include the `ubuntu.dev.js` script in your HTML file:

   ```html
   <script src="/path/to/ubuntu.dev.js"></script>
   ```

3. The script will automatically fetch the `clients.data.json` file and check the developer license status for the current domain. If the license is suspended, a notification will be displayed on the page.

## Project Structure

- `/data/clients.data.json`: Contains the domain and license status information.
- `/ubuntu.dev.js`: JavaScript file that checks the domain and renders notifications if the license is suspended.

## Data Format

The `clients.data.json` file should be structured like this:

```json
{
  "domain.com": {
    "client_name": "Client Name",
    "client_domain": "domain.com",
    "project": "Project Name",
    "date_published": "YYYY-MM-DD HH:MM:SS",
    "domain_status": "online/offline",
    "last_update": "YYYY-MM-DD HH:MM:SS",
    "dev_licence_status": "active/suspended"
  }
}
```

Each key represents a domain, and the value contains information about the client, project, domain status, and developer license status.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch for your feature or bugfix: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

### Optional Additional Sections

- **FAQ**: If your project has common questions or requires troubleshooting help.
- **Screenshots**: If you want to include visual examples of the project in action.
- **Acknowledgements**: If you want to thank any contributors or reference libraries/tools you used.

You can customize this template further depending on the specific needs of your project!