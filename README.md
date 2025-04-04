# Terlalu Bagus Tuk Dibuang (Too Good Too Go Clone)

| Kebutuhan Teknologi      | Teknologi yang Digunakan             |
| ------------------------ | ------------------------------------- |
| Backend Framework        | Node.js + Express.js                  |
| Database                 | PostgreSQL                            |
| ORM                      | Prisma                                |
| Autentikasi              | JWT + Bcrypt.js                       |
| Keamanan                 | Helmet.js + CORS                      |
| Real-time (Opsional)     | Socket.io                             |
| Dokumentasi API          | Swagger                               |
| Testing                  | Jest + Supertest                      |
| Storage (Opsional)       | Cloudinary / Firebase Storage         |
| Deployment               | Railway / Render                      |
| Docker (Opsional)        | Untuk mempermudah deployment          |

| Table          | Fields                                                                    |
|----------------|---------------------------------------------------------------------------|
| Users (Customers) | id, name, email, password, phone, address, created_at                  |
| StoreOwners     | id, name, email, password, phone, created_at                             |
| Stores          | id, store_owner_id (FK), store_name, phone, location, category, created_at |
| StoreAdmins     | id, store_id (FK), name, email, password, phone, created_at              |
| Products        | id, store_id (FK), name, description, price, stock, expiration_date, created_at |
| Orders          | id, customer_id (FK), store_id (FK), status, total_price, created_at    |
| OrderDetails    | id, order_id (FK), product_id (FK), quantity, subtotal                    |
| Payments        | id, order_id (FK), method, status, transaction_id, created_at            |
| Reviews         | id, customer_id (FK), store_id (FK), rating, comment, created_at         |