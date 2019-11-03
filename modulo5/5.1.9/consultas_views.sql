use bd111mil;


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



-- Ejercicios de Clase
-- _______________________________________________________________________


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

-- drop trigger OnUpdateCantidadDF 

-- DELIMITER $$
-- create trigger OnUpdateCantidadDF 
-- after 
-- update on e01_detalle_factura 
-- for each row
-- begin 
-- 	declare precio_producto float default 0;
-- 	declare total_anterior double default 0;
-- 	declare total_nuevo double default 0;
-- 	set precio_producto = (select precio from e01_producto p where p.codigo_producto = old.codigo_producto);
-- 	set total_anterior = precio_producto * old.cantidad;
-- 	set total_nuevo = precio_producto * new.cantidad; 
-- 	if old.cantidad > 10 then 
-- 		set total_anterior = total_anterior * 0.9;
--         elseif old.cantidad > 5 then 
-- 			set total_anterior = total_anterior * 0.95;
-- 	END IF;
-- 	if new.cantidad > 10 then
-- 		set total_nuevo = total_nuevo * 0.9;
--         elseif new.cantidad > 5 then 
-- 			set total_nuevo = total_nuevo * 0.95;
-- 	END IF;
-- 	update e01_factura f set f.total_sin_iva = (f.total_sin_iva - total_anterior + total_nuevo) where f.nro_factura = old.nro_factura;
-- 	update e01_factura f set f.total_con_iva = (f.total_sin_iva * (1 + (f.iva / 100))) where f.nro_factura = old.nro_factura;   
-- end$$
-- DELIMITER ;

-- update e01_detalle_factura d set d.cantidad = 25 where d.nro_factura = 4 and d.nro_item = 66;



-- 3) Procedimiento simple (una consulta con parámetros)
    
-- drop procedure if exists listar_descuentos;
-- DELIMITER $$
-- create procedure listar_descuentos (in producto_arg integer)
-- begin
-- 	drop view if exists lista_descuentos;
-- 	create view lista_descuentos as
-- 		select p.codigo_producto, p.nombre, p.marca, p.precio precio_normal, (p.precio*0.95) precio_mas_de_5, (p.precio*0.9) precio_mas_de_10 
-- 		from e01_producto p;
--     select * from lista_descuentos
--     where lista_descuentos.codigo_producto = producto_arg; -- como uso el parametro producto_arg aca???
-- end$$
-- DELIMITER ;
-- call listar_descuentos(4);


-- 4) Función con parámetro (consulta que devuelva algo con un parámetro)
-- drop function if exists calcular_total;
-- DELIMITER $$
-- create function calcular_total(producto integer, cantidad float)
-- returns double 
-- DETERMINISTIC -- Error Code: 1418. This function has none of DETERMINISTIC, NO SQL, or READS SQL DATA in its declaration and binary logging is enabled (you *might* want to use the less safe log_bin_trust_function_creators variable)

-- begin 
-- 	declare precio float default 0;
--     declare total float default 0;
--     set precio = (select p.precio from e01_producto p where p.codigo_producto = producto);
-- 	if cantidad > 10 then
-- 		set total = precio * 0.9 * cantidad;
--         elseif cantidad > 5 then 
-- 			set total = precio * 0.95 * cantidad;
-- 		else			
-- 			set total = precio * cantidad;
-- 	END IF;
--     return total;
-- end $$
-- DELIMITER ;

-- select calcular_total(4,11);


-- 5) procedimiento con un cursor (que genere una tabla temporal con cada cliente que tenga una cantidad de un producto determinado)
-- drop procedure if exists listar_productos_segun_cantidad;
-- DELIMITER $$
-- create procedure listar_productos_segun_cantidad (in param_producto integer, in param_cantidad float)
-- begin
-- 	declare v_nro_cliente integer default 0;
-- 	declare v_nombre varchar(45) default 0;
-- 	declare v_apellido varchar(45) default 0;        
-- 	declare v_nro_factura integer default 0;     
-- 	declare v_codigo_producto integer default 0;  
-- 	declare v_cantidad float default 0;
-- 	DECLARE fin INTEGER DEFAULT 0;
--         
-- 	declare cDetalleFactura cursor for select codigo_producto, cantidad, nro_factura from e01_detalle_factura;
-- 	declare cFacturas cursor for select nro_cliente from e01_factura where nro_factura=v_nro_factura;
-- 	declare cClientes cursor for select nombre, apellido from e01_cliente where nro_cliente=v_nro_cliente;
-- 	DECLARE CONTINUE HANDLER FOR NOT FOUND SET fin=1;

-- 	drop temporary table if exists productos_segun_cantidad;
-- 	create temporary table productos_segun_cantidad (
-- 		nro_cliente integer not null default 0,
--         nombre varchar(45),
--         apellido varchar(45),   
-- 		codigo_producto integer,
--         cantidad float
--     );
--     
--     open cDetalleFactura; 
-- 	  get_detalle_producto: LOOP
-- 		FETCH cDetalleFactura INTO v_codigo_producto,v_cantidad,v_nro_factura;
-- 		IF fin = 1 THEN
-- 		   LEAVE get_detalle_producto;
-- 		END IF;
-- 		open cFacturas;
-- 			FETCH cFacturas INTO v_nro_cliente;            
-- 		close cFacturas;
-- 		open cClientes;
-- 			FETCH cClientes INTO v_nombre, v_apellido;            
-- 		close cClientes;
--         
--         if ((v_codigo_producto = param_producto) and (v_cantidad = param_cantidad)) then
-- 			insert into productos_segun_cantidad (nro_cliente, nombre, apellido, codigo_producto, cantidad) values (v_nro_cliente, v_nombre, v_apellido, v_codigo_producto, v_cantidad);
--         end if;
-- 	  END LOOP get_detalle_producto;
--   CLOSE cDetalleFactura;

--     
-- end $$
-- DELIMITER ;

call listar_productos_segun_cantidad(1, 72);
select * from productos_segun_cantidad;