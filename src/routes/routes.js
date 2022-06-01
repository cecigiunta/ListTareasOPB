import React from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from "../pages/home";
import NotFound from "../pages/404";
import TaskListComponent from "../components/containers/taskList"
import Menu from "../components/pure/menu"; 
import Registro from "../components/forms/registerForm";
import Login from "../components/forms/loginForm";

function Routing() {
    return (
        <Router>
            <Menu/>
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/tareas' element={ <TaskListComponent/> } />
                <Route path='/ingreso' element={ <Login/> } />
                <Route path='/registrarse' element={ <Registro/> } />






                <Route path="*" element={<NotFound/>} />  {/*Buena práctica: Dejar el NOTFOUND siempre al final*/}
            </Routes>



        </Router>



    );
}

export default Routing;