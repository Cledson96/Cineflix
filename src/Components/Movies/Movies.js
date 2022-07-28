import './Movies.css'
import Tittle from '../Tittle/Tittle'
import { Link } from "react-router-dom"

export default function Movies({ data }) {

    return (
        <>
            <Tittle title={"Selecione o filme"}  />
            <ul >
                {data.map((ref, index) => { return <Link key={index} to={`/sessoes/${ref.id}`} ><li><img alt={ref.title} src={ref.posterURL} /> </li> </Link>})}
            </ul>
        </>

    )
}


