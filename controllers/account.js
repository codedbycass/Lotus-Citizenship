const { db } = require("../models/User");
const Personalize = require("../models/Personalize");

// This renders the page
module.exports = { 
    getAccount: async (req, res) => {
        try {
            const personalizeData = await Personalize.find();
            res.render("account.ejs", { personalize: personalizeData });
        } catch (error) {
            console.log(err);
        }
    },       
    postPersonal: async (req, res) => {
        try {
            await Personalize.create({
            age: req.body.age,
            lang: req.body.lang,
            lpr: req.body.lpr,
            pb: req.body.pb
        });
            console.log("Post has been added!");
            res.redirect("/account");
        } catch (err) {
            console.log(err);
        }
    },  
};