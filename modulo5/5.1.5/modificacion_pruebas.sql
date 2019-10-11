use bd111mil;

-- 1. Insertar el producto "turrón" de la empresa "misky" con un precio de 4$ y un stock de 100 unidades.
-- set @nuevo_id = (select max(codigo_producto)+1 from e01_producto);
-- insert into e01_producto values (@nuevo_id, "misky","turrón","El mas rico",4,100)

-- 2.Actualizar el código de area por "526" de los teléfonos que tenían código de área "551".
-- update e01_telefono set codigo_area = 526 where (codigo_area = 551)

-- 3.Borrar el producto insertado en 1.
select * from e01_producto where (marca = "misky")
-- delete from e01_producto where (codigo_producto = 102)