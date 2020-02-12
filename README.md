# Wicked Sales

A full stack LAMP & React shopping cart app

## Technologies Used

- React.js
- Webpack 4
- Bootstrap 4
- PHP
- MySQL
- CSS3
- HTML5
- AWS EC2

## Live Demo

https://wicked-sales.pzo.codes

## Preview

#### Desktop

![wicked-sales-preview](preivews\pizza-stop-desktop-preview.gif)

#### Mobile

![wicked-sales-mobile](preivews\pizza-stop-mobile-preview.gif)

## Development

#### System Requirements

- PHP 7.2
- NPM
- MySQL 8.0

1. Clone the repository

    ```shell
    git clone https://github.com/christianparizeau/wicked-sales
    cd wicked-sales
    ```

1. Install all dependencies with NPM.

    ```shell
    npm install
    ```
 
1. Create a database in MySQL
    * phpmyadmin (*Recommended*)
  
    1. Log into  phpmyadmin
    1. Create a new table (remember this name)
    
    * CLI
    1. In your terminal type to login, where username is your MySQL username. Default is *root*
    
    ```shell
    mysql -u username -p
    ```
    
    1. Enter your password for MySQL. Default is *root*
    1. Create a new Database, replace dbname with your choice name for the database
    
    ```shell
    CREATE DATABASE dbname;
    ```
    
1. Import the example database to MySQL

    ```shell
    npm run db:import
    ```
    
1. Edit the PHP config file
    1. Open your code editor of choice
    1. navigate to the *server/api/_config.example.php file*
    1. Rename it to *_config.php*
    1. Edit the fields as follows
 
     ```shell
     'user' => 'username'
     'pass' => 'password'
     'host' => 'localhost'
     'database' => dbname
     ```
     Where dbname is the name of the database you created earlier, username is your MySQL username, password is your MySQL password. Defaults are *root*
    
1. Start the project. Once started you can view the application by opening http://localhost:3000 in your browser.

    ```shell
    npm run dev
    ```

    
