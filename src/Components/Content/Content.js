import './Content.css'
import Movies from '../Movies/Movies'
import Sessoes from '../Sessoes/sessoes';
import Assentos from '../Assentos/Assentos';
import Sucesso from '../Sucesso/Sucesso';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

export default function Content({ data }) {
    const [envio,setenvio] = useState([])
    return (

        <BrowserRouter>
            
            <Routes>
                <Route path='/' element={<Movies data={data} />} />
                <Route path="/sessoes/:IDmovies" element={ <Sessoes />} />
                <Route path="/assentos/:IDassentos" element={ <Assentos envio={envio} setenvio={setenvio}/>} />
                <Route path="/sucesso" element={ <Sucesso envio={envio} setenvio={setenvio}/>} />

            </Routes>

        </BrowserRouter>

    )
}