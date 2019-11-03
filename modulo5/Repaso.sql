-- 5.1.7
-- _______________________________________________________________________
use repaso_facturacion;

-- 1.
-- select c.nro_cliente, c.nombre, c.apellido, c.direccion, c.activo, t.codigo_area, t.nro_telefono, t.tipo
-- from repaso_facturacion.e01_cliente c 
-- join repaso_facturacion.e01_telefono t on c.nro_cliente = t.nro_cliente;

-- 2.
-- select c.nro_cliente, t.codigo_area, t.nro_telefono, t.tipo, c.nombre, c.apellido, c.direccion, c.activo
-- from repaso_facturacion.e01_cliente c 
-- join repaso_facturacion.e01_telefono t on c.nro_cliente = t.nro_cliente
-- where c.nro_cliente = 30;

-- 3.
-- select c.nro_cliente, c.nombre, c.apellido, sum(f.total_sin_iva), sum(f.total_con_iva)
-- from repaso_facturacion.e01_cliente c
-- join repaso_facturacion.e01_factura f on c.nro_cliente = f.nro_cliente
-- group by c.nro_cliente;

-- 5.1.8
-- _______________________________________________________________________
-- use repaso_facturacion;

-- 1.
-- select count(*) from e01_cliente;

-- 2.
-- select marca, avg(precio) 
-- from e01_producto
-- group by marca;

-- 3. 
-- select p.nombre, avg(p.precio)  
-- from e01_producto p 
-- group by p.nombre
-- order by p.nombre asc
-- limit 10;

-- 4.
-- select f.nro_cliente, sum(f.total_sin_iva), sum(f.total_con_iva)
-- from e01_factura f
-- group by f.nro_cliente;

-- 5.
-- select marca, avg(precio)
-- from e01_producto
-- group by marca 
-- having avg(precio) > 600



-- 5.1.9.2
-- _______________________________________________________________________
-- create database  if not exists repaso; 
-- use repaso;

-- drop table if exists envio;
-- drop table if exists articulo;
-- drop table if exists proveedor;

-- create table if not exists proveedor (
-- id_proveedor int,
-- nombre varchar(45),
-- rubro varchar(45),
-- ciudad varchar(45),
-- primary key (id_proveedor)
-- );

-- create table if not exists articulo (
-- id_articulo int,
-- descripcion varchar(45),
-- peso numeric,
-- ciudad varchar(45),
-- primary key (id_articulo)
-- );

-- create table if not exists envio (
-- cantidad numeric,
-- id_proveedor int,
-- id_articulo int,
-- constraint id_envio_articulo foreign key (id_articulo) references articulo(id_articulo) on update no action on delete no action,
-- constraint id_envio_proveedor foreign key (id_proveedor) references proveedor(id_proveedor) on update no action on delete no action
-- );

-- insert into `articulo` value(1,'a',50,'Tandil');
-- insert into `articulo` value(2,'b',70,'Azul');
-- insert into `articulo` value(3,'c',90,'Olavarria');
-- insert into `articulo` value(4,'d',110,'Tres Arroyos');
-- insert into `articulo` value(5,'e',130,'Bahia Blanca');
-- insert into `articulo` value(6,'f',150,'Buenos Aires');


-- insert into `proveedor` value(1,'x','Golosinas','Tandil');
-- insert into `proveedor` value(2,'y','Carniceria','Azul');
-- insert into `proveedor` value(3,'z','Verduleria','Olavarria');

-- insert into `envio` value(200,1,1);
-- insert into `envio` value(500,2,1);
-- insert into `envio` value(1000,3,2);
-- insert into `envio` value(5,1,3);
-- insert into `envio` value(600,2,5);
-- insert into `envio` value(700,3,4);
-- insert into `envio` value(80,1,6);
-- insert into `envio` value(80,1,3);
-- insert into `envio` value(5,1,3);

-- 5.1.9.2.1
-- _______________________________________________________________________
-- drop view if exists ENVIOS500;
-- create view ENVIOS500 as 
-- select * from envio e where e.cantidad > 500;

