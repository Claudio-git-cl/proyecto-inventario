import { Module } from '@nestjs/common';
import { ProductoModule } from './producto/producto.module';

@Module({
  imports: [ProductoModule],
})
export class AppModule {}

console.log('AppModule initialized');