SELECT 
	emp_no,
    salary, 
    from_date, 
	-- concat(year(from_date),'-01-01') Desde_Año, 
	to_days(concat(year(from_date),'-01-01')) Desde_Dias_inicio, 
	to_days(from_date) Desde_Dias_fecha, 
	( to_days(concat(year(from_date),'-12-31')) - to_days(from_date) ) Desde_Dias,
    to_date,
    -- concat(year(to_date),'-01-01') Hasta_Año,
    to_days(concat(year(to_date),'-01-01')) Hasta_Dias_inicio,
    to_days(to_date) Hasta_Dias_fecha,
    ( to_days(to_date) - to_days(concat(year(to_date),'-01-01'))  ) Hasta_Dias_pasados
FROM examen_20191014.salaries
order by emp_no, from_date;