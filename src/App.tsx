import { useEffect, useState } from "react";

const movie_url = process.env.REACT_APP_MOVIE_URL;

function App() {
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
    } catch (error) {

    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div>
      {loading ? <strong>Loading...</strong> : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <div>
                {movie.title}
                <div>
                  <img src={movie.medium_cover_image}></img>
                </div>
                <span>Rating: {movie.rating}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
