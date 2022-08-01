import './Sucesso.css'
import { Link } from "react-router-dom"
import axios from 'axios';
import { useState } from 'react';

export default function Sucesso(props) {
    const send = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", props.envio);

    const [resultado,setresultado] = useState(["reprovado"])
    send.then(() => setresultado(["aprovado"]));
    send.catch(() => setresultado(["reprovado"]));

    return (
        resultado[0] === "aprovado" ?
            <>

                <h1 className='pedido_sucesso'>
                    Pedido feito
                    com sucesso!
                </h1>
                <div className='Escolha'>
                    <h1 className='Titulo'>Filme e sessão</h1>
                    <div>
                        <h6 className='texto'>{props.pullassents.movie.title}</h6>
                        <h6 className='texto'>{props.pullassents.day.date} - {props.pullassents.name}</h6>
                    </div>
                </div>
                <br />
                <div className='Escolha'>
                    <h1 className='Titulo'>Comprador(es)</h1>

                    {props.envio.compradores.map((ref, index) => {

                        return (
                            <>
                                <div key={index} className='ticket'>
                                    <h6 className='texto' > Nome:{ref.nome} </h6>
                                    <h6 className='texto' > CPF:{ref.cpf} </h6>
                                    <h6 className='texto' > Assento:{props.selecionados[index].props.children[5]}</h6>
                                </div>
                            </>
                        )
                    })}

                </div>
                <Link to={"/"}><button onClick={() => props.setselecionados([])} className='buttonReserva' >Voltar pra Home</button></Link>
            </>
            :
            <>
                <h1 className='pedido_insucesso'>
                    Seu pedido não pode ser enviado!Tente novamente mais tarde!
                </h1>
                <div className='Escolha'>
                    <h1 className='Titulo'>Filme e sessão</h1>
                    <div>
                        <h6 className='texto'>{props.pullassents.movie.title}</h6>
                        <h6 className='texto'>{props.pullassents.day.date} - {props.pullassents.name}</h6>
                    </div>
                </div>
                <br />
                <div className='Escolha'>
                    <h1 className='Titulo'>Comprador(es)</h1>

                    {props.envio.compradores.map((ref, index) => {

                        return (
                            <>
                                <div key={index} className='ticket'>
                                    <h6 className='texto' > Nome:{ref.nome} </h6>
                                    <h6 className='texto' > CPF:{ref.cpf} </h6>
                                    <h6 className='texto' > Assento:{props.selecionados[index].props.children[5]}</h6>
                                </div>
                            </>
                        )
                    })}

                </div>
                <Link to={"/"}><button onClick={() => props.setselecionados([])} className='buttonReserva' >Voltar pra Home</button></Link>
            </>
    )
}