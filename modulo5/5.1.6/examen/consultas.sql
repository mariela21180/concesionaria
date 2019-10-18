-- 1) El 1/10/91 hubo un senior staff en que depto

-- select * from departments where dept_no in (
-- 	select dept_no from dept_manager where emp_no in (
-- 		select emp_no from titles where title = 'Senior Staff' and from_date  = "1991-10-01"
-- 	)
-- )

-- 2) Empleados contratados despues de octubre del 88 que fueron manager 

-- select * from dept_manager where emp_no in (
-- 	select emp_no from employees where hire_date >= "1988-10-01"
-- )

-- 3) El gerente de que departamento tiene mayor salario

-- -- select max(salary) from salaries where emp_no in (
-- -- 	select emp_no from dept_manager where dept_no in (
-- -- 		select dept_no from departments
-- --     )
-- -- )

-- select * from departments where dept_no in (
-- 	select dept_no from dept_manager where emp_no in (
-- 		select emp_no from salaries order by salary desc
--     )
-- )