-- Cursores y Funciones: (Cursor_funcion.SQL)
-- Registrar las puntuaciones obtenidas en un juego, este juego consistirá en una prueba que debemos realizar en el menor tiempo posible, 
-- con una sola pierna y con obstáculos, y tenemos tres tipos de falta, uno es apoyar la pierna levantada, otra es chocar con un obstáculo, y la última de acuerdo a la posición obtenida. 
-- Al final de la prueba se asignarán los puntos y se almacenarán en la misma tabla, para no tener que calcularlos cada vez.
-- Se desea conocer la puntuación anterior y la siguiente (si es que existan) y establecer un promedio si la penalización actual es menor al promedio de las 2. 
-- Crear una función que asigne las puntuaciones a cada uno de los corredores con una fórmula. 

drop database if exists carrera;
create database if not exists carrera;

use carrera;

drop table if exists Runners;
CREATE TABLE Runners ( 
    Runner_id BIGINT NOT NULL AUTO_INCREMENT, 
    Name VARCHAR(120) NOT NULL, 
    Time BIGINT NOT NULL, 
    Penalty1 BIGINT NOT NULL, 
    Penalty2 BIGINT NOT NULL, 
    Points BIGINT, 
    PRIMARY KEY (Runner_id)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;

INSERT INTO Runners VALUES (NULL, 'Michael', 123, 5, 2, NULL);
INSERT INTO Runners VALUES (NULL, 'Sarah', 83, 3, 3, NULL);
INSERT INTO Runners VALUES (NULL, 'John', 323, 1, 1, NULL);
INSERT INTO Runners VALUES (NULL, 'Ramon', 100, 8, 4, NULL);
INSERT INTO Runners VALUES (NULL, 'Andrew', 143, 4, 3, NULL);
INSERT INTO Runners VALUES (NULL, 'Antoine', 199, 3, 2, NULL);
INSERT INTO Runners VALUES (NULL, 'David', 101, 2, 1, NULL);

-- Ejemplo 1: siendo Time el tiempo en segundos que se tarda en realizar la prueba, 500-Time serán los puntos iniciales, a los que tenemos que restar 5*penalty1 y 3*penalty2.

-- Ejemplo 2 (si tienen tiempo):
-- si el tiempo es mayor de 250, se intercambien los penalties, editando directamente el código del loop, metiendo una sentencia IF, 
-- aunque eso mismo lo podemos hacer también desde la función que calcula los puntos.

drop function if exists return_points;
delimiter $$
create function return_points (
	_time BIGINT,
    _penaltyA BIGINT,
    _penaltyB BIGINT
) returns BIGINT
READS SQL DATA
DETERMINISTIC
begin
	declare _points integer;
	set _points = (500 - _time) - (_penaltyA * 5) - (_penaltyB * 3);
    return _points;	
end$$
delimiter ;

drop procedure if exists calculate_final_points;
delimiter $$
create procedure calculate_final_points ()
begin
	declare v_Runner_id bigint(20) default 0;
	declare v_Name varchar(120) default "";
	declare v_Time bigint(20) default 0;
	declare v_Penalty1 bigint(20) default 0;
	declare v_Penalty2 bigint(20) default 0;
	declare v_Points bigint(20) default 0;
    declare finished integer default 0;
    declare c_Runners cursor for select * from runners;
    declare continue handler for not found set finished = 1;
    
    open c_Runners;
		get_runners: loop
			fetch c_Runners into v_Runner_id, v_Name, v_Time, v_Penalty1, v_Penalty2, v_Points;
			if finished = 1 then
				leave get_runners;
			end if;
            
            set v_Points = return_points(v_Time, v_Penalty1, v_Penalty2);
            
            update runners set Points = v_Points where Runner_id = v_Runner_id;
            
		end loop get_runners;
    close c_Runners;
    SELECT * FROM carrera.runners
	order by Time asc;
end$$
delimiter ;

drop procedure if exists calculate_final_points_2;
delimiter $$
create procedure calculate_final_points_2 ()
begin
	declare v_Runner_id bigint(20) default 0;
	declare v_Name varchar(120) default "";
	declare v_Time bigint(20) default 0;
	declare v_Penalty1 bigint(20) default 0;
	declare v_Penalty2 bigint(20) default 0;
	declare v_Points bigint(20) default 0;
    declare finished integer default 0;
    declare c_Runners cursor for select * from runners;
    declare continue handler for not found set finished = 1;
    
    open c_Runners;
		get_runners: loop
			fetch c_Runners into v_Runner_id, v_Name, v_Time, v_Penalty1, v_Penalty2, v_Points;
			if finished = 1 then
				leave get_runners;
			end if;
            
			if (v_Time > 100) then
				set v_Points = return_points(v_Time, v_Penalty2, v_Penalty1);
			else 
				set v_Points = return_points(v_Time, v_Penalty1, v_Penalty2);
            end if;
            
            update runners set Points = v_Points where Runner_id = v_Runner_id;
            
		end loop get_runners;
    close c_Runners;
    SELECT * FROM carrera.runners
	order by Time asc;    
end$$
delimiter ;


drop procedure if exists calculate_penalty_3;
delimiter $$
create procedure calculate_penalty_3 ()
begin
	declare v_Runner_id bigint(20) default 0;
	declare v_Points_Previuos bigint(20) default 0;
	declare v_Points_Actual bigint(20) default 0;
	declare v_Points_Next bigint(20) default 0;
	declare v_Penalty bigint(20) default 0;
	declare v_Final_Points bigint(20) default 0;
	declare v_Avg bigint(20) default 0;
    declare finished integer default 0;
    declare c_Actual cursor for select Runner_id, Points from runners order by Time asc;
    declare c_Next cursor for select Points from runners order by Time asc limit 100000 offset 1;
    declare continue handler for not found set finished = 1;
    
    open c_Actual;
    open c_Next;
		get_times: loop
			fetch c_Actual into v_Runner_id, v_Points_Actual;
			if finished = 1 then
				leave get_times;
			end if;
          	fetch c_Next into v_Points_Next;  
            set v_Avg = ((v_Points_Previuos + v_Points_Next) / 2 );
			set v_Penalty = v_Avg - v_Points_Actual; 
			set v_Final_Points = v_Points_Actual + v_Penalty; 
            
			set v_Points_Previuos = v_Points_Actual; 
			set v_Points_Next = 0;          
            
            update runners set Points = v_Final_Points where Runner_id = v_Runner_id;
            
		end loop get_times;
    close c_Actual;
    close c_Next;
    SELECT * FROM carrera.runners
	order by Time asc;
end$$
delimiter ;



call calculate_final_points ();
call calculate_final_points_2 ();
call calculate_penalty_3();



