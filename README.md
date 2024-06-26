# Employee Management Application
This is a web application for managing employee data. It allows you to view, add, update, and delete employee records. The application is built using React and TypeScript, and it leverages context for state management and hooks for data fetching and updates.

# Features
View a paginated list of employees.
Add a new employee.
Update employee information.
Delete an employee.
Display a pop-up notification when an employee is added.
Responsive design.

# Technologies Used
React
TypeScript
SCSS
React Router
Context API
Fetch API
i18next (for internationalization)

# Getting Started
Make sure you have the following installed on your system:

Node.js (>= 12.x)
npm (>= 6.x) or yarn (>= 1.x)

# Installation
Clone the repository:
git clone https://github.com/your-username/employee-management-app.git

# Navigate to the project directory:
cd employee-management-app  

## Install the dependencies:

npm install or yarn install
# Running the Application
To start the development server, run:
npm start or yarn start

This will launch the application in your default web browser at http://localhost:3000.


## Context and Hooks
AppContext
The AppContext provides global state management for the application. It includes:

employees: The list of employees.
isLoading: A boolean indicating if data is being fetched.
setEmployees: A function to update the employees list.
updateEmployees: A function to update a specific employee.
deleteEmployee: A function to delete a specific employee.
currentPage: The current page number for pagination.
itemsPerPage: Number of items to display per page.
totalPages: Total number of pages based on the items per page.
setCurrentPage: A function to set the current page.

## Running Tests
To run tests, use the following command:

npm test or yarn test
## Contributing
Feel free to submit pull requests and issues. Any contributions are appreciated!

## Acknowledgments
React
TypeScript
i18next
Replace placeholders like https://github.com/your-username/employee-management-app.git with the actual URL of your repository. Adjust the structure and details based on your actual project setup and specific needs.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
