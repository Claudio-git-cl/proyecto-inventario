import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; // Cambiar a usar AppModule

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}
bootstrap();