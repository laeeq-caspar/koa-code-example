import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Movie {

    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private title: string;

    @Column()
    private releaseYear: number;

    public static newMovie(obj: { id?: number, title?: string, releaseYear?: number }): Movie {
        const movie = new Movie();
        if (obj.id) movie.id = obj.id;
        if (obj.title) movie.title = obj.title;
        if (obj.releaseYear) movie.releaseYear = obj.releaseYear;
        return movie;
    }

    public get $id(): number {
        return this.id;
    }

    public set $id(id: number) {
        this.id = id;
    }

    public get $title(): string {
        return this.title;
    }

    public set $title(value: string) {
        this.title = value;
    }

    public get $releaseYear(): number {
        return this.releaseYear;
    }

    public set $releaseYear(value: number) {
        this.releaseYear = value;
    }
}
