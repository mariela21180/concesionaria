-- SQL generando instrucciones que metan fechas en el medio y generen una SCD y muestren con una vista (Rangos_Fechas.sql)
drop schema if exists school;
create schema if not exists school;
use school;

-- ==================================================================
-- CREATE TABLES AND VIEWS
-- ==================================================================

-- DATE
-- A simple SCD0 date table.
drop TABLE if exists WDATE;
CREATE TABLE if not exists WDATE (
    DATE_ID date NOT NULL,
    PRIMARY KEY (
        DATE_ID
    )
);

------------------------------------------------------------------------------------------------------------------------
-- SCHOOL
-- An SCD2 table with school data. 
drop TABLE if exists WSCHOOL;
CREATE TABLE if not exists WSCHOOL (
    SCHOOL_ID bigint NOT NULL,              -- Surrogate key
    ROW_DATE timestamp NOT NULL,            -- Timestamp for when a record was chanaged (in order to allow same date rows)
    SCHOOL_NAME varchar(100) NOT NULL,
    PRIMARY KEY (
        SCHOOL_ID,
        ROW_DATE
    )
);


-- ==================================================================
-- INSERT DATA
-- ==================================================================
drop procedure if exists fecha;
delimiter $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `fecha`()
BEGIN
    declare v_date VARCHAR(10);
    SET v_date = DATE('2019-06-01');
    WHILE v_date <= DATE('2019-07-01') DO
        INSERT INTO WDATE (DATE_ID) VALUES (v_date);
        commit;
        SET v_date = DATE_ADD(v_date , INTERVAL 1 DAY);
    END WHILE;
END$$
delimiter ;


INSERT INTO WSCHOOL
VALUES (1000, DATE('2019-06-05'), 'School (Original)'); -- , 2, 'abcdef', 'a-b-c-def', 1001, 'ghijkl');
INSERT INTO WSCHOOL
VALUES (1000, DATE('2019-06-12'), 'School (Change 1)'); -- , 2, 'abcdef', 'a-b-c-def', 1001, 'ghijkl');
INSERT INTO WSCHOOL
VALUES (1000, DATE('2019-06-28'), 'School (Change 2)'); -- , 2, 'abcdef', 'a-b-c-def', 1001, 'ghijkl');

call fecha();

INSERT INTO WSCHOOL VALUES (1000, '2019-06-12 10:00:00', 'School (Change 1,5)');
INSERT INTO WSCHOOL VALUES (1010, '2019-05-12 10:00:00', 'School (Change 1)');
INSERT INTO WSCHOOL VALUES (1010, '2019-07-12 10:00:00', 'School (Change 1,5)');

-- Generar 3 vistas, 
-- 2.3.1 - una SCHOOL_DR
-- En esta vista mostrar todos los registros con cada cambio con fecha de inicio y de fin de su cambio
drop view if exists SCHOOL_DR;
create view SCHOOL_DR as 
select 
	school_id Id, 
    school_name Nombre, 
    row_date FechaDesde, 
    lead(row_date) over (partition by school_id order by row_date) as FechaHasta 
from wschool;
select * from SCHOOL_DR;


-- 2.3.2 - otra SCHOOL_DS
-- En esta vista mostrar todos los sucesivos cambios que tiene el registro en todos los días de Wdate
drop view if exists SCHOOL_DS;
create view SCHOOL_DS as
select 
	date_id Fecha,
    time(row_date) Hora,
	school_id Id, 
    school_name Nombre
from wdate
left join wschool on (wdate.date_id = date(wschool.row_date))
order by wdate.date_id asc;
select * from SCHOOL_DS;

-- 2.3.3 - última SCHOOL_DC
-- En esta vista mostrar el último estado activo de los datos del colegio
drop view if exists SCHOOL_DC;
create view SCHOOL_DC as
select 
	school_id Id, 
    school_name Nombre, 
    row_date UltimoEstadoActivo
from wschool
where row_date in (
	select max(row_date) from wschool
    group by school_id
)
group by school_id, row_date
order by row_date desc;
select * from SCHOOL_DC;
