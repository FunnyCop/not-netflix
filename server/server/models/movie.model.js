const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "Title is required"],
        maxLength: [30, "That is not a Movie"],
        minLength: [3, "Movie must be at least 3 characters long"]
    },

    length: {
        type: Number,
        required: [true, "How long is the movie?"],
        maxLength: [4, "No movie is longer than 1000 minutes"],
        minLength: [1, "Must be at least one minute"]
    },

    description: {
        type: String,
        required: [true, "Description is required"],
        maxLength: [255, "That is not a description"],
        minLength: [10, "Description must be at least 10 characters long"]
    },

    year: {
        type: Number,
        required: [true, "When was the movie made?"],
        maxLength: [4, "Year only"],
        minLength: [4, "Year only"]
    },

    rating: {
        type: String,
        required: [true, "Who is the intended audience?"],
        maxLength: [5, "Rating only please"],
        minLength: [4, "Rating please"]
    },

    cast1: {
        type: String,
        required: [true, "At least one actor/actress is required"],
    },

    cast2: {
        type: String
    },

    cast3: {
        type: String
    },

    genre1: {
        type: String,
        required: [true, "At least one genre is required"],
    },

    genre2: {
        type: String
    },

    keyword1: {
        type: String,
        required: [true, "At least one genre is required"],
    },

    keyword2: {
        type: String
    },

    tag: {
        type: String,
        required: [true, "At least one tag is required"],
    },

    likeCounter:{
        type: Number,
        maxLength:[1, "You really liked the movie"],
        minLength:[-1, "Oof thats not a good movie huh"]
    }

}, {timestamps:true} )

const Movie = mongoose.model("Movie", MovieSchema );

module.exports = Movie;