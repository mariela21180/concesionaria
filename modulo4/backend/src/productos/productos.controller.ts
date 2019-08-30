import { Controller, Get, Param } from '@nestjs/common';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
    constructor(private productoService: ProductosService) { }
    @Get()
    public getProductos(): string {
        return this.productoService.getProductos()
    }
    @Get(':pos')
    public getProducto(@Param('pos') posicion) : string { //posicion es el nombre que le pongo a la variable pos para usarla dentro del método
        return this.productoService.getProducto(posicion);        
    }
}