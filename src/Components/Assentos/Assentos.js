import './Assentos.css'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Tittle from '../Tittle/Tittle'
import MovieSelected from '../MovieSelected/MovieSelected';
import { useNavigate } from "react-router-dom";

export default function Assentos() {
    const params = useParams();
    const [pullassents, setpullassents] = useState([]);
    const [renderiza, setrenderiza] = useState([]);
    const [cpf, setcpf] = useState("");
    const [nome, setnome] = useState("");
    const [Ids, setIds] = useState([]);
    console.log(nome, cpf);
    

    function Enviar (){
        let envia = {ids:Ids,name:nome, cpf:cpf};
        console.log(envia);
     
            const send = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",envia);
            
           
            send.then((ref)=>console.log(ref));
            send.catch((ref)=>console.log(ref));
      
        console.log(envia)
    }


    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.IDassentos}/seats`);

        request.then((answer) => { setpullassents(pullassents[0] = (answer.data)); add() })
    }, []);

    function Modifica(refe) {
        console.log(refe.target)
        if (Ids.indexOf(pullassents[0].seats[(refe.target.innerHTML - 1)].id) !== -1) {
            let myindex = Ids.indexOf(pullassents[0].seats[(refe.target.innerHTML - 1)].id);
            Ids.splice(myindex, 1);
            refe.target.parentNode.classList.add("Disponivel");
            refe.target.parentNode.classList.remove("selecionado");


        } else {
            Ids.push((pullassents[0].seats[(refe.target.innerHTML - 1)].id));
            refe.target.parentNode.classList.add("selecionado");
            refe.target.parentNode.classList.remove("Disponivel");
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
                        <input type="text" value={nome} className='comprador' onChange={e => setnome(e.target.value)} placeholder='Digite seu nome...' ></input>

                        <label>CPF do comprador:</label>
                        <input type="number" value={cpf} className='comprador' onChange={e => setcpf(e.target.value)} placeholder='Digite seu CPF...' ></input>

                    </form>
                    <button onClick={Enviar} className='buttonReserva'>Reservar assento(s)</button>


                </div>

                <MovieSelected title={pullassents.movie.title} img={pullassents.movie.posterURL} horario={pullassents.name} dia={pullassents.day.weekday + "  -"} />
            </>
    )

}
