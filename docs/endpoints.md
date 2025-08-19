# API Endpoints (base path: /api)

## GET /api
Health check
Response:
{ "status": "ok", "message": "Express JSON API", "version": "1.0" }

## GET /api/items
List all items
Response: 200 OK
[
  { "id": 1, "name": "Milk", "qty": 2 },
  ...
]

## POST /api/items
Create an item
Request JSON:
{ "name": "Milk", "qty": 2 } // qty optional, default 1
Response: 201 Created
{ "id": 1, "name": "Milk", "qty": 2 }

## GET /api/items/:id
Get single item by id
Response: 200 OK or 404 Not Found

## PUT /api/items/:id
Replace/update item (expects JSON with fields)
Response: 200 OK or 404 Not Found

## PATCH /api/items/:id
Partially update item
Response: 200 OK or 404 Not Found

## DELETE /api/items/:id
Delete item
Response: 200 OK or 404 Not Found
