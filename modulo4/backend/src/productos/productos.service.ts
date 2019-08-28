import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductosService {
    private static readonly CANTIDAD_PRODUCTOS = 10;
    public getProducto(): any {
        let productos = [];
        for (let i = 0; i < ProductosService.CANTIDAD_PRODUCTOS; i++) {
            let producto = {
                'producto': 'producto_' + i,
                'precio': Math.floor(Math.random() * 100),
                'descripcion': 'descripcion_' + i
            };
            productos.push(producto);
        }
        return productos;
    }
}
