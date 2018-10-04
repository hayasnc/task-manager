# task-manager
A simple task manager with auth backend


API end points

1. POST /user/register
/* Register new login*/

 Request Body:
  {
    "username": "sample",
    "password": "pwd",
    "firstname":"asd",
    "lastname":"fgh"
  }
  
2. POST /user/login
/* user login*/
 Request Body:
  {
    "username": "sample",
    "password": "pwd"
  }

  
 3. POST /tasks/create
 /* create tasks*/
 Request Body:
 
 {
 "text":"Sample Text"
 }
 
 4. GET /tasks/user/:id
 /* get user tasks*/
 List all user tasks
  



