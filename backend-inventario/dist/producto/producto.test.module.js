"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestModule = void 0;
const common_1 = require("@nestjs/common");
const producto_controller_1 = require("./producto.controller");
const producto_service_1 = require("./producto.service");
// Servicio simulado
class MockProductoService {
    async findAll() {
        return [{ id: 1, name: 'Producto de prueba' }]; // Devuelve un producto de prueba
    }
}
let TestModule = class TestModule {
};
TestModule = __decorate([
    (0, common_1.Module)({
        controllers: [producto_controller_1.ProductoController],
        providers: [{ provide: producto_service_1.ProductoService, useClass: MockProductoService }],
    })
], TestModule);
exports.TestModule = TestModule;
