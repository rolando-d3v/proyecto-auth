-- Active: 1729698341071@@127.0.0.1@5432@tienda



SELECT * FROM usuario;



-- transacion
BEGIN;
update usuario set dni = '12345678' where id = '1460624c-991e-43a8-b809-ae385d12a0e8';
update role set name = 'Administrador' where id = 1;
COMMIT;