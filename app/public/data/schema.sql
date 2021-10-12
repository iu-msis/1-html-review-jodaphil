SHOW DATABASES;

CREATE DATABASE IF NOT EXISTS bookdb;

USE bookdb;

DROP TABLE IF EXISTS books;
CREATE TABLE books (
title varchar(24) UNIQUE NOT NULL,
author varchar(48),
pubyear char(4),
pages varchar(5),
MSRP decimal (5,2),
primary key (title)
);

INSERT INTO books (title, author, pubyear, pages, MSRP) VALUES 
('Harry Potter', 'JK Rowling', 2002, 175, 20.99),
('Huckleberry Finn', 'Mark Twain', 1800, 100, 10.99),
('The Stand', 'Stephen King', 2004, 1175, 20.99),
('The Lord of the Rings', 'JRR Tolken', 1954, 1178, 35.00),
('The Lion, the Witch, and the Wardrobe', 'CS Lewis', 1950, 310, 13.99),
('The Hobbit', 'JRR Tolken', 1937, 224, 14.49)
;