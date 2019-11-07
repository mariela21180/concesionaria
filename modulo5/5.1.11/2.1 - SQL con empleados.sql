-- SQL Generar una vista con los salario promedio, minimo y maximo de cada Title (de la base empleados)

use `examen_20191014`;

drop view if exists salarios_por_titulo;
create view salarios_por_titulo as
select 
	t.title Título,
    avg(s.salary) SalarioPromedio, 
    min(s.salary) SalarioMinimo, 
    max(s.salary) SalarioMaximo
from salaries s 
join titles t on t.emp_no = s.emp_no
group by t.title;

select * from salarios_por_titulo;