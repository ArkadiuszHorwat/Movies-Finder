import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = vote => {
    if(vote >= 8)
    {
        return 'gold';
    }else if(vote < 8 && vote >= 5)
    {
        return 'silver';
    }else
    {
        return 'bronze';
    }
}

const Movie = ({ title, poster_path, overview, vote_average }) => (
    <div className="movie">
        <img src={ IMG_API + poster_path} alt={title} />
        <div className="movie-info">
            <h4>{title}</h4>
            <span className={`vote ${setVoteClass(vote_average)}`}>{vote_average}</span>
        </div>
        <div className="movie-overview">
            <h4>Overview:</h4>
            <p>{overview}</p>
        </div>
    </div>
)

export default Movie;