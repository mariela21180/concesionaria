-- Triggers: (Base de datos "Empleados")
--  3.1 - Generar una tabla nueva con los salarios acumulados (Salarios_Anuales <emp_no, anutal_total>)

use `examen_20191014`;
drop table if exists Salarios_Anuales;
create table if not exists Salarios_Anuales(
	emp_no int(11) not null, 
	anio int default 0, 
    anual_total int(11) default 0
);

drop procedure if exists load_total_salaries;
delimiter $$
create procedure load_total_salaries()
begin
	declare v_emp_no int(11) default 0;
    declare v_salary int(11) default 0;
	declare v_date_from integer default 0;
	declare v_date_to integer default 0;
	declare v_year_from integer default 0;
	declare v_year_to integer default 0;
    declare v_days_from integer default 0;
    declare v_days_to integer default 0;
    declare v_days_total integer default 0;
    declare v_dayly_salary int(11) default 0;
    declare v_current_annual_salary int(11) default 0;
    declare v_previous_salary int(11) default 0;
    declare v_current_emp bigint default 0;
    declare fin integer default 0;
    declare c_salaries cursor for (
		SELECT emp_no, salary, from_date, to_date
		FROM examen_20191014.salaries
		order by emp_no, from_date
	);
    declare continue handler for not found set fin=1;
    
    open c_salaries;
		get_annual_salary: loop             
			fetch c_salaries into v_emp_no, v_salary, v_date_from, v_date_to;
			IF fin = 1 THEN
				LEAVE get_annual_salary;
			END IF;
            
            if v_current_emp <> v_emp_no then
				set v_previous_salary = 0;
			end if;
			set v_year_from = year(v_date_from);
			set v_year_to = year(v_date_to);
			
			set v_days_from = ( to_days( concat(year(v_date_from),'-12-31')) - to_days(v_date_from) );
			set v_days_to = ( to_days(v_date_to) - to_days(concat(year(v_date_to),'-01-01'))  );                
			set v_days_total = v_days_from + v_days_to;
			
			set v_dayly_salary = v_salary*12 / v_days_total;
			set v_current_annual_salary = (v_dayly_salary * v_days_from) + v_previous_salary;
			
			insert into salarios_anuales values (v_emp_no, v_year_from, v_current_annual_salary);
            
			set v_previous_salary = v_dayly_salary * v_days_to;
            set v_current_emp = v_emp_no;

		end loop get_annual_salary;
    close c_salaries;
    
end$$ 
delimiter ;

truncate salarios_anuales;
call load_total_salaries();
select emp_no, anio, anual_total
from salarios_anuales
order by emp_no, anio;

-- ----------------------------------------------------------------------------------------------------------
-- 	3.2 - Crear un trigger en la tabla salario sobre el campo salary, cuando cambie y se modifique el valor en una fecha dada (ojo!!! hay que buscar el registro entre fechas)

drop trigger if exists update_salary;
delimiter $$
create trigger update_salary
after 
update
on salaries
for each row
begin
	IF NEW.salary <> OLD.salary and old.from_date = new.from_date and old.emp_no = new.emp_no and old.to_date = new.to_date THEN
			UPDATE salarios_anuales sa
				SET anual_total = anual_total - (old.salary*12 / (( to_days( concat(year(old.from_date),'-12-31')) - to_days(old.from_date) ) + ( to_days(old.to_date) - to_days(concat(year(old.to_date),'-01-01'))  ))) + (new.salary*12 / (( to_days( concat(year(old.from_date),'-12-31')) - to_days(old.from_date) ) + ( to_days(old.to_date) - to_days(concat(year(old.to_date),'-01-01'))  )))                 
                WHERE (year(old.from_date) = anio) and (NEW.emp_no = OLD.emp_no);
			UPDATE salarios_anuales sa
				SET anual_total = anual_total - (old.salary*12 / (( to_days( concat(year(old.from_date),'-12-31')) - to_days(old.from_date) ) + ( to_days(old.to_date) - to_days(concat(year(old.to_date),'-01-01'))  ))) + (new.salary*12 / (( to_days( concat(year(old.from_date),'-12-31')) - to_days(old.from_date) ) + ( to_days(old.to_date) - to_days(concat(year(old.to_date),'-01-01'))  )))                 
                WHERE (year(old.to_date) = anio) and (NEW.emp_no = OLD.emp_no);
		END IF;
    
end$$
delimiter ;

