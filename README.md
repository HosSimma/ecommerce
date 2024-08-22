

# E-commerce Backend API
A simple e-commerce backend application built with NestJS, Prisma, and PostgreSQL.

## Features
- User management (CRUD operations)
- Product management (CRUD operations)
- Order management (CRUD operations)

## Technologies Used
- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Neon](https://neon.tech/) (a serverless platform designed to help you build reliable and scalable applications faster.)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ecommerce-backend.git
   cd ecommerce-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Prisma CLI:
   ```bash
   npm install prisma --save-dev
   npm install @prisma/client
   ```

## Running the Application
Start the NestJS application in development mode:
```bash
npm run start:dev
open http://localhost:3000/api



### 9. **API Documentation**
```markdown
## API Documentation
Below is a summary of the available API endpoints:

### Users
- **POST** `/user`: Create a new user
- **GET** `/user`: Get all users
- **GET** `/user/:id`: Get a user by ID

### Products
- **POST** `/product`: Create a new product
- **GET** `/product`: Get all products
- **GET** `/product/:id`: Get a product by ID

### Orders
- **POST** `/order`: Create a new order
- **GET** `/order`: Get all orders
- **GET** `/order/:id`: Get an order by ID





