import { Schema, model } from "mongoose";

const MovieSchema = new Schema({
    title:String,
    description:String,
    bannerImage:String,
    trailerVideo:String,
    rating:Number,
    casts:[{name:String,image:String}],
    duration: Number,
    genre:Enumerator,
    releaseDate: Date,
    // language:enum[],
})

const Movie = new model('movie',MovieSchema);

export default Movie;