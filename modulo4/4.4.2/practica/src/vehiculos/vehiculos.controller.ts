import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
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
    
    // Ejemplo Body
    // {
    //     "tipo": "camioneta",
    //     "data": {
    //         "marca": "Peugeot",
    //         "modelo": "Partner",
    //         "anio": 2018,
    //         "precio": 250000,
    //         "kilometraje": 10000,
    //         "capacidad": 4087,
    //         "patente": "WEP123",
    //         "puertas": 5,
    //         "airbags": 4,
    //         "funcionaOk": true
    //     }
    // } 

    @Post()
    public create(@Body() vehiculo: any): string {
        return this.vehiculosService.create(vehiculo);
    }

    @Put(':id')
    public updateVehiculo(@Body() vehiculo: any, @Param('id') linea): string {
        return this.vehiculosService.setVehiculo(vehiculo, linea);
    }

    @Delete(':id')
    public deleteVehiculo(@Param('id') linea): string {
        return this.vehiculosService.deleteVehiculo(linea);
    }

}
