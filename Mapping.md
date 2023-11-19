# ROUTES / main.js breakdown and planning

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

## Need to creat these routes for Lotus app
- '/account' account: account personalization page
    - Create (Post): users can interact with a form to send personal info and get information about tailored US citizenship process
    - Read (Get): render page
    - Update (Put): Users can update their form input 
    - Delete: users can delete info
- Question: how to make it so form is hidden after 1 submission, but can be toggled open if they want to update or delete
### To do: 
1. Make an onboarding controller; this is where all CRUD funcs will live

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