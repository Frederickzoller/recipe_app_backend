from typing import List
from app.models.user import User
from app.models.recipe import Recipe

users: List[User] = []
recipes: List[Recipe] = []

def initialize_storage():
    global users, recipes
    users = []
    recipes = []

def get_users() -> List[User]:
    return users

def add_user(user: User):
    users.append(user)

def get_recipes() -> List[Recipe]:
    return recipes

def add_recipe(recipe: Recipe):
    recipes.append(recipe)
