import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MovieProps } from "../entities/movie"

function Detail() {
    const { id } = useParams<{ id: string }>()
    const movie_detail_url = process.env.REACT_APP_MOVIE_DETAIL_URL
    const [loading, setLoading] = useState<boolean>(true)
    const [movie, setMovie] = useState<MovieProps>()

    const getMovieDetail = async () => {
        try {
            const response = await fetch(`${movie_detail_url}${id}`)
            if (!response.ok) {
                throw new Error(`Failed to fetch movie detil!, Status: ${response.status}`)
            }

            const json = await response.json()
            setMovie(json.data.movie)
            setLoading(false)
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        }
    }

    useEffect(() => {
        getMovieDetail()
    }, [])

    if (!movie) return <strong>No Data</strong>
    return (
        <div>
            {loading ? <strong>Loading...</strong> : (
                <div>
                    <h2>{movie.title}</h2>
                    <div>
                        <img src={movie.large_cover_image} alt={movie.title} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Detail