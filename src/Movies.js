import React, {useEffect, useState} from 'react';
import axios from "axios";

const Movies = () => {

    const [movies, setMovies] = useState([])


    //무비정보를 가져오는 상태 선언
    const getMovies = async () => {
        try {
            const options = {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGE3NTdhMWVlYzIzYjZiMjNhNmMzMzQwYjdmNjgyNCIsInN1YiI6IjY0YjM3NzEwMGU0ZmM4MDBjNjgzYzg4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Aknbgw7OXsHEm-k7z_Ia6Y_YDKYlCBHIu7eYOGIhWu0'
                }
            };


            const result = await axios.get("https://api.themoviedb.org/3/movie/now_playing", options)
            console.log("+++++++++++++++++++", result.data.results)
            setMovies(result.data.results)
        } catch (err){
            console.log(err.message)
        }
    }

    //앱이 실행될 때 무조건 실행되는 함수(hook)
    useEffect(() => {
        getMovies()
    }, [])

    return (
        <div>
            <h1>API 가져오기</h1>
            <h1>{movies.length}</h1>
            {movies && movies.map(movie => (
                <div>
                    <h1>{movie.title}</h1>
                    <h3>{movie.overview}</h3>
                    <h2>{movie.release_date}</h2>
                </div>
            ))}
            {/*<button onClick={() => getMovies()}>버튼</button>*/}
        </div>
    );
};

export default Movies;