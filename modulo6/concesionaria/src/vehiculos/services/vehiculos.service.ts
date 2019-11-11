import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Vehiculo } from '../entities/vehiculo.entity';
import { Auto } from '../entities/auto';
import { Camioneta } from '../entities/camioneta';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VehiculoDTO } from '../dto/VehiculoDTO';

@Injectable()
export class VehiculosService {
    private listaVehiculos: Vehiculo[];

    public constructor(
        @InjectRepository(Vehiculo) private readonly vehiculoRepository: Repository<Vehiculo>
    ) {
    }

    public async getVehiculos(): Promise<Vehiculo[]> {
        return await this.vehiculoRepository.find();
    }
    public getVehiculo(patente: string): Vehiculo {
        let posicion:number = this.buscarVehiculoPorPatente(patente);
        if (posicion != -1) {
            return this.listaVehiculos[posicion];
        } else {
            return null;
        }

    }
    public getAutos(): Auto[] {
        const autos: Auto[] = [];
        this.listaVehiculos.forEach(vehiculo => {
            if (vehiculo instanceof Auto) {
                autos.push(vehiculo);
            }
        });
        return autos;
    }
    public getCamionetas(): Camioneta[] {
        const camionetas: Camioneta[] = [];
        this.listaVehiculos.forEach(vehiculo => {
            if (vehiculo instanceof Camioneta) {
                camionetas.push(vehiculo);
            }
        });
        return camionetas;
    }

    public create(vehiculo: VehiculoDTO) {
        // console.log("VEHICULO: ");
        // console.log("----------------");
        
        let tipoVehiculo = this.consultarTipo(vehiculo);
        
        if(tipoVehiculo != 'auto' && tipoVehiculo != 'camioneta') {
            return "parametros incorrectos";
        } else {
            let vehiculoNuevo: Vehiculo = this.crearVehiculo(vehiculo);   
            // console.log(vehiculoNuevo);         
            this.listaVehiculos.push(vehiculoNuevo);            
            this.persistirLista();
            return "ok";
        }
    }

    public setVehiculo(vehiculoArg: any, patente: string): string { 
        let posicion:number = this.buscarVehiculoPorPatente(patente);
        if (posicion != -1) {
            let vehiculo: Vehiculo = this.crearVehiculo(vehiculoArg);
            this.listaVehiculos[posicion] = vehiculo;
            this.persistirLista();
            return "ok";
        } else {
            return null;
        }
    }

    public deleteVehiculo(patente: string): string {
        let posicion:number = this.buscarVehiculoPorPatente(patente);
        if (posicion != -1) {
            this.listaVehiculos.splice(posicion,1);
            this.persistirLista();
            return "ok";
        } else {
            return null;
        }
    }

    private persistirLista() {
        fs.writeFileSync('vehiculos.csv', '', 'utf8');
        for (let i = 0; i < this.listaVehiculos.length; i++) {
            const vehiculo = this.listaVehiculos[i];
            let tipoVehiculo: string = this.consultarTipo(vehiculo); 
            let capacidad: number = this.consultarCapacidad(vehiculo);
            let patente: string = this.consultarPatenteToString(vehiculo);
            let puertas: string = this.consultarPuertasToString(vehiculo);
            let airbags: string = this.consultarAirbagsToString(vehiculo);

            if (vehiculo.getPatente()) {
                patente = vehiculo.getPatente();
            }

            fs.appendFileSync('vehiculos.csv',
                tipoVehiculo + ","+ 
                vehiculo.getMarca() + ","+ 
                vehiculo.getModelo() + ","+ 
                vehiculo.getAnio() + ","+ 
                vehiculo.getPrecio() + ","+ 
                vehiculo.getKilometraje() + ","+ 
                capacidad + ","+  
                patente + ","+ 
                puertas + ","+
                airbags + ","+ 
                vehiculo.getFuncionaOk()); 
            if (i < this.listaVehiculos.length-1) {
                fs.appendFileSync('vehiculos.csv',"\n"); 
            }
        }
    }
    
    private consultarTipo(vehiculo: any): string {
        let tipoVehiculo:string;

        if (vehiculo instanceof Vehiculo) {            
            if (vehiculo instanceof Auto) {
                tipoVehiculo = "auto";
            } 
            if (vehiculo instanceof Camioneta) {
                tipoVehiculo = "camioneta";
            } 
        } else {
            tipoVehiculo = vehiculo.tipo;
        }
        return tipoVehiculo;
    }

    private consultarCapacidad(vehiculo: any): number {
        let capacidad:number;

        if (vehiculo instanceof Vehiculo) {        
            if (vehiculo instanceof Auto) {
                capacidad = vehiculo.getCapacidadBaul();
            } 
            if (vehiculo instanceof Camioneta) {
                capacidad = vehiculo.getCapacidadCarga();
            } 
        } else {
            capacidad = vehiculo.data.capacidad;
        }
        return capacidad;
    }
    
