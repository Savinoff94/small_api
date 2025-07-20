## Getting Started

First of all make shure you are inside project folder

Second, install you need to build container:

```bash
 docker build -t small_api .
```

Then, run the container:

```bash
 docker run -p 3000:3000 small_api
```

## API description

## Base URL 

```
/todos
```

### GET '/todos'
Fetch all todos or filter by status
#### Example 1
Request:
```
http://localhost:3001/todos/
``` 
Response: 
```json
{
    "todos": 
    [
        {
            "id": 1,
            "name": "Buy some food",
            "status": "in_process"
        },
        {
            "id": 2,
            "name": "fix the window",
            "status": "completed"
        },
    ]
}
```
#### Example 2
Request:
```
http://localhost:3001/todos/?status=in_process
``` 
Response: 
```json
{
    "todos": 
    [
        {
            "id": 1,
            "name": "Go some food",
            "status": "in_process"
        },
    ]
}

```
### DELETE '/todos/:id'
Delete one todo by id
#### Example 1
Request:
```
http://localhost:3001/todos/12321
``` 
Response(success): 
```json
{
    "message": "delete successfull"
}
```
Response(Not Found): 
```json
{
    "error": "todo not found"
}
```

### POST '/todos'
Create new todo
#### Example 1
Request body:
```json
{
    "name": "Buy some milk",
    "status": "in_process"
}
``` 
Validation :
- name must be provided
- status must be valid, can be only "in_process" or "completed"
Response(success): 
```json
{
    {
        "id": 1,
        "name": "Buy some milk",
        "status": "in_process"
    }
}
```

### PUT '/todos/:id'
Updates satus of one todo 
Request:
```
http://localhost:3001/todos/12321
``` 
#### Example 1
Request body:
```json
{
    "status": "in_process"
}
``` 
Validation :
- id must be provided
- status must be valid, can be only "in_process" or "completed"
Response(success): 
```json
{
    {
        "id": 1,
        "status": "in_process"
    }
}
```
Response(Not Found): 
```json
{
    "error": "todo not found"
}
```