-- 5.1.9.2.2
-- _______________________________________________________________________
-- drop view if exists PRODUCTOS_MAS_PEDIDOS;
-- create view PRODUCTOS_MAS_PEDIDOS as
-- select distinct e.id_articulo, a.descripcion, a.peso, a.ciudad from ENVIOS500 e 
-- join articulo a on e.id_articulo = a.id_articulo;

-- 5.1.9.2.3
-- _______________________________________________________________________
-- drop view if exists ENVIOS_PROV;
-- create view ENVIOS_PROV as 
-- select e.id_proveedor, sum(e.cantidad) 
-- from envio e
-- group by e.id_proveedor;

-- 5.1.9.2.4
-- _______________________________________________________________________
-- drop view if exists DETALLE_ENVIOS;
-- create view DETALLE_ENVIOS as 
-- select a.descripcion Producto, a.peso Peso, p.nombre Proveedor, e.cantidad Cantidad
-- from ENVIOS500 e
-- join proveedor p on e.id_proveedor = p.id_proveedor
-- join articulo a on a.id_articulo = e.id_articulo;


-- Ejercicios Slack
-- _______________________________________________________________________
use repaso_facturacion;
-- 1) Vista (con todas las tablas)

-- create view todas_las_tablas as
-- select c.nro_cliente, c.nombre nombre_cliente, c.apellido, c.direccion, c.activo, t.codigo_area, t.nro_telefono, t.tipo, f.nro_factura, f.fecha, f.iva, f.total_sin_iva, f.total_con_iva, d.nro_item, d.cantidad, p.codigo_producto, p.nombre producto, p.marca, p.descripcion, p.precio, p.stock 
-- from repaso_facturacion.e01_telefono t
-- join repaso_facturacion.e01_cliente c on t.nro_cliente = c.nro_cliente
-- join repaso_facturacion.e01_factura f on c.nro_cliente = f.nro_cliente
-- join repaso_facturacion.e01_detalle_factura d on f.nro_factura = d.nro_factura
-- join repaso_facturacion.e01_producto p on d.codigo_producto = p.codigo_producto;

-- 2) Trigger (for update de cantidad en detalles de factura)
drop trigger update_cantidad;
delimiter $$
create trigger update_cantidad 
after update on repaso_facturacion.e01_detalle_factura 
for each row
begin
	declare v_total_anterior int default 0;
    declare v_total_nuevo int default 0;
    declare v_precio float default 0;
    
    set v_precio = (select precio from repaso_facturacion.e01_producto p where p.codigo_producto = old.codigo_producto);
	set v_total_anterior = old.cantidad * v_precio;
    set v_total_nuevo = new.cantidad * v_precio;
    
	if (old.cantidad > 50) then 
		set v_total_anterior = v_total_anterior * 0.9;
		elseif (old.cantidad > 5) then
			set v_total_anterior = v_total_anterior * 0.95;  		
    end if;
    
	if (new.cantidad > 50) then 
		set v_total_nuevo = v_total_nuevo * 0.9;
		elseif (new.cantidad > 5) then
			set v_total_nuevo = v_total_nuevo * 0.95;  		
    end if;
    
    update repaso_facturacion.e01_factura f set f.total_sin_iva = (f.total_sin_iva - v_total_anterior + v_total_anterior) where f.nro_factura = old.nro_factura;
    update repaso_facturacion.e01_factura f set f.total_con_iva = (f.total_sin_iva * (1 + (f.iva / 100))) where f.nro_factura = old.nro_factura;
end $$
delimiter ;
-- 67
update repaso_facturacion.e01_detalle_factura d set d.cantidad = 5 where d.nro_factura = 1 and d.nro_item = 29;

-- 3) Procedimiento simple (una consulta con parámetros)
-- 4) Función con parámetro (consulta que devuelva algo con un parámetro)
-- 5) procedimiento con un cursor (que genere una tabla temporal con cada cliente que tenga una cantidad de un producto determinado)