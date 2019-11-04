-- SQL con jerarquia recursivo (Jerarquia_Recursivo.sql)

-- drop schema if exists arbol;
-- create schema arbol;
use arbol;

-- drop table if exists Entidad;
-- create table if not exists Entidad (
-- id_identidad int not null,
-- Entidad_descripcion varchar(45),
-- es_hoja boolean,
-- primary key (id_identidad)
-- );

-- drop table if exists Jerarquia;
-- create table if not exists Jerarquia (
-- id_identidad int not null,
-- id_padre int,
-- constraint id_padre_entidad foreign key (id_identidad) references Entidad(id_identidad),
-- constraint id_identidad_entidad foreign key (id_identidad) references Entidad(id_identidad)
-- );

-- insert into Entidad values
-- (1,'Entidad 1',0),
-- (2,'Entidad 2',0),
-- (3,'Entidad 3',0),
-- (4,'Entidad 4',0),
-- (5,'Entidad 5',0),
-- (6,'Entidad 6',0),
-- (7,'Entidad 7',0),
-- (8,'Entidad 8',0),
-- (9,'Entidad 9',0),
-- (10,'Entidad 10',0),
-- (11,'Entidad 11',1),
-- (12,'Entidad 12',1);

-- insert into Jerarquia values
-- (1,Null),
-- (2,1),
-- (3,2),
-- (4,1),
-- (5,3),
-- (6,4),
-- (7,6),
-- (8,5),
-- (9,4),
-- (9,8),
-- (10,7),
-- (10,9),
-- (11,10),
-- (12,1);

drop view if exists Resultado_esperado;
delimiter $$
create view Resultado_esperado (id_identidad, Entidad_descripcion, arbol, arbolid, lvl, es_hoja) as 
	-- with recursive crearRama as (
-- 		select id_identidad, Entidad_descripcion, Entidad_descripcion arbol, id_identidad arbolid, 0 lvl, es_hoja from Entidad e
--         
-- 	)
-- 	select * from crearRama;
    
	-- with recursive cte (id_identidad, arbolid) as (
-- 	  select     id_identidad,
-- 				 cast(id_padre as char(200)) as arbolid
-- 	  from       jerarquia
-- 	  where      id_padre = (SELECT id_identidad from jerarquia where id_padre is null)
-- 	  union all
-- 	  select     j.id_identidad,
-- 				 concat(arbolid, ',', id_padre)
-- 	  from       jerarquia j
-- 	  inner join cte
-- 			  on j.id_padre = cte.id_identidad
-- 	)
-- 	select * from cte;
    
	with recursive cte (id_identidad, arbol, arbolid, lvl, es_hoja) as (
	  select     jer.id_identidad,
				 cast(ent.Entidad_descripcion as char(20000)) as arbol,
				 cast(jer.id_padre as char(20000)) as arbolid,
                 1 as lvl,
                 ent.es_hoja
	  from       jerarquia jer
      inner join entidad ent on jer.id_identidad = ent.id_identidad
	  where      jer.id_identidad = (SELECT id_identidad from jerarquia where id_padre is null)
	  union all
	  select     j.id_identidad,
				 concat(arbol, '|', e.Entidad_descripcion),
				 concat(arbolid, ',', j.id_padre),
                 lvl + 1,
                 e.es_hoja
	  from       jerarquia j
      inner join entidad e on j.id_identidad = e.id_identidad
	  inner join cte
			  on j.id_padre = cte.id_identidad
	)
	select * from cte;
$$
delimiter ;

-- delimiter $$
-- create procedure test()
-- begin	
-- 		declare v_id_identidad int default 0;
-- 		declare v_Entidad_descripcion varchar(45) default 0;
-- 		declare v_arbol varchar(45) default 0;
-- 		declare v_arbolid varchar(45) default 0;
-- 		declare v_lvl int default 0;
-- 		declare v_es_hoja int default 0;
--         DECLARE fin INTEGER DEFAULT 0;
--         
--         declare cEntidad cursor for select id_identidad, Entidad_descripcion, es_hoja from Entidad;
--         declare cJerarquia cursor for select id_identidad, id_ipadre from Jerarquia;
--         
-- end$$
-- delimiter ;
