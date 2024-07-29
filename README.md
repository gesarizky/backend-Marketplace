# backend-nama-lengkap

## Setup

1. Clone the repository

    ```bash
    git clone https://github.com/yourusername/backend-nama-lengkap.git
    cd backend-nama-lengkap
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
        ```

4. Setup the database
    - Create a MySQL database named `marketplace`
    - Configure your database credentials in `config/config.json`

5. Run migrations

    ```bash
    npx sequelize-cli db:migrate
    ```

6. Start the server

    ```bash
    npm start
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
