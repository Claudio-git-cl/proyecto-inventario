import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Cambia a PrismaService

@Controller('productos')
export class ProductoController {
    constructor(private readonly prisma: PrismaService) {
        console.log('PrismaService en ProductoController:', prisma);
    }

    @Get()
    async getAll() {
        return this.prisma.findMany();
    }
}