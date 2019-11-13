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
        this.loadVehiculos();
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
        
        let tipoVehiculo = vehiculo.tipo;
        
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

    public setVehiculo(vehiculoArg: VehiculoDTO, patente: string): string { 
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

    private async loadVehiculos() {
        let elementos = [];
        await this.getVehiculos().then(function(result) {
            elementos = result;
         });
        this.listaVehiculos = [];
        for (let i = 0; i < elementos.length; i++) {
            let vehiculo: Vehiculo = this.crearVehiculo(elementos[i]);
            this.listaVehiculos.push(vehiculo);
        }
        // console.log("Vehiculos Cargados: ",this.listaVehiculos);
    }

    private persistirLista() {
        fs.writeFileSync('vehiculos.csv', '', 'utf8');
        // for (let i = 0; i < this.listaVehiculos.length; i++) {
        //     const vehiculo = this.listaVehiculos[i];
        //     let tipoVehiculo: string = vehiculo.tipo; 
        //     let capacidad: number = this.consultarCapacidad(vehiculo);
        //     let patente: string = this.consultarPatenteToString(vehiculo);
        //     let puertas: string = this.consultarPuertasToString(vehiculo);
        //     let airbags: string = this.consultarAirbagsToString(vehiculo);

        //     if (vehiculo.getPatente()) {
        //         patente = vehiculo.getPatente();
        //     }

        //     fs.appendFileSync('vehiculos.csv',
        //         tipoVehiculo + ","+ 
        //         vehiculo.getMarca() + ","+ 
        //         vehiculo.getModelo() + ","+ 
        //         vehiculo.getAnio() + ","+ 
        //         vehiculo.getPrecio() + ","+ 
        //         vehiculo.getKilometraje() + ","+ 
        //         capacidad + ","+  
        //         patente + ","+ 
        //         puertas + ","+
        //         airbags + ","+ 
        //         vehiculo.getFuncionaOk()); 
        //     if (i < this.listaVehiculos.length-1) {
        //         fs.appendFileSync('vehiculos.csv',"\n"); 
        //     }
        // }
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

    private crearAuto(vehiculoArg: VehiculoDTO): Auto {
        // console.log("Creando Auto:"); 
        // console.log("------------------------------"); 

        let auto: Auto = new Auto(vehiculoArg.marca, vehiculoArg.modelo, vehiculoArg.anio, vehiculoArg.precio,vehiculoArg.kilometraje, vehiculoArg.capacidad, vehiculoArg.patente, vehiculoArg.puertas, vehiculoArg.airbags, vehiculoArg.funcionaOk);
        // console.log(auto);

        return auto;
    }

    private crearCamioneta(vehiculoArg: VehiculoDTO): Camioneta {
        // console.log("Creando Camioneta:");
        // console.log("------------------------------");  

        let camioneta: Camioneta = new Camioneta(vehiculoArg.marca, vehiculoArg.modelo, vehiculoArg.anio, vehiculoArg.precio,vehiculoArg.kilometraje, vehiculoArg.capacidad, vehiculoArg.patente, vehiculoArg.puertas, vehiculoArg.airbags, vehiculoArg.funcionaOk);
        // console.log(camioneta);

        return camioneta;
    }

    private crearVehiculo(vehiculoArg: VehiculoDTO): Vehiculo {
        let vehiculo: Vehiculo;
        let tipoVehiculo: string = vehiculoArg.tipo;
        if (tipoVehiculo == "auto") {
            vehiculo = this.crearAuto(vehiculoArg);
        } else if (tipoVehiculo == "camioneta") {
            vehiculo = this.crearCamioneta(vehiculoArg); 
        } else {
            vehiculo = null;
        }
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
