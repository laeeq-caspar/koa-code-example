import { IRouterContext } from "koa-router";
import { Container, Inject, Singleton } from "typescript-ioc";
import Movie from "../models/Movie";
import MovieService from "../services/MovieService";

@Singleton
export default class MovieController {

    constructor( @Inject private movieService: MovieService) { }

    public async getAllMovies(ctx: IRouterContext) {
        console.log('Here ====>');
        ctx.body = [];
        ctx.body = await this.movieService.findAll();
    }
}
