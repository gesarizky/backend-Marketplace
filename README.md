# Marketplace API

## How to install and run

1. Clone the repository
2. Install dependencies

    ```bash
    npm install
    ```

3. Create a database named `marketplace`
4. Update `config/config.json` with your database credentials
5. Run the server

    ```bash
    npm run dev
    ```

## API Endpoints

### Auth

- `POST /api/auth/register` - Register a new merchant
- `POST /api/auth/login` - Login as a merchant

### Merchant

- `POST /api/merchant/product` - Create a new product
- `PUT /api/merchant/product/:id` - Update a product
- `DELETE /api/merchant/product/:id` - Delete a product
- `GET /api/merchant/customers` - Get customers who bought products

### Customer

- `GET /api/customer/products` - List all products
- `POST /api/customer/buy` - Buy a product

## Postman Collection

Import the provided Postman Collection for testing the API endpoints.

### How to Import Postman Collection

1. Open Postman
2. Click on `Import` button
3. Select the file `Marketplace_API.postman_collection.json` from the `postman` directory
4. Start testing the endpoints

## Postman Collection File

The Postman Collection file is located in the `postman` directory and is named `Marketplace_API.postman_collection.json`.
