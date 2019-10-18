-- Ejemplos:

-- select  c.nombre, c.apellido, count(*) as cantidad
-- from e01_producto p 
-- inner join e01_detalle_factura d on p.codigo_producto = d.codigo_producto
-- inner join e01_factura f on d.nro_factura = f.nro_factura
-- inner join e01_cliente c on f.nro_cliente = c.nro_cliente
-- group by c.nombre, c.apellido

-- deben coincidir los campos del select con los campos del group by
-- si hay un where, va antes del group by
-- select c.nombre, c.apellido, p.nombre as nombre_producto,
-- count(distinct p.codigo_producto) as productos_distintos, 
-- count(*) as todos_los_productos
-- from e01_producto p 
-- inner join e01_detalle_factura d on p.codigo_producto = d.codigo_producto
-- inner join e01_factura f on d.nro_factura = f.nro_factura
-- inner join e01_cliente c on f.nro_cliente = c.nro_cliente
-- group by c.nombre, c.apellido, p.nombre

-- SELECT nombre,
-- COUNT(nombre) 
-- FROM e01_producto 
-- GROUP BY nombre
-- order by COUNT(nombre) desc, nombre asc;

-- el having es un where del group by
-- SELECT lower(marca), -- o upper en mayusculas, para evitar errores de case sencitive (si estuviera configurado)
-- SUM(stock) 
-- FROM e01_producto 
-- GROUP BY marca HAVING SUM(stock)<50; -- despues de agrupar y sumar, filtro sobre los resultados

-- Es importante usar un limit (o top en SQL server) para ahicar la consulta, si las tablas son muy grande
-- mejor si es combinado con un order by
-- SELECT * FROM e01_producto 
-- ORDER BY precio DESC LIMIT 3;

-- Ejercicios:
-- 1. Obtener el número total de clientes que se encuentran registrados en la base de datos
-- select count(*)
-- from e01_cliente c

-- 2. Listar el precio promedio de cada marca 
-- select p.marca, avg(p.precio) as precio_promedio
-- from e01_producto p
-- group by p.marca
-- order by p.marca asc

-- 3. Listar el nombre junto con el precio promedio de los 10 primeros productos ordenados alfabéticamente
-- select p.nombre, avg(p.precio) as precio_promedio
-- from e01_producto p
-- group by p.nombre
-- order by p.nombre asc
-- limit 10

-- 4. Listar lo que gastó cada cliente, mostrando el número de cliente y la suma total
-- select c.nro_cliente, sum(f.total_con_iva) as total_gastado
-- from e01_cliente c
-- inner join e01_factura f on c.nro_cliente = f.nro_cliente
-- group by c.nro_cliente
-- order by sum(f.total_con_iva) desc;

-- 5. Listar las marcas cuyo promedio de precios sea mayor a 600$
-- select count(*) from (
-- select p.marca, avg(p.precio) as precio_promedio
-- from e01_producto p
-- group by p.marca
-- having precio_promedio > 600
-- order by precio_promedio desc
-- ) a
