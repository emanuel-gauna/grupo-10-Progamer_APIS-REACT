DROP DATABASE IF EXISTS pcgamer_db;
CREATE DATABASE pcgamer_db;

USE pcgamer_db;

-- Usuario


DROP TABLE IF EXISTS users;
CREATE TABLE users(
id INT unsigned NOT NULL AUTO_INCREMENT,
name varchar(100) NOT NULL,
lastname varchar(100) NOT NULL,
email varchar(100) NOT NULL,
pass varchar(150) NOT NULL,
avatar varchar(100) NOT NULL,
address varchar(100) DEFAULT NULL,
city varchar(100) DEFAULT NULL,
postalCode varchar(100) DEFAULT NULL,
tel varchar(100) DEFAULT NULL,
user_category INT unsigned NOT NULL,
PRIMARY KEY (id)
);
insert into users(id, name, lastname, email, pass, avatar, address, city, postalCode, tel, user_category)
values (default, 'usuario', 'admin', 'usuario@admin.com', '$2a$10$DQ6OKW81aFwhgLwt8bZRO.cqmZuYIgMBd9vj7EAEXANu2TduWE/3K', 'default-image.png', null, null, null, null, 1),
(default, 'usuario', 'log', 'usuario@log.com', '$2a$10$U5HKDmGaT3dUVLIMwUmcNOEIuG7R90FvMigXkN7eYt2TVRiEi2FXC', 'default-image.png', null, null, null, null, 0);

/*select * from  users;

select  users.id,name, lastname, email, pass, avatar, address, city, postalCode, tel, user_categories.rol
from users inner join user_categories
on users.user_category_id = user_categories.id;*/


-- Banner

DROP TABLE IF EXISTS banners;
CREATE TABLE banners(
id INT unsigned NOT NULL AUTO_INCREMENT,
name varchar(100) NOT NULL,
PRIMARY KEY (id)
);
insert into banners(id, name)
values(default, 'b-01.jpg'),(default, 'b-02.jpg'),(default, 'b-03.png'),(default, 'b-04.jpg'),(default, 'b-ofert.jpg');
/*select * from banners;*/

-- Product

DROP TABLE IF EXISTS product_category;
 CREATE TABLE product_category(
 id INT unsigned NOT NULL AUTO_INCREMENT,
 name varchar(100) NOT NULL,
 code varchar(100) NOT NULL,
 PRIMARY KEY (id)
 );
 insert into product_category(id, name, code)
 values (default, 'Notebooks', 'notebooks'),
 (default, 'Computadores', 'pc'),
 (default, 'Componentes de PC', 'Components'),
 (default, 'Monitores', 'monitors'),
 (default, 'Consolas', 'console');
 
 /*select * from product_category;*/
 
 
 DROP TABLE IF EXISTS products;
