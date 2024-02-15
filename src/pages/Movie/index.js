import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import './movie.css'

import api from '../../services/api';

function Movie(){
    const navigate = useNavigate();

    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        async function loadMovie(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: "28fc232cc001c31e8a031f419d0a14ca",
                    language: "pt-BR",
                }
            })
            .then((response)=>{
                setMovie(response.data);
                setLoading(false);
            })
            .catch(()=>{
                navigate("/", { replace: true})
                return;
            })
        }

        loadMovie();

        return () => {

        }
    }, [navigate, id])

    function saveMovie(){
        const minhaLista = localStorage.getItem("@movies");

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((f)=> f.id === movie.id)

        if(hasFilme){
            alert("Filme repetido");
            return;
        }

        filmesSalvos.push(movie);
        localStorage.setItem("@movies", JSON.stringify(filmesSalvos));
        alert("Filme salvo com sucesso!");
    }

    if(loading){
        return(
            <div className="filme-info">
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }
    return(
        <div className="filme-info">
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title}></img>

            <h3>Sinopse</h3>
            <span>{movie.overview}</span>
            <strong> Avaliação: {movie.vote_average} / 10</strong>

            <div className="area-buttons">
                <button onClick={saveMovie}>Salvar</button>
                <button>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${movie.title} Trailer`}>
                        Trailer
                    </a>
                </button>

            </div>
            
        </div>
    )
}

export default Movie;