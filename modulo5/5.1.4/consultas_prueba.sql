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
-- 1. Obtener todos los datos de todos los clientes
-- select * from e01_cliente

-- 2. Obtener solo los nombres y apellidos de todos los clientes 
-- select nombre, apellido from e01_cliente

-- 3. Obtener los nombres de los diferentes productos
-- select distinct nombre from e01_producto 

-- 4) Obtener los diferentes códigos de área de los teléfonos
-- select count distinct codigo_area from e01_telefono;
-- select count(distinct codigo_area) from e01_telefono;

-- 5) Obtener el listado de todos los productos que tengan un stock mayor a 50 y menor a 200
-- select * from e01_producto where stock > 50 and stock < 200; 

-- 6) Obtener los datos correspondientes al producto cuyo codigo es 50
-- select * from e01_producto where codigo_producto = 50; 

-- 7) Obtener los datos de las facturas cuyo total (con iva incluido) sea mayor a 400.000$ y lo haya realizado el cliente número 8
-- select * from e01_factura where nro_cliente = 8 and total_con_iva > 400000; 

-- 8) Obtener los datos del cliente cuyo nombre es “Ivor” y el apellido “Saunders”
-- select * from e01_cliente where nombre = 'Ivor' and apellido = 'Saunders'; 

-- 9) Todas las Facturas pertenecientes al cliente número 10
-- select * from e01_factura where nro_cliente = 10; 

-- 10) Todas las Facturas que superen los 500.000$
-- select * from e01_factura where total_con_iva > 500000; 

-- 11) Contar las facturas de año 2017
-- select count(*) from e01_factura where fecha between '2017-01-01' and '2017-12-31'

-- 12) Contar las facturas por años
-- select year(fecha), count(*) from e01_factura group by YEAR(fecha);

-- 13) Contar productos con stock > 100 y con precio entre 100 y 300
-- select count(*) from e01_producto where (stock > 100) and (precio between 100 and 300)

-- 14) Para el producto 44 (que es?) saber en cuantas facturas está y cuantos se vendieron
-- SELECT * FROM e01_producto where codigo_producto = 44;
-- SELECT count(*), sum(cantidad) FROM e01_detalle_factura where codigo_producto = 44;

-- 15) Total facturado al cliente 8 con y sin iva
-- SELECT * FROM e01_producto where codigo_producto = 44;
SELECT sum(total_sin_iva) as Total_sin_IVA,sum(total_con_iva) as Total_con_IVA,((sum(total_con_iva)-sum(total_sin_iva))/sum(total_sin_iva)) as IVA FROM e01_factura where nro_cliente = 8;

