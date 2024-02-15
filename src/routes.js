import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Movie from './pages/Movie';
import Header from './components/Header';
import Error from './components/Error';
import Favoritos from './pages/Favoritos';

function RoutesApp() {

    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/filme/:id" element={ <Movie/> }/>
                <Route path="/favoritos" element={ <Favoritos/>}/>

                <Route path="*" element={ <Error/> }/>
            </Routes>
        </BrowserRouter>

    )
}

export default RoutesApp;