import { Inject, Singleton } from "typescript-ioc";
import BadRequestEntity from "../exceptions/BadRequestEntity";
import EntityNotFoundError from "../exceptions/EntityNotFoundError";
import Movie from "../models/Movie";
import MovieRepository from "../repositories/MovieRepository";

@Singleton
export default class MovieService {

    constructor( @Inject private movieRepository: MovieRepository) { }
    public async findAll(): Promise<Movie[]> {
        return this.movieRepository.getAllMovies();
    }
}
