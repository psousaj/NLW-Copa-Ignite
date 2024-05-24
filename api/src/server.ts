import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'
import * as z from 'zod'
import ShortUniqueId from 'short-unique-id'

const prisma = new PrismaClient({ log: ['query'] })

async function bootstrap() {
    const fastify = Fastify({
        logger: false
    })

    await fastify.register(cors, {
        origin: true
    })

    fastify.get('/pools/count', async () => {
        const count = await prisma.pool.count()

        return { count }
    })
    fastify.get('/users/count', async () => {
        const count = await prisma.user.count()

        return { count }
    })
    fastify.get('/guesses/count', async () => {
        const count = await prisma.user.count()

        return { count }
    })


    fastify.post('/pools', async (request, repply) => {
        const createPoolBody = z.object({
            title: z.string()
        })

        const { title } = createPoolBody.parse(request.body)

        const generate = new ShortUniqueId({ length: 6 })
        const code = String(generate.rnd()).toUpperCase()

        await prisma.pool.create({
            data: {
                title: title,
                code
            }
        })

        return repply.status(201).send({ code })
    })

    await fastify.listen({ port: 3333, host: '0.0.0.0' })
    console.log('Server running on port 3333 🚀')
}

bootstrap()