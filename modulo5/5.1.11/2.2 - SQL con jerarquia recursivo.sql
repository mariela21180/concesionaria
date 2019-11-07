-- SQL con jerarquia recursivo (Jerarquia_Recursivo.sql)

drop schema if exists arbol;
create schema arbol;
use arbol;

drop table if exists Entidad;
create table if not exists Entidad (
id_identidad int not null,
Entidad_descripcion varchar(45),
es_hoja boolean,
primary key (id_identidad)
);

drop table if exists Jerarquia;
create table if not exists Jerarquia (
id_identidad int not null,
id_padre int,
constraint id_padre_entidad foreign key (id_identidad) references Entidad(id_identidad),
constraint id_identidad_entidad foreign key (id_identidad) references Entidad(id_identidad)
);

insert into Entidad values
(1,'Entidad 1',0),
(2,'Entidad 2',0),
(3,'Entidad 3',0),
(4,'Entidad 4',0),
(5,'Entidad 5',0),
(6,'Entidad 6',0),
(7,'Entidad 7',0),
(8,'Entidad 8',0),
(9,'Entidad 9',0),
(10,'Entidad 10',0),
(11,'Entidad 11',1),
(12,'Entidad 12',1);

insert into Jerarquia values
(1,Null),
(2,1),
(3,2),
(4,1),
(5,3),
(6,4),
(7,6),
(8,5),
(9,4),
(9,8),
(10,7),
(10,9),
(11,10),
(12,1);

drop view if exists Resultado_esperado;
delimiter $$
create view Resultado_esperado (id_identidad, Entidad_descripcion, arbol, arbolid, lvl, es_hoja) as     
	with recursive crearArbol (id_identidad, Entidad_descripcion, arbol, arbolid, lvl, es_hoja) as (
	  select     jer.id_identidad,
				 ent.Entidad_descripcion,
				 cast(ent.Entidad_descripcion as char(20000)) as arbol,
				 cast(jer.id_identidad as char(20000)) as arbolid,
                 1 as lvl,
                 ent.es_hoja
	  from       jerarquia jer
      inner join entidad ent on jer.id_identidad = ent.id_identidad
	  where      jer.id_identidad = (SELECT id_identidad from jerarquia where id_padre is null)
	  union all
	  select     j.id_identidad,
				 e.Entidad_descripcion,
				 concat(arbol, '|', e.Entidad_descripcion),
				 concat(arbolid, '|', j.id_identidad),
                 lvl + 1,
                 e.es_hoja
	  from       jerarquia j
      inner join entidad e on j.id_identidad = e.id_identidad
	  inner join crearArbol
			  on j.id_padre = crearArbol.id_identidad
	)
	select * from crearArbol
    where crearArbol.es_hoja = 1
    order by lvl asc;
$$
delimiter ;

select * from Resultado_esperado;
