import { Controller, Get, Param, Post, Body, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { VehiculosService } from '../services/vehiculos.service';
import { Vehiculo } from '../entities/vehiculo.entity';
import { Camioneta } from '../entities/camioneta';
import { Auto } from '../entities/auto';

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
    //     "tipo": "auto",
    //     "capacidad": 534,
    //     "marca": "Renault",
    //     "modelo": "12",
    //     "anio": 1980,
    //     "precio": 50000,
    //     "kilometraje": 250000,
    //     "patente": "UST182",
    //     "puertas": 4,
    //     "airbags": null,
    //     "funcionaOk": true,
    //     "id": 1
    // },

    @Post()
    public create(@Body() vehiculo: any): string {
        return this.vehiculosService.create(vehiculo);
    }

    @Put(':patente')
    public updateVehiculo(@Body() vehiculo: any, @Param('patente') patente) {
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
