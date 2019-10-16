CREATE SCHEMA IF NOT EXISTS `examen_20191014` DEFAULT CHARACTER SET utf8;

create table if not exists `salario` (
nro_empleado integer not null,
fecha_desde date not null,
fecha_hasta date not null,
salario integer not null,
constraint PK_salario primary key (nro_empleado,fecha_desde),
constraint FK_salario_empleado foreign key (nro_empleado) references empleado(nro_empleado)
);
create table if not exists `empleado` (
nro_empleado integer not null,
fecha_nacimiento date not null,
nombre varchar(45) not null,
apellido varchar(45) not null,
sexo varchar(45) not null,
fecha_admision date not null,
constraint PK_empleado primary key(nro_empleado)
)

