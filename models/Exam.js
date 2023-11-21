const mongoose = require("mongoose");

const ExamSchema = new mongoose.Schema(
    {
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    },
);

const Exam = mongoose.model("Exam", ExamSchema, "exam");

module.exports = Exam;
