import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

import "./Movie.css"

export  default  function Movie(props) {
    const {id,overview, backdrop_path, genre_ids, release_date, title, vote_average} = props.movie;

    const genreNamesMap = useSelector(state => state.genres.genreNamesMap);

    return (
        <div className="movie">
            <div className="title">{title}</div>
            <div className="element">

                <NavLink to={`/movies/${id}`}><img
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${backdrop_path}`} alt="backdrop"/>
                </NavLink>

                <div className="info">
                    <div className="genres">
                                                {genre_ids.map(id => <div key={id}>{genreNamesMap[id]}</div>)}
                        <div>vote average:{vote_average}</div>
                    </div>

                    <div className="overview">{overview}</div>
                    <div>release:{release_date}</div>
                </div>
            </div>
        </div>
    );
};

