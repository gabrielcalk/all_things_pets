# All Things Pets

![Backend to the future](/images/image%20(3).png)

![MIT License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

Covid-19 changed the way American's have lived their lives. In fact, pet adoptions increased by 30 to 40 percent in the year 2020 when compared to 2019. Unfortunately, by the following year, pet surrenders were up by 80%. Adopting a animal is a large responsibility that often times people are not prepared for. This application's purpose is to create a database on pet ownership and descriptions of various animals in order for the user to make a more informed decisions on future pet adoptions or integrating the user's pet into their daily activities.

* [All Things Pets Deployed Web Page](https://vast-retreat-92642.herokuapp.com/)

  ## Table of Contents
  
  * [Goals](#goals)
  * [Implementation](#implementation)
  * [Installation](#installation)  
  * [Problems](#problems)
  * [Connections](#connections)
  * [Visualization Mockup](#visualization)
  * [Visualization Of Deployed Page](#visualization2)
  * [Resources](#resources)
  * [License](#license)
  * [Contact](#contact)
  
## Goals

* Use Node.js and Express.js to create a RESTful API.

* Use Handlebars.js as the template engine.

* Use MySQL and the Sequelize ORM for the database.

* Have both GET and POST routes for retrieving and adding new data.

* Use at least one new library, package, or technology that we haven’t discussed.

* Have a folder structure that meets the MVC paradigm.

* Include authentication (express-session and cookies).

* Protect API keys and sensitive information with environment variables.

* Be deployed using Heroku (with data).

* Have a polished User Interface.

* Be responsive.

* Be interactive (i.e., accept and respond to user input).

* Meet good-quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).

* Have a professional README (with unique name, description, technologies used, screenshot, and link to deployed application).

## Implementation

![git branching](./images/git-branching.png)

* First, In order to implement development of creating a database of pets we utilized git branching. Git branching allows each programmer to work in a local branch. When the user pushes their work to the repository. The changes are peer reviewed to make sure that none of the upcoming changes will effect main branch. This also allows for user communication to see the progress of each user. If a change is submitted that will cause a merge conflict github will protect the main repository by making sure some changes are not committed. Github also allows issues to be assigned to other group members and allows others to assign tast so bugs can be worked and task are not being worked on in two different branches this helps to resolve any potential merge conflicts.
  
![Node-Express](./images/node-express.png) ![install express](images/install-express.png)

* Next, We installed the npm framework package of node and express.js. With express, we have a myriad of HTTP utility methods and middleware to create a RESTful API. When working with Express we are able to use Routing, Middleware and Request/Response. The methods we used in our project are app.get, app.use, req, and res to send information around the server.
  
![handlebars](images/handlebars.png) ![npm i handlebars](./images/npm-i-hbars.png)

* In order to connect our information to HTML we used Handlebars templating language. This allowed for fast design of the HTML page. Handlebars allows the web developer utilize the front end template to connect to the backend database. This gave us a spot to export our data onto the webpage that had been sequalized into mySQL.

![Mindly](./public/images/Mindly.png)

* We used Mindly to assist in visualizing the connections from one part of the website to the next.
 
![mysql](./images/mysql.png) ![sequelize](./images/sequelize.png)

* In order to connect to our database we used the npm package sequelize. This allowed us to seed our data into the sql table database. This was done via the GET and POST routes via Express.

* There were a couple new technologies utilized in this group project.

![anime js](images/anime.jpg)

* Anime JS allowed us to header animation to our site. We plan to go in later into our project utilize this ability more on the page to give it a less static feel.

* [Beautify Tools](https://beautifytools.com/excel-to-json-converter.php) was also utilized to convert the data from the excel spreadsheet into a JSON. The subject matter for our project was so specific we researched our data from various petsites to create our own API. This was definitely a challenge but a exellent one.

* Technologies used for this project were Express, Express Session, Sequelize, Node, AnimeJS, Beautify tools, and handlebarsjs mySQL.
   
## Installation
  
* npm i  
* Then set up your mySQL data base to connect to
* run the command NPM run seeds to make sure your data is seeding out of the seeds folder into the db.
* then type node server.js

## Problems

* We weren't able to find a api that had the information we were looking for so we had to manually input each line of the database from pet websites in order to use the data we need to create the correct information needed to solve our problem.

* Getting dog question user to be able to select more than one option. Was a fairly difficult task.
  
* Connecting to heroku database. We had to troubleshoot the Heroku log in order to correct case sensitive data folder that github ignored when it was pushed.

* Connecting the database to heroku.  

## Connections

All Things Pets Homepage and layout of how website is designed.

	  I Already Have A Pet

		    What would you like to do today?

			      Park

				        Place information

			      Restaurant

				        Place information

			      Grooming/Training

				        Place information

			      Vet

				        Place information

			      Retail

				        Place information

			      Rescue

				        Place information

			      Home Services

				        Place information

			      Camping

				        Place information

			      Beach

				        Place information

			      Hotel

				        Place Information

			      Boarding

				        Place information

			      Bakery

				        Place information

	  I Want A Name For My Pet

		    Letter Selection

			      Search By Male

			      Search By Female

		    Add One Name

	  Login

		    Login

		    Signup

	  I Am Looking For A Pet

		    Dog

			      Dog Quiz

				        Suggested Dogs

					          Breed

						            Breed Name

						            Breed Description

						            Breed Image

		    Cat

			      Cat Quiz

				        Suggested Cats

					          Breed

						            Breed Name

						            Breed Description

						            Breed Image

				            Pet Rock
404 Page

Connection Map Bellow is connection map of how the websit is laid out and information was gathered in the research process.

![connection map](./images/connection-map.png)


## Visualization

Mockup choose your pet
![choose your pet](./images/_pets-for-you.png)

Mockup pet questionaire
![questions](./images/_questions(2).png)

mockup questionaire
![](images/_questions(1).png)

mock up sign up 
![sign up page](images/_signup.png)

Mockup visualization for Login page
![mockup login](./images/_login.png)

Mockup for pet friendly locations parks, restaurants and vets
![mockup local pet friendly places](images/_info%20-%20part(1).png)

Mockup for locations boarding and training
![mockup](./images/_info%20-%20part(2).png)

mockup 404 page
![404](images/404%20page.png)

## Visualization2

Deployed Homepage
![homepage](./images/homepage.png)

Login to deployed page
![login page](./images/login-ihaveapet.png)

Dog Questions
![Dog Questions 1](/images/dogquestions1.png)
![dog questions 2](images/dogquestions2.png)
![dog questions 3](images/dogquestions3.png)
![dog questions 4](images/dogquestion4.png)

Dog Result Recommendations
![Dog Results](images/dogbreedrecommedations.png)

Cat Questions
![cat questions 1](images/catquestions1.png)
![cat question 2](images/catquestions2.png)
![cat question 3](images/catquestions3.png)

Cat Result Recommendations
![Cat Recommendations](/images/cat%20recommendations.png)

When the database can't find a pet based on the user's needs we refer the user to different pet suggestion...
![Pet Rock Suggestion](images/rock%20page.png)

Get a pet Name Page
![Get name for your pet](images/names.png)

Add a pet name to the database
![create a name](images/createaname.png)

Pet name Added to database
![Name Added](images/gabrieladded.png)

Things to do
![Things to do](/images/things-to-do.png)

Example of a displayed option for things to do
![](/images/contentofthingstodoexample.png)

## Resources

[Pet Adoption Increase during 2020](https://www.washingtonpost.com/dc-md-va/2021/01/06/animal-shelters-coronavirus-pandemic/)

[Pet Surrenders During 2021](https://www.nbcboston.com/news/clear-the-shelters/animals-adopted-during-pandemic-are-being-returned-to-shelters/2380084/)

[Eloquent Javascript](https://eloquentjavascript.net)

[Beautify Tools](https://beautifytools.com/excel-to-json-converter.php)

[AKC for Pure Breed information](https://beautifytools.com/excel-to-json-converter.php)

[Dog Time for information on mixed breeds](https://dogtime.com)

[cat information]()

[Pet friendly locations](bringfido.com)

[google searches](google.com)

[Daily Paws](Dailypaws.com)

[Mindly](mindly.com)

[wamiz](wamiz.co.uk)

## License

Brent Graves, Huston "Fenix" Sampson, Meredith Coyne, and Gabriel Cavalcante Causin  Copyright 2021

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contact

* Brent Ryan Graves GitHub Username: grave019

* Link to Github Account [Brent Graves Repository](https://github.com/grave019)

* Email: brent.r.graves82@gmail.com

* Gabriel Cavalcante Causin Github Username: gabrielcalk

* Link to Github Account [Gabriel Cavalcante Causin Repository](https://github.com/gabrielcalk)

* Email: gabrielcalk@outlook.com

* Fenix Sampson Github Username: FenixS83

* Link to Github Account [Fenix Sampson Repository](https://github.com/FenixS83)

* Email: fenix.sampson@gmail.com

* Meredith Coyne Github Username: meredithcoyne

* Link to Github Account [Meredith Coyne Repository](https://github.com/meredithcoyne)

* meredithleigh.coyne@gmail.com