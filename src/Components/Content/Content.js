import './Content.css'
import Movies from '../Movies/Movies'
import Header from "../Header/Header"
import Sessoes from '../Sessoes/sessoes';
import Assentos from '../Assentos/Assentos';
import Sucesso from '../Sucesso/Sucesso';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

export default function Content({ data }) {
    const [pullassents, setpullassents] = useState([]);
    const [envio, setenvio] = useState([]);
    const [selecionados, setselecionados] = useState([]);
    const [pagina, setpagina] = useState(["/"]);

    return (
        <>
            <BrowserRouter>
                <Header pagina={pagina} />
                <Routes>

                    <Route path='/' element={<Movies data={data} />} />
                    <Route path="/sessoes/:IDmovies" element={<Sessoes setselecionados={setselecionados} setpagina={setpagina} />} />
                    <Route path="/assentos/:IDassentos" element={<Assentos setpagina={setpagina} pullassents={pullassents} setpullassents={setpullassents} selecionados={selecionados} setselecionados={setselecionados} envio={envio} setenvio={setenvio} />} />
                    <Route path="/sucesso" pagina={pagina} element={<Sucesso pullassents={pullassents} setpullassents={setpullassents} setselecionados={setselecionados} selecionados={selecionados} envio={envio} setenvio={setenvio} />} />
                </Routes>

            </BrowserRouter>
        </>
    )
}