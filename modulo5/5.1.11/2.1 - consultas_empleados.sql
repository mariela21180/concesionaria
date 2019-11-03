-- SQL Generar una vista con los salario promedio, minimo y maximo de cada Title (de la base empleados)

use `examen_20191014`;

create view salarios_por_titulo as
select t.title, avg(s.salary), min(s.salary), max(s.salary)
from salaries s 
join titles t on t.emp_no = s.emp_no
group by t.title;