import { Controller, Get, Param } from '@nestjs/common';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
    constructor(private productoService: ProductosService) { }
    @Get()
    public getProductos(): string {
        return this.productoService.getProductos()
    }
    @Get(':arg1/:arg2/:arg3/:arg4')
    public getProducto(@Param('arg1') pos1, @Param('arg2') pos2, 
    @Param('arg3') pos3, @Param('arg4') pos4) : string { //posicion es el nombre que le pongo a la variable pos para usarla dentro del método
        return this.productoService.getProducto(pos1, pos2, pos3, pos4);        
    }
}