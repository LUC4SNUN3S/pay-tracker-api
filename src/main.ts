import { NestFactory } from '@nestjs/core'
import { AppModule } from '@/app.module'
import { env } from '@/config/env'
import { ValidationPipe } from '@nestjs/common'

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
  await app.listen(env.PORT)
}
bootstrap()
