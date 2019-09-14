import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { VehiculosService } from './vehiculos/vehiculos.service';
import { VehiculosController } from './vehiculos/vehiculos.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..',
      'client'),
    }),
  ],
  controllers: [AppController, VehiculosController],
  providers: [AppService, VehiculosService],
})
export class AppModule {}
