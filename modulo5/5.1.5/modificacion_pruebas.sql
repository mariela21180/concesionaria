use bd111mil;

-- 1. Insertar el producto "turrón" de la empresa "misky" con un precio de 4$ y un stock de 100 unidades.
-- set @nuevo_id = (select max(codigo_producto)+1 from e01_producto);
-- insert into e01_producto values (@nuevo_id, "misky","turrón","El mas rico",4,100)

-- 2.Actualizar el código de area por "526" de los teléfonos que tenían código de área "551".
-- update e01_telefono set codigo_area = 526 where (codigo_area = 551)

-- 3.Borrar el producto insertado en 1.
-- select * from e01_producto where (marca = "misky")
-- delete from e01_producto where (codigo_producto = 102)

-- 4) Repaso insert, update y delete en las distintas tablas
-- Agrego cliente
-- set @nuevo_id = (select max(nro_cliente)+1 from e01_cliente);
-- insert into e01_cliente values (@nuevo_id, "Mariela", "Gonzalez", "25 de Mayo 963 dto 1", 1);
-- Agrego Telefono
-- insert into e01_telefono values (2494, 633817, "F", 101);
-- Agrego Producto
-- set @nuevo_id = (select max(codigo_producto)+1 from e01_producto);
-- insert into e01_producto values (@nuevo_id, "Tia Maruca", "Pepas", "Ricas", 45, 1);
-- Agrego Factura
-- set @nuevo_id = (select max(nro_factura)+1 from e01_factura);
-- insert into e01_factura values (@nuevo_id, '2019-10-11', 0, 0.21, 0,101);
-- Agrego Detalle Factura
-- set @nuevo_id = (select max(nro_item)+1 from e01_detalle_factura);
-- insert into e01_detalle_factura values (401, 100,  @nuevo_id, 1);