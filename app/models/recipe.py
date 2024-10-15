from typing import List, Optional
from pydantic import BaseModel

class Recipe(BaseModel):
    id: Optional[int] = None
    title: str
    description: str
    ingredients: List[str]
    steps: List[str]
    author_id: Optional[int] = None
