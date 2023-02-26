CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(40) DEFAULT NULL,
    email VARCHAR(50) DEFAULT NULL,
    PRIMARY KEY('id')
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE users(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(40),
    email VARCHAR(40)
)

INSERT INTO users(name, email)VALUES('maria bia', 'mbia@oi.com');

SELECT id, name, email FROM users;

SELECT id, name, email FROM users LIMIT 1 OFFSET 3;

SELECT * FROM users;

SELECT * FROM users WHERE email LIKE '%m%';

SELECT * FROM users WHERE email LIKE 'm%';

SELECT * FROM users WHERE email LIKE '%m';

SELECT * FROM users WHERE email = 'mbia@oi.com';

SELECT * FROM users WHERE id = 11;

DELETE FROM users WHERE id = 11;

