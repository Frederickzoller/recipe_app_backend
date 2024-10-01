import { User } from './entities/User';
import { Recipe } from './entities/Recipe';

let users: User[] = [];
let recipes: Recipe[] = [];

export const initializeStorage = () => {
  users = [];
  recipes = [];
};

export const getUsers = () => users;
export const addUser = (user: User) => {
  users.push(user);
};

export const getRecipes = () => recipes;
export const addRecipe = (recipe: Recipe) => {
  recipes.push(recipe);
};

// ... add other necessary in-memory operations ...