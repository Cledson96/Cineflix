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
        console.log(pullsession[0].days)

        setrenderiza(renderiza[0] = pullsession[0].days.map((ref, index) => {
            let ren = ref.showtimes.map((refe,i) => {return  <Link key = {i} to={`/assentos/${refe.id}`} ><div className='sessions'>{refe.name}</div></Link>}) ; return (
                <div key = {index} className="caixa">
                    <div className="days" >{ref.weekday} - {ref.date}</div>
                    <div className='Hours'>{ren}</div>
                </div>

            )
        }))
        console.log(renderiza)

}
}