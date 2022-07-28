import './Sessoes.css'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Tittle from '../Tittle/Tittle'
import { Link } from "react-router-dom"


export default function Sessoes() {
  
    const params = useParams();
    const [pullsession, setpullsession] = useState([]);
    const [renderiza, setrenderiza ] = useState([]);

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${params.IDmovies}/showtimes`);

        request.then((answer) => { setpullsession(pullsession[0] = (answer.data)); add() })
    },[]);

    

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

    console.log(pullsession.days)


    if (pullsession.length !== 0) {

    }





    return (

        pullsession.length === 0 ?
            <>
                <Tittle title={"Selecione o horário"} />
                "Carregando..."
            </>
            :
            <>
                <Tittle title={"Selecione o horário"} />
                {renderiza}
            </>






    )


}
