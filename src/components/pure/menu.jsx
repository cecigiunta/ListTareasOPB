import React from "react";
import { Link } from "react-router-dom";

function Menu() {
    
    return(
        <div>
            <ul className="navBar">
                <li><Link className="navList" to='/'> Home </Link></li>
                <li><Link className="navList"  to='/tareas'> Mis tareas </Link></li>
                <li><Link className="navList" to='/registrarse'> Registrarse </Link></li>
                <li><Link className="navList" to='/ingreso'> Ingresá </Link></li>
            </ul>
        </div>
    )
}

export default Menu;
