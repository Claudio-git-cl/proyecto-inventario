"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let PrismaService = class PrismaService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
        // Puedes agregar otros métodos para interactuar con la base de datos
    }
    async findMany() {
        return await this.prisma.producto.findMany(); // Suponiendo que tienes un modelo llamado 'producto'
    }
};
PrismaService = __decorate([
    (0, common_1.Injectable)()
], PrismaService);
exports.PrismaService = PrismaService;
