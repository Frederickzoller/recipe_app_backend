from typing import List, Optional
from pydantic import BaseModel
from app.models.recipe import Recipe

class User(BaseModel):
    id: int
    email: str
    password: str
    recipes: List[Recipe] = []
