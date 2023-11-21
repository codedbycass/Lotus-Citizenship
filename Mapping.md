# ROUTES / main.js breakdown and planning

## Approaching MVC
1. First see what files you need for your own project and don't touch any of the logic.
2. Think about pages you need to create (i.e. pages in nav bar); list them out as their routes (About = '/about', My Account = '/myaccount')
    - this will eventually go onto routes page (and will correspond with an EJS file)
3. Once you define the pages you want, think about what CRUD operations you need. 
    - This will go into your controllers folder, make a file accordingly
    - Pretty much all pages need a "read" operation
4. Make a schema for any forms requiring user inputs (tbd if schema is needed for static files in mongodb that is not dependent on user input)

## Doing MVC in practice
1. Always have these pages up at all times and flow in this order: 
    1. routes/main.js --- Look at bullet pt 2 and see what pages you need to add routes to. A good place to start is a simple get req to render all pages, add other ops as needed (i.e. post for forms).
    2. controller/nameofcontrollerfile.js --- Once you've created your route, which most likely ended with a function, you will add the logic to your function here (i.e. createPost)I *note: I usually make the name of my controller match the name of my corresponding ejs page. 
    3. models/nameofmodelsfile.js --- Models is not required for each page you've outlined in bullet pt 2, only if you're pulling something from the db. *note: I usually make this match the name of my ejs and controller file, 
    4. views/nameofviewsfile.ejs --- This is where everything from the controller and models are rendered!


## Exisiting routes from MVC template
- '/' home: this is the login or signup page 
```markdown
router.get("/", homeController.getIndex);
```
- '/profile' profile: this is your personal profile /profile -> this will be turned into lotus landing page
    - What CRUD ops on this page, if any?

- '/signup' signup: user creates an account
    - Read (Get): Renders page
    - Create (Post): creates an account and takes you to 'profile'

- '/login' login: user is authenticated and goes to their /profile
    - Read (Get): renders page
    - Create (Post): Creates user

## Need to create these routes for Lotus app
- '/account' account: account personalization page
    - Create (Post): users can interact with a form to send personal info and get information about tailored US citizenship process
    - Read (Get): render page
    - Update (Put): Users can update their form input 
    - Delete: users can delete info
- Question: how to make it so form is hidden after 1 submission, but can be toggled open if they want to update or delete
- Citizenship qualification conditionals
    if under 18 -> must be 18 to take US Citizenship test
    if in US < 5 years -> must wait until you've been a lpr for 5 yrs
    if over 18, in US for over 5 years, with public benefits -> You can begin your path to US citizenship! You must study for the exam in English. You qualify for the fee waiver.
    if over 50, in US for over 20 years, with public benefits -> You can begin your path to US citizenship! You can take the test in Lao. If so, you must bring an interpreter who is fluent in both English in Lao. Cannot be your family member. You qualify for the fee waiver.
    if over 55, in US for over 15 years, with public benefits -> You can begin your path to US citizenship! You can take the test in Lao. If so, you must bring an interpreter who is fluent in both English in Lao. Cannot be your family member. You qualify for the fee waiver.
    if over 18, in US for over 5 years, with public benefits -> You can begin your path to US citizenship! You must study for the exam in English. You qualify for the fee waiver.
    if over 65, in us for over 20 years, public benefits, you will be given special consideration.


- '/about': about the app
    - Read (Get): render page
### Done:
- Created a controller for about in case CRUD ops req in future scaling purposes


- '/study': study: core of the application where flashcards, translation?,  and text to speech API will reside
    - Read (Get): pull questions from MongoDB
### To do:
1. Determine if Update (Put) op for questions to be marked correct or incorrect is needed, if so need to make a study controller; then figure out how to make a dynamic flashcard set that shows cards user got incorrect

## Things I learned
1. EJS: partials, a way to modularize and abstract parts of the page that are used over and over again. Good for navigation, which remains consistent throughout. If you want to make an additions to the nav, you don't need to go into each page to update. You can just update the partials.

