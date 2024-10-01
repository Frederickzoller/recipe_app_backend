import { FastifyRequest, FastifyReply } from 'fastify';
import { getRecipes } from '../storage';
import { createRecipe } from '../services/recipeService';
import { Recipe } from '../entities/Recipe';

export const getAllRecipes = async (request: FastifyRequest, reply: FastifyReply) => {
  const recipes = getRecipes();
  return reply.send(recipes);
};

export const createNewRecipe = async (request: FastifyRequest, reply: FastifyReply) => {
  const recipeData = request.body as Partial<Recipe>;
  const recipe = createRecipe(recipeData);
  return reply.status(201).send(recipe);
};

// ... similar changes for other endpoint handlers ...