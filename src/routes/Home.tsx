import { useEffect, useState } from "react";
import Movie from "../components/Movie";


const movie_url = process.env.REACT_APP_MOVIE_URL;

function Home() {
  const [loading, setLoading] = useState<boolean>(true)
  const [movies, setMovies] = useState<any[]>([])

  const getMovies = async () => {
    try {
      const response = await fetch(movie_url!)
      if (!response.ok) {
        throw new Error(`Fetch Error! State: ${response.status}`)
      }

      const json = await response.json()
      console.log(json.data.movies)
      setMovies(json.data.movies)
      setLoading(false)
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div>
      {loading ? <strong>Loading...</strong> : (
        <Movie data={movies} />
      )}
    </div>
  );
}

export default Home;
