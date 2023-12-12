# Numeric Grade Tracker

A JavaScript-based grade tracker that helps you keep track of your grades for various activities.

## Functionality

- Add an activity along with its grade.
- The application calculates the final average grade.
- Visual feedback (emoji) is provided for each activity based on whether the grade is above or below the minimum grade.
- The application prevents the addition of duplicate activities.

## Usage

1. Load the HTML file in your preferred web browser.
2. You will be prompted to enter the minimum passing grade.
3. Input the name and grade of each activity.
4. The application will automatically update the table and the final average grade.

## Deployment

The application is deployed and can be accessed at [https://contacts-agenda.vercel.app/](https://contacts-agenda.vercel.app/)

## Cloning the Repository and Running the Application Locally

To clone the repository, use the following command in your terminal:

```bash
git clone <https://github.com/maxh33/project_brazilian_grade_calculator>
```
After cloning the repository, open Visual Studio Code.
Use the `File -> Open Folder` menu item to navigate to the cloned repository and open it.
For a better experience when running the application on your local machine, you can use the Live Server extension in Visual Studio Code.

1. Install the Live Server extension from the Visual Studio Code marketplace.
2. After installation, right-click on the HTML file and select `Open with Live Server`.
3. The application will open in your default web browser, and it will automatically reload whenever you save changes to the files.

**Note:** Live Server is a simple development http server with live reload capability. It's like having a production server on your local machine. It's perfect for development and testing.

**Important**
This application does not have data persistence. Refreshing the page will result in loss of all data.