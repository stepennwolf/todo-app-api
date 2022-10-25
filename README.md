# RESTful API for TODO app

## API contract

### Todo endpoints

#### Create new TODO resource
`POST /v1/todos`

Body
```json
{
  "title": "Todo title"
}
```

#### Update Todo resource
`PATCH /v1/todos/:id`

Body
```json
{
  "completed": bool
}
```

#### Delete Todo resource
`DELETE /v1/todos/:id`


#### Get TODO list
Return all items unless `completed` is supplied

`GET /v1/todos`

Query params:
```
completed: true/false
```
