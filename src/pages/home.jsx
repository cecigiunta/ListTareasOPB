import React from "react"
import {BrowserRouter as Router, Route, Link, Routes, useNavigate}  from 'react-router-dom';

function Home() {
// ! BUSCAR FUNCION PARA LOS BOTONES DEL NAVIGATE
// const history = usehistory();
// const navigateTo = (path) =>{
//     history.push(path)
// }
// button on click (navigateto('/'))


    return(
        <div>
            <h1>Home page</h1>
            <button>Ingresar a mi cuenta</button>
            <button>Registrarse</button>
        </div>
    )
}
export default Home;