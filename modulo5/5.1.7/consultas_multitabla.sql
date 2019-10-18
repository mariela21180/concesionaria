use bd111mil;

-- 1. Mostrar cada teléfono junto con los datos del cliente.
-- select c.*, t.codigo_area, t.nro_telefono from e01_cliente c inner join e01_telefono t on c.nro_cliente = t.nro_cliente;

-- 2. Mostrar todos los teléfonos del cliente número 30 junto con todos sus datos personales.
-- select c.*, t.codigo_area, t.nro_telefono from e01_telefono t inner join e01_cliente c on c.nro_cliente = t.nro_cliente where c.nro_cliente = 30;

-- 3. Mostrar nombre y apellido de cada cliente junto con lo que gastó en total (con iva incluido).
-- select c.nombre, c.apellido, f.total_con_iva from e01_cliente c inner join e01_factura f on c.nro_cliente = f.nro_cliente; 

-- 4. dado el cliente 'Xerxes', 'Hale' decime la cantidad y la marca facturada del producto fish

-- select c.nombre, c.apellido, d.cantidad, p.nombre, p.marca
-- from e01_cliente c 
-- inner join e01_factura f on c.nro_cliente = f.nro_cliente 
-- inner join e01_detalle_factura d on f.nro_factura = d.nro_factura
-- inner join e01_producto p on p.codigo_producto = d.codigo_producto
-- where c.nombre = 'Xerxes' and c.apellido = 'Hale'
-- and p.nombre = 'fish'

-- 5. Buscar todos los productos distintos facturados (nombre y descripcion) del cliente nombre = 'Constance' y apellido = 'Sweeney'
-- select count(*) from (
-- select distinct p.nombre, p.descripcion
-- from e01_producto p 
-- inner join e01_detalle_factura d on p.codigo_producto = d.codigo_producto
-- inner join e01_factura f on d.nro_factura = f.nro_factura
-- inner join e01_cliente c on f.nro_cliente = c.nro_cliente
-- where c.nombre = 'Constance' and c.apellido = 'Sweeney' 
-- ) a

-- 6. Buscar del ejemplo anterior, entre que fechas se le facturó - FALTA!!!!!!!!!
-- select distinct p.nombre, p.descripcion
-- from e01_producto p 
-- inner join e01_detalle_factura d on p.codigo_producto = d.codigo_producto
-- inner join e01_factura f on d.nro_factura = f.nro_factura
-- inner join e01_cliente c on f.nro_cliente = c.nro_cliente
-- where c.nombre = 'Constance' and c.apellido = 'Sweeney' 

