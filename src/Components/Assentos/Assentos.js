import './Assentos.css'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Tittle from '../Tittle/Tittle'
import { Link } from "react-router-dom"

export default function Assentos() {
    const params = useParams();
    const [pullassents, setpullassents] = useState([]);
    const [renderiza, setrenderiza] = useState([]);

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${params.IDassentos}/seats`);

        request.then((answer) => { setpullassents(pullassents[0] = (answer.data)); add() })
    }, []);

    function add() {
        console.log(pullassents[0])

        setrenderiza(renderiza[0] = pullassents[0].seats.map((ref, index) => {
            if (ref.isAvailable === false) {
                return (
                    <li className="Disponivel" key={index} >

                        <h2> {ref.name} </h2>

                    </li>
                )
            } else {
                return (
                    <li className="Indisponivel" key={index} >

                        <h2> {ref.name} </h2>

                    </li>
                )

            }
        }
        )
        )
    }
    console.log(renderiza)




    return (
        pullassents.length === 0 ?
            <>
                <Tittle title={"Selecione o(s) assento(s)"} />
                "Carregando..."
            </>
            :
            <>
                <Tittle title={"Selecione o(s) assento(s)"} />
                <ul className='ListaAssentos'>
                    {renderiza}
                </ul>
                <div className='Status'>
                    <div className='select' >
                        <div className='selecionado'></div>
                        <h3>Selecionado</h3>
                    </div>
                    <div className='select'>
                        <div className='Disponivel'></div>
                        <h3>Disponivel</h3>
                    </div>
                    <div className='select'>
                        <div className='Indisponivel'></div>
                        <h3>Indisponivel</h3>
                    </div>
                   
                   
                </div>
                <div className='Informacoescompra'>
                    <h4>Nome do comprador:</h4>
                    <input className='comprador' placeholder='Digite seu nome...'></input>
                    <h4>CPF do comprador:</h4>
                    <input className='comprador' placeholder='Digite seu CPF...'></input>
                </div>
                <button className='buttonReserva'>Reservar assento(s)</button>
            </>
    )

}
