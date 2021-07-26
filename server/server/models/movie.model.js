const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "Title is required"],
        maxLength: [30, "That is not a Movie"],
        minLength: [3, "Movie must be at least 3 characters long"]
    },

    year: {
        type: Number,
        required: [true, "When was the movie made?"],
        maxLength: [4, "Year only"],
        minLength: [4, "Year only"]
    },

    length: {
        type: Number,
        required: [true, "How long is the movie?"],
        maxLength: [4, "No movie is longer than 1000 minutes!"],
        minLength: [1, "Must be at least one minute!"]
    },

    year: {
        type: Number,
        required: [true, "year is required"],

    },

    //for a checkbox field
    isMotivational:{
        type: Boolean
    },

    popularityLevel:{
        type:Number,
        max:[10, "Movie can't be more fire that 10"],
        min:[1, "Movie cant be that bad that its less than 1"]
    }

}, {timestamps:true} )

const Movie = mongoose.model("Movie", MovieSchema );

module.exports = Movie;