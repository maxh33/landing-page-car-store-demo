# Demo Car Store Landing Page

This is a responsive landing page for car dealers. It includes a navigation menu, a list of vehicles, and a contact form.

## Features

- Responsive design that looks good on desktop
- Hamburger menu that slides down and up
- Smooth scrolling and the form pre-fills the "Interest" field with the name of the vehicle when a button in the vehicle list is clicked.
- Form validation for the contact form
- Phone number input field with a mask

## Technologies Used

- HTML
- CSS
- JavaScript
- jQuery
- jQuery Validation Plugin
- jQuery Mask Plugin

## How to Use

1. Navigate to the URL where the landing page is hosted `Vercel`.
2. Click the hamburger menu to open the navigation menu.
3. Click a link in the menu to scroll to the corresponding section of the page.
4. Click on button "I am interested" in the vehicle list to auto fill with the vehicle name and scroll to the form.
5. Fill out the contact form and submit it. You will see an alert if the form is valid or invalid.

## Deployment

The application is deployed and can be accessed at [https://landing-page-car-store-demo.vercel.app/](https://landing-page-car-store-demo.vercel.app/)

## Running the Page Locally

Use the following command in your terminal:

```bash
git clone <https://github.com/maxh33/landing-page-car-store-demo>
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

## Future Improvements

- Add more sections to the page
- Improve the design of the form
- Add more validation rules to the form