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

delimiter $$
create view Resultado_esperado (id_identidad, Entidad_descripcion, arbol, arbolid, lvl, es_hoja) as 
	with recursive crearRama as (
		select id_identidad, Entidad_descripcion, Entidad_descripcion arbol, Entidad_descripcion arbolid, id_identidad lvl, es_hoja from Entidad e
	)
	select * from crearRama;
$$
delimiter ;


