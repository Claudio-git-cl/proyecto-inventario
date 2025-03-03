"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoService = void 0;
const common_1 = require("@nestjs/common");
let ProductoService = class ProductoService {
    constructor(prisma) {
        this.prisma = prisma;
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
        }
        catch (error) {
            console.error('Error al obtener productos:', error);
            throw new Error('Error al obtener productos');
        }
    }
};
ProductoService = __decorate([
    (0, common_1.Injectable)()
], ProductoService);
exports.ProductoService = ProductoService;
