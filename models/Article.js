const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    articleDate: { type: String, required: true },
    url: { type: String, required: true }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;