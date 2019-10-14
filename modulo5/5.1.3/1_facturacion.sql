CREATE DATABASE IF NOT EXISTS bdcfp;
USE bdcfp;

create table if not exists e01_cliente (
nro_cliente integer not null,
nombre varchar(45) not null,
apellido varchar(45) not null,
direccion varchar(45) not null,
activo smallint not null,
constraint PK_e01_cliente primary key (nro_cliente)
);

create table if not exists e01_telefono (
codigo_area integer not null,
nro_telefono integer not null,
tipo CHAR(1) not null,
nro_cliente integer not null,
constraint PK_e01_telefono primary key (codigo_area, nro_telefono),
constraint FK_e01_telefono_cliente foreign key (nro_cliente) references e01_cliente(nro_cliente)
);

create table if not exists e01_factura (
nro_factura integer not null,
fecha date not null,
total_sin_iva double not null,
iva double not null,
total_con_iva double not null,
nro_cliente integer not null,
constraint PK_e01_factura primary key (nro_factura),
constraint FK_e01_factura_cliente foreign key (nro_cliente) references e01_cliente(nro_cliente)
);

create table if not exists e01_producto (
codigo_producto integer not null,
marca varchar(45) not null,
nombre varchar(45) not null,
descripcion varchar(45) not null,
precio float not null,
stock integer not null,
constraint PK_e01_producto primary key (codigo_producto)
);

create table if not exists e01_detalle_factura (
nro_factura integer not null,
codigo_producto integer not null,
nro_item integer not null,
cantidad integer not null,
constraint PK_e01_detalle_factura primary key (nro_factura,codigo_producto),
constraint FK_e01_detalle_factura_producto foreign key (codigo_producto) references e01_producto(codigo_producto),
constraint FK_e01_detalle_factura_factura foreign key (nro_factura) references e01_factura(nro_factura)
);
