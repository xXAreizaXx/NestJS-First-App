// NestJS
import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";

// Modules
import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(3000);
}
bootstrap();
