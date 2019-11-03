drop schema if exists arbol;
create schema arbol;
use arbol;

drop table if exists Entidad;
create table if not exists Entidad (
id_identidad int,
Entidad_descripcion varchar(45),
es_hoja boolean,
primary key (id_identidad)
);

