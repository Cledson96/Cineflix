import './Sucesso.css'
import Tittle from '../Tittle/Tittle'
import { Link } from "react-router-dom"
import axios from 'axios';

export default function Sucesso({envio}) {

    const send = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", envio);
    send.then((ref) => console.log(ref,"deu boa"));
    send.catch((ref) => console.log(ref));



    console.log(envio)
    return (
        <>
            <Tittle sucesso={"Pedido feito com sucesso!"} />
        </>
    )
}