
-- ==================================================================
-- CREATE TABLES AND VIEWS
-- ==================================================================

-- DATE
-- A simple SCD0 date table.
CREATE TABLE WDATE (
    DATE_ID date NOT NULL,
    PRIMARY KEY (
        DATE_ID
    )
);

------------------------------------------------------------------------------------------------------------------------
-- SCHOOL
-- An SCD2 table with school data. 
CREATE TABLE WSCHOOL (
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

CREATE DEFINER=`root`@`localhost` PROCEDURE `fecha`()
BEGIN
    declare v_date VARCHAR(10);
    SET v_date = DATE('2019-06-01');
    WHILE v_date <= DATE('2019-07-01') DO
        INSERT INTO WDATE (DATE_ID) VALUES (v_date);
        commit;
        SET v_date = DATE_ADD(v_date , INTERVAL 1 DAY);
    END WHILE;
END;

INSERT INTO WSCHOOL
VALUES (1000, DATE('2019-06-05'), 'School (Original)', 2, 'abcdef', 'a-b-c-def', 1001, 'ghijkl');
INSERT INTO WSCHOOL
VALUES (1000, DATE('2019-06-12'), 'School (Change 1)', 2, 'abcdef', 'a-b-c-def', 1001, 'ghijkl');
INSERT INTO WSCHOOL
VALUES (1000, DATE('2019-06-28'), 'School (Change 2)', 2, 'abcdef', 'a-b-c-def', 1001, 'ghijkl');

-- Generar 3 vistas, 
-- una SCHOOL_DR
-- En esta vista mostrar todos los registros con cada cambio con fecha de inicio y de fin de su cambio
-- otra SCHOOL_DS
-- En esta vista mostrar todos los sucesivos cambios que tiene el registro en todos los días de Wdate
-- última SCHOOL_DC
-- En esta vista mostrar el último estado activo de los datos del colegio

------------------------------------------------------------------------------------------------------------------------
-- added another row in the same date (different time)                               <---*****************************
INSERT INTO WSCHOOL
VALUES (1000, '2019-06-12 10:00:00', 'School (Change 1,5)', 2, 'abcdef', 'a-b-c-def', 1001, 'ghijkl');
------------------------------------------------------------------------------------------------------------------------

/*
-- Insert this record to see how the views handle retroactive incremental change.
INSERT INTO WSCHOOL
VALUES (1000, DATE('2019-06-9'), 'School (Change 3)', 2, 'abcdef', 'a-b-c-def', 1001, 'ghijkl');
*/
commit;


-- ==================================================================
-- SELECT EXAMPLES
-- ==================================================================

/* EXAMPLE 1 */
-- Use views with a "DC" suffix to query for only current (or latest) records.
SELECT * FROM SCHOOL_DC;

/* EXAMPLE 2 */
-- Use views with a "DR" suffix to query for history records w/ an effective date range 
-- and current record flag.
SELECT * FROM SCHOOL_DR ORDER BY 1, 8;

/* EXAMPLE 3 */
-- Use views with a "DS" suffix to query for a daily snapshot view of the history records.
-- Note that this POC is limited to just JUN-19.
SELECT * FROM SCHOOL_DS ORDER BY 1, 2; 

/* EXAMPLE 4 */
-- Operational report query with simple join. There is no need to filler on a current flag.
SELECT    *
FROM    SCHOOL_DC t1
        INNER JOIN CLASS_DC t2
          ON ( t1.SCHOOL_ID = t2.SCHOOL_ID );

/* EXAMPLE 5 */
-- Audit report query with simple join for 2019-06-15. The date needs to be scoped as the 
-- records returned by the views have an effective date range.
SELECT    *
FROM    SCHOOL_DR t1
        INNER JOIN CLASS_DR t2
          ON ( t1.SCHOOL_ID = t2.SCHOOL_ID )
WHERE    DATE('2019-06-15') BETWEEN t1.ROW_START_DATE AND t1.ROW_END_DATE
  AND    DATE('2019-06-15') BETWEEN t2.ROW_START_DATE AND t2.ROW_END_DATE;


/* EXAMPLE 6 */
-- Audit report query with simple join where records are marked current. This produces 
-- the same result as EXAMPLE 4.
SELECT    *
FROM    SCHOOL_DR t1
        INNER JOIN CLASS_DR t2
          ON ( t1.SCHOOL_ID = t2.SCHOOL_ID )
WHERE    t1.CURRENT_YN = 'Y'
  AND    t2.CURRENT_YN = 'Y';


/* EXAMPLE 7 */
-- Audit report query with simple join for 2019-06-15. This form is simpler as only
-- one filter predicate on date is required. The join changes to include the DATE_ID
-- in the join criteria.
SELECT    *
FROM    SCHOOL_DS t1
        INNER JOIN CLASS_DS t2
          ON ( t1.DATE_ID = t2.DATE_ID /* include DATE_ID */
           AND t1.SCHOOL_ID = t2.SCHOOL_ID )
WHERE    t1.DATE_ID = DATE('2019-06-15');
