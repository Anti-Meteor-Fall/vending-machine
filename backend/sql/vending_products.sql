BEGIN;
-- vending_product
insert into vending_product (name, price, image, is_set, created_at, updated_at) values ('アクエリアス', 100, 'products/product1.png', TRUE, current_timestamp, current_timestamp);
insert into vending_product (name, price, image, is_set, created_at, updated_at) values ('綾鷹カフェ', 100, 'products/product2.png', TRUE, current_timestamp, current_timestamp);

-- vending_stock

-- vending_order_method

COMMIT;
