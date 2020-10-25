# node-toto


## Routes
| Method 	| Route 	| Controller 	| Action 	| Return 	|
|-	|-	|-	|-	|-	|
| POST 	| /auth/register 	| UserController 	| Should register a User given an email, user and password 	| Return User info with a jWT 	|
| POST 	| /auth/login 	| UserController 	| Should login a user given an email and password 	| Return User info with a jWT 	|
| PUT 	| /todo/create 	| TaskController 	| Should create a task for the logged user 	| Return status code 	|
| GET 	| /todo/{done?} 	| TaskController 	| Look for all the tasks, if get variable is defined(Return either <br>done tasks or undone tasks) 	| Return the appropiate tasks 	|
| UPDATE 	| /todo/{id} 	| TaskController 	| Update task 	| Return Status code 	|
| DELETE 	| /todo/{id} 	| TaskController 	| Delete Task 	| Return status code 	|