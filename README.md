# RESTful API for Todo app

## Tech Stack

- Node.js
- Express.js
- MySQL with Sequelize.js as ORM
- Docker

## Get Started

Run next command on local machine to install and launch the server with docker compose:
```shell
npm run docker:dev
```


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
