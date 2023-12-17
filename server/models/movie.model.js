import { Schema, model } from "mongoose";

const MovieSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    bannerImage:{
        type:String,
        required:true,
    },
    trailerVideo:{
        type:String,
        required:true,
    },
    rating:Number,
    casts:[{
        type: String,
        image: String,
        required: true,
    }],
    duration: Number,
    genre:{
        type: String,
        enum: ['Drama','Thriller','Horror','Fictinal','Comedy'],
        required: true,
    },
    releaseDate: Date,
    language:[{
        type: String,
        enum:['Tamil','English','Malayalam','Himdi','Kannada'],
        required: true,
    }]
  
})

const Movie = new model('movie',MovieSchema);

export default Movie;