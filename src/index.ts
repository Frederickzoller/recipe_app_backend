import fastify from 'fastify';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';

const server = fastify();

server.register(cors, {
  origin: true,
  credentials: true
});

server.register(jwt, {
  secret: process.env.JWT_SECRET || 'your-secret-key'
});

server.get('/', async (request, reply) => {
  return { message: 'Welcome to The OG Recipes API' };
});

const start = async () => {
  try {
    await server.listen({ port: 3000, host: '0.0.0.0' });
    console.log('Server running on http://localhost:3000');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();