    private consultarPatente(vehiculo: any): string {
        let patente:string;

        if (vehiculo instanceof Vehiculo) {   
            patente = vehiculo.getPatente();                
        } else {
            if (vehiculo.data.patente=== "null") {
                patente = null;
            } else {
                patente = vehiculo.data.patente;
            }
        }
        return patente;
    }   
    private consultarPatenteToString(vehiculo: any): string {
        let patente:string;
        if (this.consultarPatente(vehiculo) === null) {
            patente = "null";
        } else {
            patente = this.consultarPatente(vehiculo);
        }              
        return patente;
    }


    private consultarAirbags(vehiculo: any): number {
        let airbags:number;

        if (vehiculo instanceof Vehiculo) {   
            airbags = vehiculo.getAirbags();
        } else {
            if (vehiculo.data.airbags === "null") {
                airbags = null;
            } else {
                airbags = vehiculo.data.airbags;
            }              
        }
        return airbags;
    }
    private consultarAirbagsToString(vehiculo: any): string { 
        let airbags:string;
        if (this.consultarAirbags(vehiculo) > 0) {
            airbags = this.consultarAirbags(vehiculo).toString();
        } else {
            airbags = "null";
        }              
        return airbags;
    }

    private consultarPuertas(vehiculo: any): number {
        let puertas:number;

        if (vehiculo instanceof Vehiculo) {     
            puertas = vehiculo.getPuertas();
        } else {
            if (vehiculo.data.puertas === "null") {
                puertas = null;
            } else {
                puertas = vehiculo.data.puertas;
            }
        }
        return puertas;
    }
    private consultarPuertasToString(vehiculo: any): string {
        let puertas:string;
        if (this.consultarPuertas(vehiculo) > 0) {
            puertas = this.consultarPuertas(vehiculo).toString();
        } else {
            puertas = "null";
        }              
        return puertas;
    }  

    private crearAuto(vehiculoArg: any): Auto {
        // console.log("Creando Auto:"); 
        // console.log("------------------------------"); 

        let auto: Auto = new Auto(vehiculoArg.data.marca, vehiculoArg.data.modelo, parseInt(vehiculoArg.data.anio), parseInt(vehiculoArg.data.precio),parseInt(vehiculoArg.data.kilometraje), parseInt(vehiculoArg.data.capacidad), this.consultarPatente(vehiculoArg), this.consultarPuertas(vehiculoArg), this.consultarAirbags(vehiculoArg), vehiculoArg.data.funcionaOk);
        // console.log(auto);

        return auto;
    }

    private crearCamioneta(vehiculoArg: any): Camioneta {
        // console.log("Creando Camioneta:");
        // console.log("------------------------------");  

        let camioneta: Camioneta = new Camioneta(vehiculoArg.data.marca, vehiculoArg.data.modelo, parseInt(vehiculoArg.data.anio), parseInt(vehiculoArg.data.precio),parseInt(vehiculoArg.data.kilometraje), parseInt(vehiculoArg.data.capacidad), this.consultarPatente(vehiculoArg), this.consultarPuertas(vehiculoArg), this.consultarAirbags(vehiculoArg), vehiculoArg.data.funcionaOk);
        // console.log(camioneta);

        return camioneta;
    }

    private crearVehiculo(vehiculoArg: any): Vehiculo {
        let vehiculo: Vehiculo;
        let tipoVehiculo: string = this.consultarTipo(vehiculoArg);
        if (tipoVehiculo == "auto") {
            vehiculo = this.crearAuto(vehiculoArg);
        } else if (tipoVehiculo == "camioneta") {
            vehiculo = this.crearCamioneta(vehiculoArg); 
        } else {
            vehiculo = null;
        }
        return vehiculo;
    }

    private crearVehiculoDesdeArchivo(vehiculoArg: any): Vehiculo {
        let vehiculo: Vehiculo;  
        let funcionaOk: boolean;
        if (vehiculoArg[10] === "true") {
            funcionaOk = true;
        } else if (vehiculoArg[10] === "false") {
            funcionaOk = false;
        }
        // console.log(vehiculoArg); 
        let vehiculoJson = {
            "tipo": vehiculoArg[0],
            "data": {
                "marca": vehiculoArg[1], 
                "modelo": vehiculoArg[2],
                "anio": parseInt(vehiculoArg[3]),
                "precio": parseInt(vehiculoArg[4]),
                "kilometraje": parseInt(vehiculoArg[5]),
                "capacidad": parseInt(vehiculoArg[6]),
                "patente": vehiculoArg[7],
                "puertas": parseInt(vehiculoArg[8]),
                "airbags": parseInt(vehiculoArg[9]),
                "funcionaOk": funcionaOk, 
            }  
        }
        vehiculo = this.crearVehiculo(vehiculoJson); 

        return vehiculo;
    }
    
    private buscarVehiculoPorPatente(patente: string): number {
        for (let i = 0; i < this.listaVehiculos.length; i++) {
            const vehiculo = this.listaVehiculos[i];
            if (vehiculo.getPatente().toLowerCase() === patente.toLowerCase()) {
                return i;
            }            
        }
        return -1;
    }
}
