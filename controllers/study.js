const { db } = require("../models/User");
const Exam = require("../models/Exam");
// const Answer = require("../models/Answer");

//render the about page
    module.exports = {
    getExam: async (req, res) => {
        try {
            const examData = await Exam.find();
            const sum = await Exam.countDocuments({ answer: true});
            console.log(examData); // Log the data
            res.render("study.ejs", {exam: examData, sum: sum});
        } catch (error) {
            console.log(error);
        }
    },
    updateSurvey: async (req, res) => {
        try {
            console.log("Received form data:", req.body);
            await Exam.findOneAndUpdate(
            { _id: req.body.id },
            {
                $set: { answer: true },
            }
        );
            res.redirect(`/study`);
            } catch (err) {
        }
    },
};