import Fastify from "fastify"
import cors from "@fastify/cors"
import jwt from "@fastify/jwt"
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui'
import fastifyAutoload from "@fastify/autoload"

import { poolRoutes } from "@/routes/pool"
import { authRoutes } from "@/routes/auth"
import { gameRoutes } from "@/routes/game"
import { guessRoutes } from "@/routes/guess"
import { userRoutes } from "@/routes/user"
import path from "path";

async function bootstrap() {
  const fastify = Fastify()

  await fastify.register(cors, {
    origin: true,
  })

  await fastify.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'NLW Copa API',
        description: 'NLW Copa API Documentation',
        version: '1.0.0'
      },
    }
  });

  fastify.register(fastifyAutoload, {
    dir: path.join(__dirname, 'routes')
  })

  await fastify.register(fastifySwaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'list',
      deepLinking: true
    },
    // staticCSP: true,
  })


  await fastify.register(jwt, {
    secret: process.env.JWT_SECRET || 'nlwcopa',
  })

  await fastify.register(poolRoutes)
  await fastify.register(authRoutes)
  await fastify.register(gameRoutes)
  await fastify.register(guessRoutes)
  await fastify.register(userRoutes)

  await fastify.listen({ port: Number(process.env.PORT) || 3333, host: '0.0.0.0' })
  console.log('Server is running on port 3333 🚀')

  fastify.ready().then(() => {
    fastify.swagger();
  });
}

bootstrap()