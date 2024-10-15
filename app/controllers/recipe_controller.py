from fastapi import APIRouter, Request, HTTPException
from typing import List, Dict
from app.models.recipe import Recipe
from app.services.recipe_service import create_recipe
from app.storage import get_recipes

router = APIRouter()

@router.get("/recipes", response_model=List[Recipe])
async def get_all_recipes():
    return get_recipes()

@router.post("/recipes", response_model=Recipe, status_code=201)
async def create_new_recipe(recipe_data: Dict):
    return create_recipe(recipe_data)
