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

drop table if exists Jerarquia;
create table if not exists Jerarquia (
id_identidad int,
id_padre int,
primary key (id_padre),
constraint id_identidad_entidad foreign key (id_identidad) references Entidad(id_identidad)
);


