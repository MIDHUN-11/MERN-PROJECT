import Movie from "../models/movie.model";

export const createMovie=async (request,response)=>{
    const movieData = request.body;
    try{
        const data = await Movie.creeate(movieData);
        response.status(200).send(data);
    }
    catch(e){
        response.status(500).send(e.message);
    }
}
export const getMovies=async (request,response)=>{
    try{
        const data = await Movie.find();
        response.status(200).send(data);
    }
    catch(e){
        response.status(500).send(e.message);
    }

}