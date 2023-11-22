const mongoose = require("mongoose");

const ExamSchema = new mongoose.Schema(
    {
    questionEng: {
        type: String,
        required: true,
    },
    questionLao: {
        type: String,
        required: true,
    },
    answerEng: {
        type: String,
        required: true,
    },
    answerLao: {
        type: String,
        required: true,
    },
    },
);

const Exam = mongoose.model("Exam", ExamSchema, "exam");

module.exports = Exam;
