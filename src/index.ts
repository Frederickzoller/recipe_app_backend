import Fastify, { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import fastifyCors from '@fastify/cors';
import fastifyJwt from '@fastify/jwt';
import dotenv from 'dotenv';
import { initializeStorage } from './storage';
import { getAllRecipes, createNewRecipe } from './controllers/recipeController';

dotenv.config();

// Initialize Fastify instance
const app: FastifyInstance = Fastify({
  logger: true,
});

// Register CORS to allow cross-origin requests
app.register(fastifyCors, {
  origin: '*', // Update this in production for security
});

// Register JWT for authentication
app.register(fastifyJwt, {
  secret: process.env.JWT_SECRET || 'your-secure-secret', // Use environment variable
});

// Initialize in-memory storage
initializeStorage();

// Sample route to verify server is running
app.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
  return { message: 'Welcome to The OG Recipes API' };
});

// Register recipe routes
app.get('/recipes', getAllRecipes);
app.post('/recipes', createNewRecipe);

// Start the Fastify server
app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`Server is running at ${address}`);
});