-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema examen_20191014
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema examen_20191014
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `examen_20191014` DEFAULT CHARACTER SET utf8 ;
USE `examen_20191014` ;

-- -----------------------------------------------------
-- Table `examen_20191014`.`employees`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `examen_20191014`.`employees` ;

CREATE TABLE IF NOT EXISTS `examen_20191014`.`employees` (
  `emp_no` INT(11) NOT NULL,
  `birth_date` DATE NULL,
  `first_name` VARCHAR(14) NULL,
  `last_name` VARCHAR(16) NULL,
  `gender` ENUM('M', 'F') NULL,
  `hire_date` DATE NULL,
  PRIMARY KEY (`emp_no`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `examen_20191014`.`salaries`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `examen_20191014`.`salaries` ;

CREATE TABLE IF NOT EXISTS `examen_20191014`.`salaries` (
  `emp_no` INT(11) NOT NULL,
  `salary` INT(11) NULL,
  `from_date` DATE NOT NULL,
  `to_date` DATE NULL,
  INDEX `fk_salario_empleado_idx` (`emp_no` ASC) VISIBLE,
  PRIMARY KEY (`emp_no`, `from_date`),
  CONSTRAINT `fk_salario_empleado`
    FOREIGN KEY (`emp_no`)
    REFERENCES `examen_20191014`.`employees` (`emp_no`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `examen_20191014`.`departments`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `examen_20191014`.`departments` ;

CREATE TABLE IF NOT EXISTS `examen_20191014`.`departments` (
  `dept_no` CHAR(4) NOT NULL,
  `dept_name` VARCHAR(40) NULL,
  PRIMARY KEY (`dept_no`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `examen_20191014`.`titles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `examen_20191014`.`titles` ;

CREATE TABLE IF NOT EXISTS `examen_20191014`.`titles` (
  `emp_no` INT(11) NOT NULL,
  `title` VARCHAR(50) NOT NULL,
  `from_date` DATE NOT NULL,
  `to_date` DATE NULL,
  INDEX `fk_titulos_empleado1_idx` (`emp_no` ASC) VISIBLE,
  PRIMARY KEY (`title`, `from_date`, `emp_no`),
  CONSTRAINT `fk_titulos_empleado1`
    FOREIGN KEY (`emp_no`)
    REFERENCES `examen_20191014`.`employees` (`emp_no`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `examen_20191014`.`dept_manager`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `examen_20191014`.`dept_manager` ;

CREATE TABLE IF NOT EXISTS `examen_20191014`.`dept_manager` (
  `dept_no` CHAR(4) NOT NULL,
  `emp_no` INT(11) NOT NULL,
  `from_date` DATE NOT NULL,
  `to_date` DATE NULL,
  INDEX `fk_jefe_departamento_empleado1_idx` (`emp_no` ASC) VISIBLE,
  INDEX `fk_jefe_departamento_departamento1_idx` (`dept_no` ASC) VISIBLE,
  PRIMARY KEY (`dept_no`, `emp_no`, `from_date`),
  CONSTRAINT `fk_jefe_departamento_empleado1`
    FOREIGN KEY (`emp_no`)
    REFERENCES `examen_20191014`.`employees` (`emp_no`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_jefe_departamento_departamento1`
    FOREIGN KEY (`dept_no`)
    REFERENCES `examen_20191014`.`departments` (`dept_no`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `examen_20191014`.`dept_emp`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `examen_20191014`.`dept_emp` ;

CREATE TABLE IF NOT EXISTS `examen_20191014`.`dept_emp` (
  `emp_no` INT(11) NOT NULL,
  `dept_no` CHAR(4) NOT NULL,
  `from_date` DATE NOT NULL,
  `to_date` DATE NULL,
  INDEX `fk_empleados_departamentos_empleado1_idx` (`emp_no` ASC) VISIBLE,
  INDEX `fk_empleados_departamentos_departamento1_idx` (`dept_no` ASC) VISIBLE,
  PRIMARY KEY (`dept_no`, `from_date`, `emp_no`),
  CONSTRAINT `fk_empleados_departamentos_empleado1`
    FOREIGN KEY (`emp_no`)
    REFERENCES `examen_20191014`.`employees` (`emp_no`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_empleados_departamentos_departamento1`
    FOREIGN KEY (`dept_no`)
    REFERENCES `examen_20191014`.`departments` (`dept_no`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