CREATE TABLE products(
id INT unsigned NOT NULL AUTO_INCREMENT,
name varchar(100) NOT NULL,
brand varchar(100) NOT NULL,
lastname varchar(100) NOT NULL,
price DECIMAL(11,2) unsigned NOT NULL,
discount INT unsigned DEFAULT NULL,
stock TINYINT(200) unsigned NOT NULL,
description TEXT DEFAULT NULL,
cpu varchar(100) DEFAULT NULL,
graficCard varchar(100) DEFAULT NULL,
so varchar(100) DEFAULT NULL,
ram varchar(100) DEFAULT NULL,
capacity varchar(100) DEFAULT NULL,
puertos varchar(100) DEFAULT NULL,
hdmi varchar(100) DEFAULT NULL,
ethernet varchar(100) DEFAULT NULL,
usb varchar(100) DEFAULT NULL,
wifi varchar(100) DEFAULT NULL,
webCam varchar(100) DEFAULT NULL,
bluetooth varchar(100) DEFAULT NULL,
screenSize varchar(100) DEFAULT NULL,
display varchar(100) DEFAULT NULL,
resolution varchar(100) DEFAULT NULL,
conection varchar(100) DEFAULT NULL,
high varchar(100) DEFAULT NULL,
weight varchar(100) DEFAULT NULL,
width varchar(100) DEFAULT NULL,
depth varchar(100) DEFAULT NULL,
product_category_id INT unsigned DEFAULT NULL,
PRIMARY KEY (id),
FOREIGN KEY (product_category_id) references product_category(id) ON DELETE SET NULL ON UPDATE SET NULL
);
insert into products(id, name, brand, lastname, price, discount, stock, description, cpu, graficCard, so, ram, capacity, puertos, hdmi, ethernet, usb, wifi, webCam, 
bluetooth, screenSize, display, resolution, conection, high, weight, width, depth, product_category_id)
values (default, 'Asus Vivobook X1502', 'Asus', 'Notebook', 244000, 25, 2, 'Procesador:Intel Core i5 4.40 Ghz, Memoria: 8 GB soldados + 8 GB SO-DIMM, Pantalla: Full HD y antireflejante, Sistema de audio: SonicMaster, Puertos: 3 USB 3.2 tipo C y A y otro USB 2.0 Tipo A',
'Intel Core i5 de 12va Generación', 'Intel® Iris® Xe Graphics', 'Windows', '16 GB DDR4', 'Disco SSD 480GB M.2 Nvme PCIE', '4-USB y 1-HDMI', '1 X HDMI Versión 1.4', 'No', 'si', 'si', 'si', 'si',
null, 'TN', '1920 x 1080 px', null, '23,25 mm', '1,7 kg', '35,97 mm', '1,99 mm', 1),(default, 'Monitor Gigabyte Gaming 27 Full HD 144Hz', 'Gigabyte', '', 178915, 0, 2, 'Ángulo de visión, horizontal y vertical: 178°, sRGB: Si , Cobertura sRGB (típica): 125%, Tecnología Flicker free (reduce el parpadeo de la pantalla): Si',
'', '', '', '', '', '2 USB tipo A y 2 HDMI', 'si', '', 'si', '', '', '','68,6 cm (27″)', 'LCD', '1920 x 1080 px', null, '365.5 mm', '6.6 Kg', '619 mm', '56 mm', 4), (default, 'SickleFlow 120 RGB', 'Cooler Master', 'Cooler', 7984, 25, 4, 'un buen producto de calidad', null, null, null, null, null, null, null, null, null, null, null, 
null, null, null, null, null, '10 cm', '3g', '15 cm', '12 cm', 3),(default, 'Nintendo Switch 32GB Standard', 'Nintendo', 'Consola', 178499, 5, 2, 'Edición Standard, Color: Gris/Negro ,Tipos de tarjetas de memoria: Micro-SD, Micro-SDXC, Micro-SDHC', null, null, null, '4 GB', '32 GB LPDDR4', null, 'si', null, 'no', 'si', null, 
null, null, null, null, null, null, null, null, null, 5),(default, 'Pack-2 compu PRO-GAMER Heavy', 'Varios', 'PC', 676299, 5, 1, 'Motherboard: Chipset B560 ASUS O GIGABYTE, Marca de placa grafica: Asus o Gigabyte, Fuente: 750w 80 Plus, Gabinete: Seasonic Syncro Q704',
 'Intel i7 11700K', 'Nvidia Gtx 3070 8gb', 'Windows', '16GB DDR4 3000MHz', 'SSD 1 TB', 'USB tipo 2x A y 1x C y 1-HDMI', '1 X HDMI Versión 1.4', 'Si', 'si', 'no', 'si', 
'si', null, null, null, null, null, null, null, null, 2);



/*select * from products;

select  products.id, products.name, brand, lastname, price, discount, stock, description, cpu, graficCard, so, ram, capacity, puertos, hdmi, ethernet, usb, wifi, webCam, 
bluetooth, screenSize, display, resolution, conection, high, weight, width, depth, product_category.name as category
from products inner join product_category
on products.product_category_id = product_category.id;

select  products.id, products.name, brand, lastname, price, discount, stock, description, cpu, graficCard, so, ram, capacity, puertos, hdmi, ethernet, usb, wifi, webCam, 
bluetooth, screenSize, display, resolution, conection, high, weight, width, depth, product_category.name as category, images.name as imagenes
from products inner join product_category
on products.product_category_id = product_category.id
inner join images on images.products_id = products.id;*/

DROP TABLE IF EXISTS images;
CREATE TABLE images(
 id INT unsigned NOT NULL AUTO_INCREMENT,
 name varchar(255) NOT NULL,
 products_id int unsigned DEFAULT NULL,
 PRIMARY KEY (id),
 FOREIGN KEY (products_id) references products(id) ON DELETE SET NULL ON UPDATE SET NULL
 );
 insert into images(id, name, products_id)
 values (default, 'asus-vivobook-x1502_1.jpeg',1),(default, 'asus-vivobook-x1502_2.jpeg',1),(default, 'asus-vivobook-x1502_3.jpeg',1),
 (default, 'monitor-gigabyte-gaming-27-1.jpg',2),(default, 'monitor-gigabyte-gaming-27-2.png',2),(default, 'monitor-gigabyte-gaming-27-3.jpg',2), 
 (default, 'sickleflow-120-rgb_2161300_md.png',3),(default, 'Nintendo-Switch-32GB-Standard_1.jfif',4),(default, 'Nintendo-Switch-32GB-Standard_2.jfif',4),
 (default, 'Nintendo-Switch-32GB-Standard_3.jfif',4),(default, 'pc-armada_2-1.jpg',5),(default, 'pc-armada_2-2.jfif',5),(default, 'pc-armada_2-3.jpg',5);
 
 
 
 /*select * from images;*/
