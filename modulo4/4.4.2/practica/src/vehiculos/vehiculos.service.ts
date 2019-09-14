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
        console.log(vehiculo);
        console.log("----------------");
        
        let vehiculoNuevo: Vehiculo;
        if(vehiculo.tipo == 'auto' || vehiculo.tipo == 'camioneta') {
            if (vehiculo.tipo == 'auto') {
                vehiculoNuevo = new Auto(vehiculo.data.marca, vehiculo.data.modelo, vehiculo.data.anio, vehiculo.data.precio, vehiculo.data.kilometraje, vehiculo.data.capacidad, vehiculo.data.patente, vehiculo.data.puertas, vehiculo.data.airbags, vehiculo.data.funcionaOk);
    
            } else if (vehiculo.tipo == 'camioneta') {
                vehiculoNuevo = new Camioneta(vehiculo.data.marca, vehiculo.data.modelo, vehiculo.data.anio, vehiculo.data.precio, vehiculo.data.kilometraje, vehiculo.data.capacidad, vehiculo.data.patente, vehiculo.data.puertas, vehiculo.data.airbags, vehiculo.data.funcionaOk);
            }

            this.listaVehiculos.push(vehiculoNuevo);
            console.log(vehiculoNuevo);
            
            fs.appendFileSync('vehiculos.csv',
                "\n"+
                vehiculo.tipo + ","+
                vehiculoNuevo.getMarca() + ","+ 
                vehiculoNuevo.getModelo() + ","+ 
                vehiculoNuevo.getAnio() + ","+ 
                vehiculoNuevo.getKilometraje() + ","+ 
                vehiculoNuevo.getPrecio() + ","+ 
                vehiculo.data.capacidad + ","+ 
                vehiculoNuevo.getPatente() + ","+ 
                vehiculoNuevo.getPuertas() + ","+
                vehiculoNuevo.getAirbags() + ","+ 
                vehiculoNuevo.getFuncionaOk().toString()); 
            return "ok";
        } else {
            return "parametros incorrectos";
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
}
