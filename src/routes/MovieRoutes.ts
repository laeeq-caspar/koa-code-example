import { IRouterContext } from "koa-router";
import { Container, Inject } from "typescript-ioc";
import MovieController from "../controllers/MovieController";
import Route from "../models/Route";
import IRoutes from "./IRoutes";

export default class MovieRoutes extends IRoutes {

    constructor( @Inject private movieController: MovieController) {
        super();
    }

    protected getRoutes(): Route[] {
        return [
            Route.newRoute("/movies", "get", (ctx: IRouterContext) => this.movieController.getAllMovies(ctx)),
        ];
    }
}
