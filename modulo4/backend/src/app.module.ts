import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ProductosController } from './productos/productos.controller';
import { ProductosService } from './productos/productos.service';
import { CalcularService } from './calcular/calcular.service';
import { CalcularController } from './calcular/calcular.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..',
      'client'),
    }),
  ],
  controllers: [AppController, ProductosController, CalcularController],
  providers: [AppService, ProductosService, CalcularService],
})
export class AppModule {}
