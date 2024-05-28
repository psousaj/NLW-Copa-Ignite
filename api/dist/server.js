"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const jwt_1 = __importDefault(require("@fastify/jwt"));
const swagger_1 = __importDefault(require("@fastify/swagger"));
const swagger_ui_1 = __importDefault(require("@fastify/swagger-ui"));
const autoload_1 = __importDefault(require("@fastify/autoload"));
const pool_1 = require("@/routes/pool");
const auth_1 = require("@/routes/auth");
const game_1 = require("@/routes/game");
const guess_1 = require("@/routes/guess");
const user_1 = require("@/routes/user");
const path_1 = __importDefault(require("path"));
async function bootstrap() {
    const fastify = (0, fastify_1.default)();
    await fastify.register(cors_1.default, {
        origin: true,
    });
    await fastify.register(swagger_1.default, {
        openapi: {
            info: {
                title: 'NLW Copa API',
                description: 'NLW Copa API Documentation',
                version: '1.0.0'
            },
        }
    });
    fastify.register(autoload_1.default, {
        dir: path_1.default.join(__dirname, 'routes')
    });
    await fastify.register(swagger_ui_1.default, {
        routePrefix: '/docs',
        uiConfig: {
            docExpansion: 'list',
            deepLinking: true
        },
        // staticCSP: true,
    });
    await fastify.register(jwt_1.default, {
        secret: process.env.JWT_SECRET || 'nlwcopa',
    });
    await fastify.register(pool_1.poolRoutes);
    await fastify.register(auth_1.authRoutes);
    await fastify.register(game_1.gameRoutes);
    await fastify.register(guess_1.guessRoutes);
    await fastify.register(user_1.userRoutes);
    await fastify.listen({ port: Number(process.env.PORT) || 3333, host: '0.0.0.0' });
    console.log('Server is running on port 3333 🚀');
    fastify.ready().then(() => {
        fastify.swagger();
    });
}
bootstrap();
