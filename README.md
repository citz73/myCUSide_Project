# myCUSide_Project

## Details
This document will be updated as the project progresses.
The project allows users to share, and recruit members for their projects by sharing their projects on the dashboard. The user and project owner will be able to communicate and upload their credentials such as a resume and project owner can accept/decline the user. 

## Set Up
 
System Requirements: I believe the program should run fine on any system.
To run django, python 3 is recommended. We ran with python 3.7.
To run react, node 6.0 or higher is required.
 
 
Front End
Go to file called 'frontend' from our directory.
Then go into ```gui``` file.
Then run `npm install` to get all the relevant builds required for build up.
Afterwards run ```npm start```to start the server.
 
 
Back End
Go to file called 'backend' from our directory.
Then ```source src/bin/activate``` to activate the django file.
Then run ```python django makemigrations ``` and run ``` python django migrate ```
to get all the necessary database models(schemas) to run the app. 
Then go into ```src``` file and run ```python django runserver``` to run server.
 
## Dependencies
 
### Front End
React-dom
React-router-dom
React-cookie
 
### Back End
django-rest-framework
django-cors-headers (Did not use yet. Will be used for integration) 

### Reference
Tutorial on Udemy 'React & Django Full Stack: web app, backend API, mobile apps' by Krystian Czekalski

Frontend screenshots: 
![Homepage](https://user-images.githubusercontent.com/23443978/76696773-6ec65880-6654-11ea-98e9-36cd81f44dea.JPG)
![Login](https://user-images.githubusercontent.com/23443978/76696774-70901c00-6654-11ea-910e-a882b2de6eab.JPG)
![Signup](https://user-images.githubusercontent.com/23443978/76696775-71c14900-6654-11ea-9022-c6afb008ad4b.JPG)

5) Backend screenshots:
![admin](https://user-images.githubusercontent.com/23443978/76696718-07a8a400-6654-11ea-9228-6a7a841e1c0b.png)
![api](https://user-images.githubusercontent.com/23443978/76696751-45a5c800-6654-11ea-9be4-779351e9dc6e.png)
![test1](https://user-images.githubusercontent.com/23443978/76696756-50f8f380-6654-11ea-87e2-9a9d2239a0a9.png)
![test5](https://user-images.githubusercontent.com/23443978/76696761-58b89800-6654-11ea-94f2-fd98c0542cc0.png)
![test6](https://user-images.githubusercontent.com/23443978/76696764-5b1af200-6654-11ea-8dc7-c8632b6a1833.png)
![test7](https://user-images.githubusercontent.com/23443978/76696766-5ce4b580-6654-11ea-8d0e-6eed967b4300.png)



