use bd111mil;

-- select * from e01_cliente limit 10;
-- select marca from e01_producto;
-- select apellido from e01_cliente order by apellido;
-- select distinct apellido from e01_cliente order by apellido;

-- select * from e01_cliente
-- where apellido = 'Leblanc';
-- where apellido = 'Leblanc' or apellido = "boyle" or nombre = "drew";
-- where apellido = 'Leblanc' or (apellido = "boyle" and nombre = "drew");
-- where apellido like '%l';
-- where apellido like '%l%';
-- where apellido not like '%l%';
-- where activo between 30 and 90;
-- where not activo between 30 and 90;
-- where activo between 10 and 20 or activo between 50 and 60;
-- where activo between 10 and 70 and activo between 50 and 60;
-- where nombre between 'P' and 'K'; (con letras no funciona)
-- where nombre in ('Brent', 'Bianca', 'Juan');
-- where nombre not in ('Brent', 'Bianca', 'Juan');

-- select * from e01_producto
-- where precio > 900
-- order by precio;

-- select * from e01_producto
-- where stock between 60 y 100
-- order by stock;

-- select * from e01_cliente
-- where nombre like 'D%';
-- where nombre like '%m__n';

-- select * from e01_producto 
-- where (nombre like 'fish') or (stock >= 26);

-- EJERCICIOS --------------------------------------------

-- 4)
-- select count distinct codigo_area from e01_telefono;
-- select count(distinct codigo_area) from e01_telefono;

-- 5)
-- select * from e01_producto where stock > 50 and stock < 200; 

-- 6)
-- select * from e01_producto where codigo_producto = 50; 

-- 7)
-- select * from e01_factura where nro_cliente = 8 and total_con_iva > 400000; 

-- 8)
-- select * from e01_cliente where nombre = 'Ivor' and apellido = 'Saunders'; 

-- 9)
-- select * from e01_factura where nro_cliente = 10; 

-- 10)
select * from e01_factura where total_con_iva > 500000; 