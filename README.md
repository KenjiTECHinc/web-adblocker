# Website AdBlocker ⛔
This project is made as a Google Chrome extension for blocking ads. The project name may seem a little misleading, as at the moment it is made to block the "Promoted" posts from LinkedIn when browsing the website.

## Technologies Used

The project is mainly written solely with JavaScript to build the script for the Chrome extension. `manifest.json` was created as a Manifest file for specifying the requirements of the extension.

[![JavaScript](https://skillicons.dev/icons?i=js)]()

## Deployment

Google Chrome Extension mainly reads from the `manifest.json` file for any specifications to the version and permission requirements. To deploy the project simply follow the steps:

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-REPOSITORY-HTTPS-LINK.git
cd your-repository
```

### 2. Adding the Extension

Here is a step-by-step instructions on how to deploy our adblocker extension.

#### 2a. Configure your Chrome Extension settings

First, open the settings of your Chrome browser and locate 'Extensions'. A new tab will be opened showing your extensions, toggle the `Developer mode` switch at the top right corner of the tab.

![image](https://github.com/user-attachments/assets/ea1f6dae-9726-4ce0-854f-a32ba727109f)


#### 2b. Adding the AdBlocker extension

Once the developer mode has been turned on, you can then click on the 'Load unpacked' button. You should then locate the folder in which the repository's files are located. Select that folder and wait for a few seconds for the new extension to unpack.

![image](https://github.com/user-attachments/assets/2ac051c9-4654-43d4-9682-9cacabf869a5)

#### 2c. Using the Extension

Once the extension is loaded, and no error message is shown, the set up is complete. Voila! You may now open a [LinkedIn](https://www.linkedin.com/) tab to test the "adblocker" extension, it should be noticeable that the "Promoted" posts are now gone.

![image](https://github.com/user-attachments/assets/6f7174cc-1b36-4834-98bd-82f0ae7bd86f)

Promoted post gone!

## Contributing to the Project

Feel free to contribute to this repository, simply fork and submit a pull request when you're ready.

<br>
<br>

> This Chrome Extension project is partly inspired from [yakkomajuri](https://github.com/yakkomajuri/linkedin-adblocker).
However, the said inspiration is quite outdated (Extension version 2) and needed some refactoring/necessary updates to a newer Extension version that were implemented in this project instead.
