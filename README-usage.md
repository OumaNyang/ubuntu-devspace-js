## Using Dev Licence in Client Projects

To integrate the Dev Licence script into your client's project, follow these steps:

1. **Update Client List**:  
   Ensure that your client list is up-to-date with the correct domain statuses in your database (e.g., `active`, `suspended`).

2. **Add the Script**:  
   Include the script in your client's website. This script will automatically check the client’s website status from your dataset and display an alert or message depending on the status.

### How It Works:
- When the website loads, the script checks the client’s domain status from the database.
- Based on the domain status, it will show a relevant alert, such as notifying the user if the developer license is suspended.

### Example:
Here’s how to include the script in your client's website:
```html
<script src="https://cdn.jsdelivr.net/gh/UserName/ubuntu-devspace-js@branch/ubuntu.dev.min.js"></script>
```
Ensure you add this `<script>` tag **before the closing `</body>` tag** of the client's website.

---

## Hosting

It is highly recommended to host the script on GitHub and serve it via **jsDelivr** for better performance and global accessibility. The URL will look like this:

```html
<script src="https://cdn.jsdelivr.net/gh/UserName/ubuntu-devspace-js@branch/ubuntu.dev.min.js"></script>
```

Make sure to replace `UserName` with your GitHub username and `branch` with the branch name where the script is hosted (usually `main` or `master`).

---

This section outlines how to use the `Dev Licence` script and the recommended method to host and integrate it into client websites. Let me know if you'd like any further adjustments!