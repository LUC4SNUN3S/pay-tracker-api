import { z } from 'zod'


const envSchema = z.object({
  POSTGRES_USER: z.string().min(1),
  POSTGRES_PASSWORD: z.string().min(1),
  POSTGRES_DB: z.string().min(1),
  DATABASE_URL: z.string().min(1),
  PORT: z.string().default('3000'),
  NODE_ENV: z.string().default('development'),
})

const validateEnviromentVariables = () => {
  return envSchema.parse(process.env)
}

export const env = validateEnviromentVariables();