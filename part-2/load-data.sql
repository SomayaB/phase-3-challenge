\c grocery_store

COPY grocery_items (name, price, section) FROM '/Users/Somaya/Desktop/LGProjects/phase-3-challenge/part-2/grocery.csv' DELIMITER ',' CSV HEADER;

INSERT INTO shoppers (name)
  VALUES('Alex'), ('Sophie'), ('Charlie'), ('Mary'), ('Tim');

INSERT INTO orders (shopper_id)
  VALUES (5), (4), (4), (2), (3);

INSERT INTO order_details (order_id, product_id)
  VALUES (1,7), (2,11), (2,38), (3,11), (3,13), (3,25), (4,19), (5, 12), (5,31);
