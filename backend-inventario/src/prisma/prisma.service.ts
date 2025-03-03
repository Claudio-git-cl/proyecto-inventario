import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
    private prisma = new PrismaClient();

    async findMany() {
        return await this.prisma.producto.findMany(); // Suponiendo que tienes un modelo llamado 'producto'
    }

    // Puedes agregar otros métodos para interactuar con la base de datos
}