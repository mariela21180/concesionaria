import { Controller, Get, Param, Post, Body, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { VehiculosService } from './vehiculos.service';
import { Vehiculo } from './entities/vehiculo.entity';
import { Camioneta } from './entities/camioneta';
import { Auto } from './entities/auto';

@Controller('vehiculos')
export class VehiculosController {
    constructor(private vehiculosService: VehiculosService) {}

    @Get()
    public getVehiculos(): Promise<Vehiculo[]> {
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
    @Get(':patente')
    public getVehiculo(@Param('patente') patente): Vehiculo {
        let vehiculo = this.vehiculosService.getVehiculo(patente);
        if (!vehiculo) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Patente no encontrada',
              }, 404);
        } else {
            return vehiculo;
        }
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

    @Put(':patente')
    public updateVehiculo(@Body() vehiculo: any, @Param('patente') patente): string {
        return this.vehiculosService.setVehiculo(vehiculo, patente);
    }

    @Delete(':patente')
    public deleteVehiculo(@Param('patente') patente): string {
        let r = this.vehiculosService.deleteVehiculo(patente);
        if (!r) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Patente no encontrada',
              }, 404);
        } else {
            return r;
        }
    }

}
