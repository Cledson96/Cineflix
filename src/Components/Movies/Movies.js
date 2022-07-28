import './Movies.css'
import Tittle from '../Tittle/Tittle'
import { Link } from "react-router-dom"

export default function Movies({ data }) {
    console.log(data)

    return (
        <>
            <Tittle title={"Selecione o filme"}  />
            <ul >
                {data.map((ref, index) => { return <li><Link key={index} to={`/sessoes/${ref.id}`} ><img alt={ref.title} src={ref.posterURL} /> </Link></li> })}
            </ul>
        </>

    )
}


