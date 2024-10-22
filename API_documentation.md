
# The OG Recipes API Documentation

## Introduction

Welcome to The OG Recipes API documentation. This API allows you to manage recipes in a simple and efficient manner. It provides endpoints for retrieving all recipes and creating new recipes.

## Base URL

The base URL for all API endpoints is:

```
http://localhost:3000
```

## Authentication

Currently, this API does not require authentication. However, it's recommended to implement proper authentication and authorization mechanisms in a production environment.

## Endpoints

### 1. Get All Recipes

Retrieves a list of all recipes stored in the system.

- **URL:** `/recipes`
- **Method:** GET
- **Response:** Array of Recipe objects

#### Example Request

```bash
curl -X GET http://localhost:3000/recipes
```

#### Example Response

```json
[
  {
    "id": 1,
    "title": "Spaghetti Carbonara",
    "description": "A classic Italian pasta dish.",
    "ingredients": ["spaghetti", "eggs", "pancetta", "parmesan cheese"],
    "steps": ["Cook pasta", "Fry pancetta", "Mix eggs and cheese", "Combine all ingredients"],
    "author_id": 1
  },
  {
    "id": 2,
    "title": "Chicken Curry",
    "description": "A flavorful Indian-inspired dish.",
    "ingredients": ["chicken", "curry powder", "coconut milk", "onions"],
    "steps": ["Marinate chicken", "Sauté onions", "Add chicken and spices", "Simmer with coconut milk"],
    "author_id": 2
  }
]
```

### 2. Create New Recipe

Creates a new recipe in the system.

- **URL:** `/recipes`
- **Method:** POST
- **Request Body:** Recipe object (without id)
- **Response:** Created Recipe object

#### Request Body Parameters

| Parameter    | Type     | Required | Description                           |
|--------------|----------|----------|---------------------------------------|
| title        | string   | Yes      | The title of the recipe               |
| description  | string   | Yes      | A brief description of the recipe     |
| ingredients  | string[] | Yes      | List of ingredients for the recipe    |
| steps        | string[] | Yes      | List of steps to prepare the recipe   |
| author_id    | number   | Yes      | The ID of the recipe's author         |

#### Example Request

```bash
curl -X POST http://localhost:3000/recipes \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Chocolate Chip Cookies",
    "description": "Classic homemade chocolate chip cookies.",
    "ingredients": ["flour", "butter", "sugar", "chocolate chips"],
    "steps": ["Mix dry ingredients", "Cream butter and sugar", "Combine all ingredients", "Bake"],
    "author_id": 3
  }'
```

#### Example Response

```json
{
  "id": 3,
  "title": "Chocolate Chip Cookies",
  "description": "Classic homemade chocolate chip cookies.",
  "ingredients": ["flour", "butter", "sugar", "chocolate chips"],
  "steps": ["Mix dry ingredients", "Cream butter and sugar", "Combine all ingredients", "Bake"],
  "author_id": 3
}
```

## Error Handling

The API uses standard HTTP status codes to indicate the success or failure of requests. In case of an error, the response will include an error message in the following format:

```json
{
  "detail": "Error message describing the issue"
}
```

Common error codes:

- 400 Bad Request: Invalid input data
- 404 Not Found: Requested resource not found
- 500 Internal Server Error: Unexpected server error

## Rate Limiting

Currently, there are no rate limiting policies in place. However, it's recommended to implement rate limiting in a production environment to prevent abuse and ensure fair usage of the API.

## Changelog

### Version 1.0.0 (Current)

- Initial release of The OG Recipes API
- Implemented GET /recipes endpoint to retrieve all recipes
- Implemented POST /recipes endpoint to create a new recipe

## Conclusion

This documentation covers the basic functionality of The OG Recipes API. As the API evolves, make sure to update this documentation with any new endpoints, parameters, or features added to the system.

For any questions or issues, please contact the API support team.