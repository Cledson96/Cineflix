import axios from 'axios';
import { useState, useEffect } from 'react';

import Scopo from "./Components/scopo/scopo"
import Header from "./Components/Header/Header"
import Content from "./Components/Content/Content"

export default function App() {
    const [pullmovies,setpullmovies] = useState([]);

    useEffect(()=>{
        const request = axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies');

        request.then(answer => {setpullmovies(answer.data)})
    },[]);
    console.log(pullmovies)

    return (
        <>

            <Scopo>
                <Header />
                <Content data = {pullmovies}/>
            </Scopo>
        </>

    )
}