import { Recipe } from '../entities/Recipe';
import { addRecipe } from '../storage';

export const createRecipe = (recipeData: Partial<Recipe>): Recipe => {
  const newRecipe: Recipe = {
    id: Date.now(), // Simple id generation
    title: recipeData.title || '',
    description: recipeData.description || '',
    ingredients: recipeData.ingredients || [],
    steps: recipeData.steps || [],
    author: recipeData.author || null,
  };
  addRecipe(newRecipe);
  return newRecipe;
};