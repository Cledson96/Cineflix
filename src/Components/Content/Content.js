import './Content.css'
import Movies from '../Movies/Movies'
import Sessoes from '../Sessoes/sessoes';
import Assentos from '../Assentos/Assentos';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Content({ data }) {
    return (

        <BrowserRouter>
            
            <Routes>
                <Route path='/' element={<Movies data={data} />} />
                <Route path="/sessoes/:IDmovies" element={ <Sessoes />} />
                <Route path="/assentos/:IDassentos" element={ <Assentos />} />

            </Routes>

        </BrowserRouter>

    )
}