# CreadLink.ai SME Health Platform

## Dependencies

- Nest.js with GraphQL
- MongoDB

## Installation

```bash
$ npm install
```

### Database setup steps

- Create database in MongoDB `credlinkai`
- Copy DB URL to the .env file naming `MONGO_URI`

### Querying to the system

- As we have used `GraphQL`, you need to visit **/graphql** endpoint to perform GET All healthforms, e.g for Query:

```
{
	  healthform{
			id
			businessUEN
			businessName
			name
			email
			phone
	  }
}
```

- I have also provided postman collection export which is in **/postman** directory, you can export it and submit the form manually.

### File System Storage

- As I did not have AWS or any File Sevrer credentials so I have used local storage for storing attachments for forms, it will be stored inside **/uploads** directory.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
