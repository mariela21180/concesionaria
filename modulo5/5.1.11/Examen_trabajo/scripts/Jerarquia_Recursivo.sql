-- Crear 2 tablas:
-- Entidad <id_entidad, Entidad_descripcion, es_hoja>
-- Jerarquia <id_entidad, id_padre>

-- Generar un árbol con todos los niveles separados por pipes "|"

-- Resultado esperado:
-- id_entidad, Entidad_descripcion, arbol, arbolid, lvl, es_hoja
-- 12,Entidad 12,Entidad 1|Entidad 12,1|12,2,1
-- 11,Entidad 11,Entidad 1|Entidad 4|Entidad 9|Entidad 10|Entidad 11,1|4|9|10|11,5,1
-- 11,Entidad 11,Entidad 1|Entidad 4|Entidad 6|Entidad 7|Entidad 10|Entidad 11,1|4|6|7|10|11,6,1
-- 11,Entidad 11,Entidad 1|Entidad 2|Entidad 3|Entidad 5|Entidad 8|Entidad 9|Entidad 10|Entidad 11,1|2|3|5|8|9|10|11,8,1


insert into entidad values
(1,Entidad 1,0),
(2,Entidad 2,0),
(3,Entidad 3,0),
(4,Entidad 4,0),
(5,Entidad 5,0),
(6,Entidad 6,0),
(7,Entidad 7,0),
(8,Entidad 8,0),
(9,Entidad 9,0),
(10,Entidad 10,0),
(11,Entidad 11,1),
(12,Entidad 12,1)

---------------------------------------------------------------------
insert into jearquia2 values
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
(12,1)