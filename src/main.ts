import { INestApplication, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from '@/app.module'
import { env } from '@/config/env'

async function enableDocumentation(app: INestApplication<any>) {
  const config = new DocumentBuilder()
    .setTitle('Pay-Tracker-API')
    .setDescription('API direcionada a upload e controle de pagamentos')
    .build()

  const documentFactory = () => SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('doc', app, documentFactory)
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors()

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      stopAtFirstError: true,
    }),
  )

  enableDocumentation(app)

  await app.listen(env.PORT)
}
bootstrap()
