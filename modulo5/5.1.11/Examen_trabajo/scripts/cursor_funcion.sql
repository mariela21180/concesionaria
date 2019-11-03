CREATE TABLE Runners ( 
    Runner_id BIGINT NOT NULL AUTO_INCREMENT, 
    Name VARCHAR(120) NOT NULL, 
    Time BIGINT NOT NULL, 
    Penalty1 BIGINT NOT NULL, 
    Penalty2 BIGINT NOT NULL, 
    Points BIGINT, 
    PRIMARY KEY (Runner_id)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;

-----------------------------------------------------

INSERT INTO Runners VALUES (NULL, 'Michael', 123, 5, 2, NULL);
INSERT INTO Runners VALUES (NULL, 'Sarah', 83, 3, 3, NULL);
INSERT INTO Runners VALUES (NULL, 'John', 323, 1, 1, NULL);
INSERT INTO Runners VALUES (NULL, 'Ramon', 100, 8, 4, NULL);
INSERT INTO Runners VALUES (NULL, 'Andrew', 143, 4, 3, NULL);
INSERT INTO Runners VALUES (NULL, 'Antoine', 199, 3, 2, NULL);
INSERT INTO Runners VALUES (NULL, 'David', 101, 2, 1, NULL);

-----------------------------------------------------
-- Registrar las puntuaciones obtenidas en un juego, este juego consistirá en una prueba que debemos realizar en el menor tiempo posible, 
-- con una sola pierna y con obstáculos, y tenemos tres tipos de falta, uno es apoyar la pierna levantada, otra es chocar con un obstáculo, y la última de acuerdo a la posición obtenida
-- se tiene que conocer la puntuación anterior y la siguiente (si es que existan) y establecer un promedio si la penalización es menor al promedio
-- Al final de la prueba se asignarán los puntos y se almacenarán en la misma tabla, para no tener que calcularlos cada vez.
-- Se desea conocer la puntuación anterior y la siguiente (si es que existen) y establecer un promedio si la penalización actual es menor al promedio de las 2.
-- Crear una función que asigne las puntuaciones a cada uno de los corredores con una fórmula. 
-- Por ejemplo la siguiente: siendo Time el tiempo en segundos que se tarda en realizar la prueba, 500-Time serán los puntos iniciales, a los que tenemos que restar 5*penalty1 y 3*penalty2.

-- Ejemplo 2 (si tienen tiempo):
-- si el tiempo es mayor de 250, se intercambien los penalties, editando directamente el código del loop, metiendo una sentencia IF, 
-- aunque eso mismo lo podemos hacer también desde la función que calcula los puntos.

----------------------------------------------------------------------
Resultado Esperado:
update
2	Sarah	83	3	3	393
4	Ramon	100	8	4	348
7	David	101	2	1	386
1	Michael	123	5	2	346
5	Andrew	143	4	3	328
6	Antoine	199	3	2	280
3	John	323	1	1	169

Procedure
2	Sarah	83	3	3	174
4	Ramon	100	8	4	390
7	David	101	2	1	347
1	Michael	123	5	2	357
5	Andrew	143	4	3	313
6	Antoine	199	3	2	248
3	John	323	1	1	140