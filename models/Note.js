var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var notesSchema = new Schema({
    title: {
        type: String,
    },
    body: {
        type: String,
    }
});

var Note = mongoose.model("Note", notesSchema);
module.exports = Note;