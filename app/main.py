import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from app.storage import initialize_storage
from app.controllers import recipe_controller

load_dotenv()

app = FastAPI(title="The OG Recipes API", root_path="/api")

# Initialize in-memory storage
initialize_storage()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://recipe-refactored-2-fronted.vercel.app"],  # Update this with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(recipe_controller.router)

@app.get("/", tags=["Root"])
async def read_root():
    return {"message": "Welcome to The OG Recipes API"}
