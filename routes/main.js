// THIS MAIN JS FILE IS ESSENTIALLY A NAVIGATION
    // See mapping.md to see how to navigate

const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const aboutController = require("../controllers/about");
const studyController = require("../controllers/study");
const accountController = require("../controllers/account");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - routes are written close to logical order of flow in site map
router.get("/", homeController.getIndex); // connected to index.ejs | clear; css later 
router.get("/login", authController.getLogin); // connected to signup.ejs | clear; css later | citizenshipappcm@gmail.com, november
router.post("/login", authController.postLogin); // connected to login.ejs | clear; css later
router.get("/feed", ensureAuth, postsController.getFeed);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);
router.get("/logout", authController.logout);

//Routes for landing page
router.get("/profile", ensureAuth, postsController.getProfile); // connected to profile.ejs

//Routes for study page
router.get("/study", ensureAuth, studyController.getExam); // Renders page and gets questions in eng/lao
router.put("/study/updateSurvey", ensureAuth, studyController.updateSurvey) // boolean value for if answer correct or not
// router.get("/study/correct", ensureAuth, studyController.getCorrect) // boolean value for if answer correct or not

//Routes for account page
router.get("/account", ensureAuth, accountController.getAccount); // Renders page
router.post("/account", ensureAuth, accountController.postPersonal); // Users send a form to personalize

//Routes for about page
router.get("/about", aboutController.getAbout); // QUESTION why is getAbout not yellow, even though it is being called from controller?

module.exports = router;