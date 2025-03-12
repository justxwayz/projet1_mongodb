const mongoose = require("mongoose");

const HolidaySchema = new mongoose.Schema({
    nom_jour_ferie: String,
    date: String
});

const Holiday = mongoose.model("Holiday", HolidaySchema);

module.exports = Holiday;
