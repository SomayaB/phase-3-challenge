DROP DATABASE IF EXISTS grocery_store;
CREATE DATABASE grocery_store;

\c grocery_store

DROP TABLE IF EXISTS grocery_items;
CREATE TABLE grocery_items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL NOT NULL,
  section VARCHAR(100)
);

DROP TABLE IF EXISTS shoppers;
CREATE TABLE shoppers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(80)
);

DROP TABLE IF EXISTS orders;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  shopper_id INTEGER REFERENCES shoppers (id)
);

DROP TABLE IF EXISTS order_details;
CREATE TABLE order_details (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders (id),
  product_id INTEGER REFERENCES grocery_items (id)
);
