# Task manager with Node Backend
A simple task manager with authenticated CRUD app with Node.js and MongoDB

## Getting Started
To run the server:

1. Install Node.js
2. npm install

## Database
Database will be hosted remotely on mLab. mLab offers a nice free tier that we can use to test our application.
Setup your own mlab db

1. Go to http://mlab.com/ and signup
2. Click on ‘Create New’
3. Select the Sandbox Plan Type and click on ‘Continue’
4. Enter a database name, say 'mydb2018'.
5. Submit Order
6. Next step would be creating a user to be able to access the database. Simply click on ‘Add database user’ (somename/password)

Update the mongodb config on our code:
```
 let dev_db_url = 'mongodb://somename:password@ds112619.mlab.com:231324/mydb2018';
```
## API end points

1. **POST /user/register**
/* Register new login*/

 Request Body:
  {
    "username": "sample",
    "password": "pwd",
    "firstname":"asd",
    "lastname":"fgh"
  }
  
2. **POST /user/login**
/* user login*/
 Request Body:
  {
    "username": "sample",
    "password": "pwd"
  }

  
 3. **POST /tasks/create**
 /* create tasks*/
 Request Body:
 
 {
 "text":"Sample Text"
 }
 
 4. **GET /tasks/user/:id**
 /* get user tasks*/
 List all user tasks
  



