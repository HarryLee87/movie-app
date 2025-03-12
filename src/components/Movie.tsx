import { MovieProps } from "../entities/movie";

interface MovieListProps {
    data: MovieProps[]
}

export default function Movie({ data }: MovieListProps) {
    return (
        <div>
            {data.map((movie) => (
                <div key={movie.id}>
                    <img src={movie.medium_cover_image} />
                    <h2>{movie.title}</h2>
                    <p>{movie.summary}</p>
                    <ul>
                        {movie.genres.map((g: string) => (
                            <li key={g}>{g}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}