const { db } = require("../models/User");
const Exam = require("../models/Exam");

//render the about page
    module.exports = {
    getExam: async (req, res) => {
        try {
            const examData = await Exam.find();
            console.log(examData); // Log the data
            res.render("study.ejs");
        } catch (error) {
            console.log(error);
        }
    },  
};