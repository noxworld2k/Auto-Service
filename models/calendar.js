const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calendarSchema = new Schema({
    Month: String,
    start: String,
    end: String,
    StartDay: Number,
    EndDay: Number,
    monthId: String,
});
