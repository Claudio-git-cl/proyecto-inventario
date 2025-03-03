"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoTestModule = void 0;
const common_1 = require("@nestjs/common");
const producto_service_1 = require("./producto.service");
const mock_prisma_service_1 = require("../prisma/mock-prisma.service"); // Importar el servicio simulado
let ProductoTestModule = class ProductoTestModule {
};
ProductoTestModule = __decorate([
    (0, common_1.Module)({
        providers: [producto_service_1.ProductoService, mock_prisma_service_1.MockPrismaService],
        exports: [producto_service_1.ProductoService], // Exportar ProductoService
    })
], ProductoTestModule);
exports.ProductoTestModule = ProductoTestModule;
