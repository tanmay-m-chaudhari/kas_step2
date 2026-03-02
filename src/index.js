const fastify = require('fastify')({ logger: true });

fastify.register(require('./plugins/cors'));

fastify.get('/', async (request, reply) => {
    return { status: 'ok' };
});

fastify.get('/health', async (request, reply) => {
    return { status: 'healthy' };
});

const start = async () => {
    try {
        await fastify.listen({ port: 80, host: '0.0.0.0' });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
