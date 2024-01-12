Working Server Setup
This repository contains two servers: JWT Server and User Management Server. To start both servers, follow the guidelines outlined below.

JWT Server
Prerequisites
Ensure Node.js is installed (https://nodejs.org/) and npm package manager is available (comes bundled with Node.js).

Setup
Begin by cloning this repository:



git clone https://github.com/your-username/your-repo.git
cd your-repo
Navigate to the JWT Server directory:



cd jwt-server
Install the necessary dependencies:



npm install
Update the database configuration by opening the db.js file in the jwt-server directory. Replace your_database_host, your_database_user, your_database_password, your_database_name, and your_database_port with your actual database details.

Launch the JWT Server:



node index.js
Access the UI at http://localhost:3000/index.html.

User Management Server
Prerequisites
Node.js must be installed (https://nodejs.org/) and npm package manager is necessary (comes bundled with Node.js).

Setup
Navigate to the User Management Server directory:



cd user-server
Install the required dependencies:



npm install
Update the database configuration by opening the db.js file in the user-server directory. Replace your_database_host, your_database_user, your_database_password, your_database_name, and your_database_port with your actual database details.

Start the User Management Server:



node index.js
Access the UI at http://localhost:4000/index.html.

Database Setup
The servers utilize a MySQL database named nodejscrud. Establish your MySQL database with the following schema:



CREATE TABLE users (
  username VARCHAR(255) PRIMARY KEY,
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  password VARCHAR(255),
  dateAdded DATETIME
);
Replace your_database_host, your_database_user, your_database_password, your_database_name, and your_database_port with your actual database details.

Written by Marc Raineer P Filosopo





