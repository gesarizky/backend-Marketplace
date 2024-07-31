# Marketplace API

## Setup

1. Clone the repository

    ```bash
    git clone 
    cd backend-gesa
    ```

2. Install dependencies

    ```bash
    npm install
    ```

3. Configure environment variables
    - Create a `.env` file in the root directory
    - Add the following content

        ```dotenv
        JWT_SECRET=your_jwt_secret
        DATABASE = 'marketplace'
        DATABASE_USERNAME = 'username'
        DATABASE_PASSWORD = 'password'
        DATABASE_HOST = 'localhost'
        DATABASE_PORT = 3306
        DATABASE_TYPE = 'mysql'
        DATABASE_LOGGING = false
        ```

4. Setup the database
    - Create a MySQL database named `marketplace`
    - Configure your database credentials in `.env`

5. Start the server

    ```bash
    npm run start
    ```

## Usage

### Auth

#### Register

POST /api/auth/register
    Body:
    {
        "username": "merchant1",
        "password": "password",
        "role": "merchant"
    }

#### Login

POST /api/auth/login
    Body:
    {
        "username": "merchant1",
        "password": "password"
    }

### Products

#### Create Product (Merchant only)

POST /api/products
    Headers:
    {
        "Authorization": "Bearer your_jwt_token"
    }
    Body:
    {
        "name": "Product A",
        "price": 20000
    }

#### List Products

GET /api/products

#### Update Product (Merchant only)

PUT /api/products/:id
    Headers:
    {
        "Authorization": "Bearer your_jwt_token"
    }
    Body:
    {
        "name": "Product A Updated",
        "price": 25000
    }

#### Delete Product (Merchant only)

DELETE /api/products/:id
    Headers:
    {
        "Authorization": "Bearer your_jwt_token"
    }

### Transactions

#### Create Transaction (Customer only)

POST /api/transactions
    Headers:
    {
        "Authorization": "Bearer your_jwt_token"
    }
    Body:
    {
        "productId": 1,
        "quantity": 3
    }

#### Get Transactions by Merchant (Merchant only)

GET /api/transactions/merchant
    Headers:
    {
        "Authorization": "Bearer your_jwt_token"
    }

## Postman Collection

- Import the provided `postman_collection.json` into Postman to quickly test the endpoints.
