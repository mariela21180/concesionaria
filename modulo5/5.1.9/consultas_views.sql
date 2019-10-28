use bd111mil;

-- 1) Vista (con todas las tablas)
-- create view telefonos_de_clientes (nro_cliente, apellido, nombre, codigo_area, nro_telefono) as 
-- select DISTINCT c.nro_cliente, c.apellido, c.nombre, t.codigo_area, t.nro_telefono
-- from e01_cliente c 
-- join e01_telefono t on t.nro_cliente = c.nro_cliente
-- join e01_factura f on f.nro_cliente = c.nro_cliente
-- join e01_detalle_factura d on d.nro_factura = f.nro_factura
-- join e01_producto p on p.codigo_producto = d.codigo_producto

-- drop view productos_comprados_por_clientes;
-- create view productos_comprados_por_clientes (nro_cliente, codigo_producto, nombre_producto, marca, apellido, nombre, total_producto) as 
-- select f.nro_cliente, d.codigo_producto, p.nombre, p.marca, c.apellido, c.nombre, (d.cantidad * p.precio) as total_producto
-- from e01_cliente c 
-- join e01_telefono t on t.nro_cliente = c.nro_cliente
-- join e01_factura f on f.nro_cliente = c.nro_cliente
-- join e01_detalle_factura d on d.nro_factura = f.nro_factura
-- join e01_producto p on p.codigo_producto = d.codigo_producto
-- group by c.nro_cliente
-- order by f.nro_cliente asc;

-- 2) Trigger (for update de cantidad en detalles de factura)
create trigger OnUpdateCantidadDF after update
on e01_detalle_factura 
for each row
begin 
	@precio = select precio from e01_producto p inner join e01_detalle_factura d on d.codigo_producto = p.codigo_producto where p.codigo_producto = old.codigo_producto
	if (new.cantidad > 10)

end;

-- 3) Procedimiento simple (una consulta con parámetros)
-- 4) Función con parámetro (consulta que devuelva algo con un parámetro)
-- 5) procedimiento con un cursor (que genere una tabla temporal con cada cliente que tenga una cantidad de un producto determinado)
