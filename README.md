# Task-Management
This project is a Mern-stack task management application designed to streamline task organization and improve productivity. Built using React.js on the frontend and Node.js with MongoDB on the backend, this project leverages Redux for efficient state management, ensuring smooth functionality and scalability.

# Features

1. Task Creation and Management:

•	Add, edit, or delete tasks with ease.
•	Each task is displayed with the creator's name, a title, and additional details.
•	Task statuses are easily managed for better workflow organization.

2. User-Friendly Layout:

•	Sidebar Navigation includes options like “Add Task” and “See Task List” to switch between views quickly.
•	A responsive table layout in the Task List component that allows for horizontal scrolling within its container without affecting the entire window layout. Background colors and column widths adapt seamlessly to different screen sizes.

3. State Management:

•	Redux handles global state, particularly for viewing and managing the task list, which is accessible directly from the sidebar navigation.
•	Smooth and consistent state updates ensure a reliable user experience.

4. Backend API:

•	The backend, built with Node.js and MongoDB, provides a RESTful API.
•	Secure and optimized for real-time data fetching, allowing a fast response between frontend and backend interactions.

5. Styling and Responsiveness:

•	Styled with Tailwind CSS and CSS Modules for specific component customization.
•	Fully responsive design to accommodate various devices, enhancing the user experience on both desktop and mobile.

6. Code Quality and Accessibility:

•	ESLint enforces coding standards and checks for accessibility, ensuring high-quality, maintainable code.

# Project Structure

•	Main Folder: task-management<br>
     •	Frontend: Contains the src folder with subfolders for assets, components, and style.<br>
         •	Components include footer.js, header.js, sidebar.js, and task-related components like TaskForm and TaskList.<br>
         •	Tailwind configuration is managed in tailwind.config.js.
     •	Backend: Developed with Node.js and MongoDB, providing endpoints for managing tasks.<br>

# How to Run the Project:

1. Clone the repository.
2. Navigate to the frontend and backend folders and run npm install in each to install dependencies.
3. Start the backend server and frontend client:
   # Start Backend
    cd backend<br>
    npm start

   # Start Frontend
    cd frontend<br>
    npm start<br>
4. Open the application in your browser to start managing tasks.

# Author:Gaurav Shukla
  

     
