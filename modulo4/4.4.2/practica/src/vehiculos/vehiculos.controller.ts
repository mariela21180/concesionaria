import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { VehiculosService } from './vehiculos.service';
import Vehiculo from './vehiculo';
import Camioneta from './camioneta';
import Auto from './auto';

@Controller('vehiculos')
export class VehiculosController {
    constructor(private vehiculosService: VehiculosService) {}

    @Get()
    public getVehiculos(): Vehiculo[] {
        return this.vehiculosService.getVehiculos();
    }
    @Get('autos')
    public getAutos(): Auto[] {
        return this.vehiculosService.getAutos();
    }
    @Get('camionetas')
    public getCamionetas(): Camioneta[] {
        return this.vehiculosService.getCamionetas();
    }

    @Post()
    public create(@Body() vehiculo: any): string {
        // Ejemplo Body
        // {
        //     "tipo": "camioneta",
        //     "data": {
        //         "marca": "Peugeot",
        //         "modelo": "Partner",
        //         "anio": 2018,
        //         "precio": 250000,
        //         "kilometraje": 10000,
        //         "patente": "AKK143",
        //         "puertas": 5,
        //         "airbags": 2,
        //         "funcionaOk": true,
        //         "capacidad": 4087
        //     }
        // } 

        return this.vehiculosService.create(vehiculo);
    }

    // @Put(:index)

}
