import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { PrismaService } from '../prisma/prisma.service'; // Importa el servicio real
import { ProductoController } from './producto.controller';

@Module({
  providers: [ProductoService, PrismaService], // Usa PrismaService
  controllers: [ProductoController],
  exports: [ProductoService],
})
export class ProductoModule {}