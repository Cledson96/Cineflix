import './Assentos.css';

import { Link } from "react-router-dom"
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Tittle from '../Tittle/Tittle'
import MovieSelected from '../MovieSelected/MovieSelected';


export default function Assentos({ envio, setenvio, setselecionados, selecionados }) {
    const params = useParams();
    const [pullassents, setpullassents] = useState([]);
    const [renderiza, setrenderiza] = useState([]);
    const [cpf, setcpf] = useState("");
    const [nome, setnome] = useState("");
    const [Ids, setIds] = useState([]);
    const [ID, setID] = useState([]);
    const [compradores, setcompradores] = useState([]);

    const [referencia, setreferencia] = useState([]);
    console.log(nome, cpf);
    console.log(selecionados)

    useEffect(() => {
        console.log(referencia);
    }, [referencia]);

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.IDassentos}/seats`);

        request.then((answer) => { setpullassents(pullassents[0] = (answer.data)); add() })
    }, []);


    function Modifica(refe) {

        console.log(Ids)
        console.log(selecionados)
        console.log(referencia)
        console.log(refe.target)
        if (Ids.indexOf(pullassents[0].seats[(refe.target.innerHTML - 1)].id) !== -1) {
            if (window.confirm("Tem certeza que deseja desmarcar o assento?")) {
                let myindex = Ids.indexOf(pullassents[0].seats[(refe.target.innerHTML - 1)].id);
                Ids.splice(myindex, 1);
                selecionados.splice(myindex, 1)
                compradores.splice(myindex,1)
                console.log(compradores)
                setnome("")
                setcpf("0")
                console.log(selecionados)
                console.log(Ids)
                refe.target.parentNode.classList.add("Disponivel");
                refe.target.parentNode.classList.remove("selecionado");
                referencia.shift();
                Reserva(refe)

            }

        } else {

            if (referencia.length === 1) {
                alert("Obrigatorio concluir a reserva de um assento para seleionar outro!!!")
            } else {
                Ids.push((pullassents[0].seats[(refe.target.innerHTML - 1)].id));
                ID.push(pullassents[0].seats[(refe.target.innerHTML - 1)].name);
                console.log(ID);
                console.log(selecionados)
                
                console.log(compradores)
                refe.target.parentNode.classList.add("selecionado");
                refe.target.parentNode.classList.remove("Disponivel");
                referencia.push(true)
                console.log(referencia)
                console.log(compradores)


            }

        }

    }
    function add() {


        console.log(pullassents[0])

        setrenderiza(renderiza[0] = pullassents[0].seats.map((ref, index) => {
            if (ref.isAvailable === false) {
                return (
                    <li className="Disponivel" key={index} >

                        <h2 onClick={Modifica}> {ref.name} </h2>

                    </li>
                )
            } else {
                return (
                    <li onClick={() => { alert("Esse assento não está disponível!!") }} className="Indisponivel" key={index} >

                        <h2> {ref.name} </h2>

                    </li>
                )

            }
        }
        )
        )
    }
    function Reserva(refe) {
        console.log(compradores)
        if (refe === "botao") {
            if (nome === "" || cpf === "") {
                alert("Obrigatório digitar nome e cpf!!!")
            } else if (referencia.length === 0) {

                alert("Obrigatório selecionar outro assento!")
            } else {
                console.log(Ids)
                referencia.shift();
                console.log(selecionados)
                let news = selecionados
                compradores.push({ idAssento: (Ids[Ids.length -1]), nome: (nome), cpf: (cpf) })
                news.push(<li> Nome:{nome} ,CPF: {cpf} ,Assento: {ID[ID.length - 1]}</li>)
                console.log(compradores)
                setselecionados(news)
                setnome("")
                setcpf("")
                console.log(Ids)
                console.log(selecionados)




            }

        } else {

            console.log(selecionados)
            console.log(refe.target.innerHTML)
        }





    }

    console.log(selecionados)
    return (
        pullassents.length === 0 ?
            <>
                <Tittle title={"Selecione o(s) assento(s)"} />
                "Carregando..."
            </>
            :
            <>
                <Tittle title={"Selecione o(s) assento(s)"} />
                <div className='content'>
                    <ul className='ListaAssentos'>
                        {renderiza.renderizar ? renderiza.renderizar : renderiza}
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
                    <form className='Informacoescompra'>

                        <label>Nome do comprador:</label>
                        <input type="text" value={nome} className='comprador' onChange={e => { setnome(e.target.value) }} placeholder='Digite seu nome...' ></input>

                        <label>CPF do comprador:</label>
                        <input type="number" value={cpf} className='comprador' onChange={e => { setcpf(e.target.value) }} placeholder='Digite seu CPF...' ></input>

                    </form>
                    <ul className='selecionadoss'>
                        {selecionados}
                    </ul>
                    <button className='reserva' onClick={() => Reserva("botao")}>Reservar assento(s)</button>
                    <Link to={"/sucesso"} > <button onClick={() => setenvio({ ids: Ids, compradores: compradores })} className='buttonReserva'>Concluir Venda</button></Link>

                </div>

                <MovieSelected title={pullassents.movie.title} img={pullassents.movie.posterURL} horario={pullassents.name} dia={pullassents.day.weekday + "  -"} />
            </>
    )

}

