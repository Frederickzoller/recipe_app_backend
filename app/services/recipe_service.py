import time
from typing import Optional
from app.models.recipe import Recipe
from app.storage import add_recipe

def create_recipe(recipe_data: dict) -> Recipe:
    new_recipe = Recipe(
        id=int(round(time.time() * 1000)),
        title=recipe_data.get("title", ""),
        description=recipe_data.get("description", ""),
        ingredients=recipe_data.get("ingredients", []),
        steps=recipe_data.get("steps", []),
        author_id=recipe_data.get("author_id")
    )
    add_recipe(new_recipe)
    return new_recipe
