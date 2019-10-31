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

-- update e01_detalle_factura d set d.cantidad = 10 where d.nro_factura = 4 and d.nro_item = 66;



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
drop procedure if exists listar_productos_segun_cantidad;
DELIMITER $$
create procedure listar_productos_segun_cantidad (in v_producto integer, in v_cantidad float)
begin
	drop temporary table if exists productos_segun_cantidad;
	create temporary table productos_segun_cantidad (
		nro_cliente integer not null default 0,
        nombre varchar(45),
        apellido varchar(45),        
        producto varchar(45),    
        marca varchar(45),  
        cantidad varchar(45)
    );
    
end $$
DELIMITER ;

