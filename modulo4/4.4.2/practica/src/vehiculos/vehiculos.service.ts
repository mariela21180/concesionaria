import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import Vehiculo from './vehiculo';
import Auto from './auto';
import Camioneta from './camioneta';

@Injectable()
export class VehiculosService {
    private listaVehiculos: Vehiculo[];

    public constructor() {
        this.loadVehiculos();
    }

    public getVehiculos(): Vehiculo[] {
        return this.listaVehiculos;
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

    public create(vehiculo: any) {
        console.log("VEHICULO: ");
        console.log("----------------");
        
        let vehiculoNuevo: Vehiculo;
        let tipoVehiculo = vehiculo.tipo;
        
        if(tipoVehiculo != 'auto' && tipoVehiculo != 'camioneta') {
            return "parametros incorrectos";
        } else {
            if (tipoVehiculo == 'auto') {
                vehiculoNuevo = new Auto(vehiculo.data.marca, vehiculo.data.modelo, vehiculo.data.anio, vehiculo.data.precio, vehiculo.data.kilometraje, vehiculo.data.capacidad, vehiculo.data.patente, vehiculo.data.puertas, vehiculo.data.airbags, vehiculo.data.funcionaOk);
    
            } 
            if (tipoVehiculo == 'camioneta') {
                vehiculoNuevo = new Camioneta(vehiculo.data.marca, vehiculo.data.modelo, vehiculo.data.anio, vehiculo.data.precio, vehiculo.data.kilometraje, vehiculo.data.capacidad, vehiculo.data.patente, vehiculo.data.puertas, vehiculo.data.airbags, vehiculo.data.funcionaOk);
            }

            this.listaVehiculos.push(vehiculoNuevo);
            this.persistirVehiculos()
            return "ok";
        }
    }

    private loadVehiculos(): void {
        let archivo = fs.readFileSync('vehiculos.csv', 'utf8');

        const elementos = archivo.split('\n').map(p => p.replace('\r', '')).map(p => p.split(','));

        this.listaVehiculos = [];
        for (let i = 0; i < elementos.length; i++) {
            let vehiculo;
            if (elementos[i][0] == 'auto') {
                vehiculo = new Auto(elementos[i][1], elementos[i][2], parseInt(elementos[i][3]), parseInt(elementos[i][4]), parseInt(elementos[i][5]), parseInt(elementos[i][6]), elementos[i][7], parseInt(elementos[i][8]), parseInt(elementos[i][9]), (elementos[i][10] === "true"));
            } else if (elementos[i][0] == 'camioneta') {
                vehiculo = new Camioneta(elementos[i][1], elementos[i][2], parseInt(elementos[i][3]), parseInt(elementos[i][4]), parseInt(elementos[i][5]), parseInt(elementos[i][6]), elementos[i][7], parseInt(elementos[i][8]), parseInt(elementos[i][9]), (elementos[i][10] === "true"));
            }
            this.listaVehiculos.push(vehiculo);
        }
    }

    private persistirVehiculos() {
        fs.writeFileSync('vehiculos.csv', '', 'utf8');
        for (let i = 0; i < this.listaVehiculos.length; i++) {
            const vehiculo = this.listaVehiculos[i];
            let tipo: string = ""; 
            let capacidad: number = null;
            let airbags: number;
            if (vehiculo instanceof Auto) {
                tipo = "auto";
                capacidad = vehiculo.getCapacidadBaul();
            } 
            if (vehiculo instanceof Camioneta) {
                tipo = "camioneta";
                capacidad = vehiculo.getCapacidadCarga();
            } 
            if(!vehiculo.getAirbags()) {
                airbags = 0;
            } else {
                airbags = vehiculo.getAirbags();
            }

            fs.appendFileSync('vehiculos.csv',
                tipo + ","+
                vehiculo.getMarca() + ","+ 
                vehiculo.getModelo() + ","+ 
                vehiculo.getAnio() + ","+ 
                vehiculo.getKilometraje() + ","+ 
                vehiculo.getPrecio() + ","+ 
                capacidad + ","+  
                vehiculo.getPatente() + ","+ 
                vehiculo.getPuertas() + ","+
                airbags + ","+ 
                vehiculo.getFuncionaOk().toString()); 
            if (i < this.listaVehiculos.length-1) {
                fs.appendFileSync('vehiculos.csv',"\n"); 
            }
        }
    }
}
