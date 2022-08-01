import './Header.css'
import voltar from '../../Img/voltar.png'
import { Link } from "react-router-dom";
import { useState , useEffect } from 'react';

export default function Header({ pagina }) {
 const [ren,setren] = useState(pagina)
 useEffect(() => {
    setren(pagina)
 
}, [pagina]);
    
    return (
      <div className='Header'>  <Link to={ren[0]}><img alt='' src={voltar} /> </Link> CINEFLIX</div> 

    )

}