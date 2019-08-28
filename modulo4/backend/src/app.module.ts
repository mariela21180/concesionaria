import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ProductosController } from './productos/productos.controller';
import { ProductosService } from './productos/productos.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..',
      'client'),
    }),
  ],
  controllers: [AppController, ProductosController],
  providers: [AppService, ProductosService],
})
export class AppModule {}
