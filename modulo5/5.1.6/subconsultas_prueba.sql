USE bd111mil;

-- Clientes que no tienen facturas
-- con Exists
-- SELECT nombre, apellido FROM e01_cliente WHERE NOT EXISTS (
--     SELECT * FROM e01_factura WHERE nro_cliente = e01_cliente.nro_cliente
-- )
-- con In/Not In
-- SELECT nombre, apellido FROM e01_cliente WHERE nro_cliente NOT IN (
--      SELECT nro_cliente FROM e01_factura
-- )

-- Productos no facturados
-- SELECT * from e01_producto where codigo_producto in (
-- 	select codigo_producto from e01_detalle_factura
-- )

-- Ejercicios
--------------------------------------------------------------------------------------------------------------
-- 1. Listar todas las Facturas que hayan sido compradas por el cliente de nombre "Pandora" y apellido "Tate".
-- select * from e01_factura where nro_cliente in (
-- 	select nro_cliente from e01_cliente where nombre = "Pandora" and apellido = "Tate"  
-- )

-- 2. Listar todas las Facturas que contengan productos de la marca "In Faucibus Inc."
-- select * from e01_factura where nro_factura in (
-- 	select nro_factura from e01_detalle_factura where codigo_producto in (
-- 		select codigo_producto from e01_producto where marca = "In Faucibus Inc."
--     )
-- )

-- 3. Todos los clientes que hayan facturado mas de 450000 en total con iva de los productos,
-- cuyo stock sea > 200
-- tenga mas de 95 unidades vendidas
-- select * from e01_cliente where nro_cliente in (
-- 	select nro_cliente from e01_factura where (total_con_iva > 450000) and nro_factura in (
-- 		select nro_factura from e01_detalle_factura where codigo_producto in (
-- 			select codigo_producto from e01_producto where stock > 200 
-- 		) and cantidad > 95
-- 	)
-- )