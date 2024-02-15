import { useEffect, useState } from 'react';
import './favoritos.css';
import { Link } from 'react-router-dom';

function Favoritos(){

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        const minhaLista = localStorage.getItem("@movies");
        setMovies(JSON.parse(minhaLista) || []);
        
    }, [])

    function excluir(id){
        let filtroFilmes = movies.filter((f)=>{
            return (f.id !== id)
        })

        setMovies(filtroFilmes);

        localStorage.setItem("@movies", JSON.stringify(filtroFilmes));
    }

    return(
        <div className="meus-filmes">
            <h1> Meus Filmes </h1>

            {movies.length === 0 && <span>Sem filmes salvos!</span>}

                <ul>
                    {movies.map((f) => {
                        return (
                            <li key={f.id}>
                                <span>{f.title}</span>
                                <div>
                                    <Link to={`/filme/${f.id}`}>Ver detalhes</Link>
                                    <button onClick={() => excluir(f.id)}>Excluir</button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
        </div>
    )
}

export default Favoritos;