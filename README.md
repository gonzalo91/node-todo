# node-toto


## Routes
| Method 	| Route 	| Controller 	| Action 	| Returns 	| Body Params
|-	|-	|-	|-	|-	|- |
| POST 	| /auth/register 	| UserController 	| Should register a User given an email, user and password 	| Returns User info with a jWT 	| email, name, password |
| POST 	| /auth/login 	| UserController 	| Should login a user given an email and password 	| Returns User info with a jWT 	| email, password |
| PUT 	| /todo/create 	| TaskController 	| Should create a task for the logged user 	| Returns status code 	| |
| GET 	| /todo/{done?} 	| TaskController 	| Look for all the tasks, if get variable is defined(Returns either <br>done tasks or undone tasks) 	| Returns the appropiate tasks 	| |
| UPDATE 	| /todo/{id} 	| TaskController 	| Update task 	| Returns Status code 	| |
| DELETE 	| /todo/{id} 	| TaskController 	| Delete Task 	| Returns status code 	| |