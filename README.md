# Task-Mangement-Application-Frontend

This is a simple Todo app built with React.js that allows users to create, read, update, and delete tasks. This README file will guide you through setting up and running the frontend application.

#Prerequisites

Before you begin, ensure you have met the following requirements:

Node.js installed on your machine. You can download it from nodejs.org.
The Todo app backend (Node.js and MongoDB) is set up and running. If not, please follow the instructions in the backend README to set it up.


#Getting Started

1.Clone this repository to your local machine using the following command:
git clone https://github.com/yourusername/todo-app-react-frontend.git

2.Navigate to the project directory:
cd todo-app-react-frontend

3.Install the project dependencies:
npm install


#Running the Application

1.Start the React development server:
npm start
This will start the server and open the Todo app in your default web browser.
2.You should now be able to use the Todo app to create, read, update, and delete tasks.


#Using the Todo App

You can use the Todo app to:

Create a Task: Enter a task description in the input field and press the "Add" button.

Status of Task: Click the "Pending" or "Completed" button to save the changes before press the "Add" button or default status of "Pending" will be added.

Read Tasks: View the list of tasks displayed on the homepage.

Update a Task: Click the "Edit" button next to a task, make changes, and press the "Update" button to save the changes.

Delete a Task: Click the "Delete" button next to a task to remove it from the list.


#Project Structure

The project structure is organized as follows:

`src/`: Contains the main React application files.
`components/`: React components for the app.
`App.js`: The main application component.
`index.js`: Entry point for the React app.


#Dependencies

The following are the dependencies for the project with the versions:

"@reduxjs/toolkit": "^1.9.6",
"@testing-library/jest-dom": "^5.17.0",
"@testing-library/react": "^13.4.0",
"@testing-library/user-event": "^13.5.0",
"axios": "^1.5.1",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-icons": "^4.11.0",
"react-redux": "^8.1.3",
"react-router-dom": "^6.16.0",
"react-scripts": "5.0.1",
"react-toastify": "^9.1.3",
"redux": "^4.2.1",
"web-vitals": "^2.1.4"


#Contributing

If you'd like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and commit them with descriptive messages.
Push your changes to your fork.
Create a pull request to the original repository.


#License

This project is licensed under the MIT License. See the LICENSE file for details.


#Acknowledgments

This project was inspired by various online tutorials and resources.
Thanks to the open-source community for their contributions to the libraries and tools used in this project.
Feel free to customize and enhance this Todo app frontend according to your needs. Happy coding!
