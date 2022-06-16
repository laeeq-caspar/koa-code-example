import { getEntityManager } from "typeorm";
import Movie from "../models/Movie";

export default abstract class IRepository {
    protected getMovieRepository() {
        return getEntityManager().getRepository(Movie);
    }

}
