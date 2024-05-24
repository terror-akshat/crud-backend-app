CRUD API for Product Management

Overview

This project is a simple CRUD (Create, Read, Update, Delete) API for managing products. It provides endpoints to create new products, read product information, update existing products, and delete products. The API is built using Node.js and Express.



Create Products:

Allows users to add new products to the database.
Required product attributes include name, description, price, and stock quantity.

Read Products:

Retrieve information about individual products or fetch a list of all products.
Supports filtering and sorting based on various criteria such as price and category.

Update Products:

Modify existing product details.
Supports partial updates, allowing changes to specific attributes without affecting others.

Delete Products:

Remove products from the database.
Option for soft deletes, marking products as inactive rather than permanently removing them.


Accessing the API:


You can access and test this API using popular API clients such as Postman, Thunder Client, and Insomnia. These tools provide an intuitive interface for making requests and viewing responses, making it easier to interact with the API.


Technologies Used

Node.js,
Express, 
MongoDB (Mongoose)
