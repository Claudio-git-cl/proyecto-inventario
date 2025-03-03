import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Cambia a PrismaService

@Injectable()
export class ProductoService {
    constructor(private readonly prisma: PrismaService) {
        console.log('PrismaService:', prisma); 
        console.log('ProductoService initialized with PrismaService:', prisma);
    }

    async findAll() {
        console.log('findAll() called');
        console.log('this.prisma:', this.prisma);
        try {
            const productos = await this.prisma.findMany();
            console.log('Productos encontrados:', productos);
            return productos;
        } catch (error) {
            console.error('Error al obtener productos:', error);
            throw new Error('Error al obtener productos');
        }
    }
}