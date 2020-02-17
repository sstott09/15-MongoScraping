var mongoose = require("mongoose");
var schema = mongoose.Schema;

var articlesSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    link: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        default: "Summary unavailable"
    },
    img: {
        type: String,
    },
    isSaved: {
        type: Boolean,
        default: false,
    },
    status: {
        type: String,
        default: "Save Article"
    },
    created: {
        type: Date,
        default: Date.now,
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

articlesSchema.index({title: "text"});

var Article = mongoose.model("Article", articlesSchema);
module.exports = Article;