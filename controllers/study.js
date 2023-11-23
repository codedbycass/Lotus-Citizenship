const { db } = require("../models/User");
const Exam = require("../models/Exam");
const Answer = require("../models/Answer");

//render the about page
    module.exports = {
    getExam: async (req, res) => {
        try {
            const examData = await Exam.find();
            const answerData = await Answer.find();
            console.log(examData); // Log the data
            console.log(answerData);
            res.render("study.ejs", {exam: examData, answer: answerData});
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