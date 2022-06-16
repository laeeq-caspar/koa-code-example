import { Singleton } from "typescript-ioc";
import BadRequestEntity from "../exceptions/BadRequestEntity";
import EntityNotFoundError from "../exceptions/EntityNotFoundError";
import Movie from "../models/Movie";
import IRepository from "./IRepository";

@Singleton
export default class MovieRepository extends IRepository {

    public async getAllMovies(): Promise<Movie[]> {
        // Repository will connect to the database to get the movies from here
        const movie1 = Movie.newMovie({
            id: 1,
            title: 'John Wick',
            releaseYear: 2015
        })

        const movie2 = Movie.newMovie({
            id: 1,
            title: 'Interstellar',
            releaseYear: 2018
        })

        return [movie1, movie2]
    }

}
