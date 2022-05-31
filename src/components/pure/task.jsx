import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class'
import '../../styles/task.scss'
import { LEVELS } from "../../models/levels";

function TaskComponent({ task, complete, deleteTasks, add }) { //Le pasamos por props las funciones que vamos haciendo en TaskList(padre)
    useEffect(() => {
        console.log('Tarea creada')
        return () => {
            console.log('La tarea va a desaparecer')
        }
    })

    //Retorna un Badge dependiendo el nivel dela tarea
    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (
                    <h6 className="mb-0">
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>
                )
            case LEVELS.URGENT:
                return (
                    <h6 className="mb-0">
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>
                )
            case LEVELS.BLOCKING:
                return (
                    <h6 className="mb-0">
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                    </h6>
                )
            default:
                break;
        } //No hace nada
    }

    //Funcion que devuelve un icono u otro dependiendo si la tarea está completa
    function iconCompleted() {
        if (task.completed) {
            return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{ color: 'green' }}></i>)
        } else {
            return (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{ color: 'grey' }}></i>)
        }
    }

    return (
        <div>
            <table>
            <tbody>
            <tr>
                <td>{task.name}</td>
                <td>{task.description}</td>
                <td>{taskLevelBadge()} {/*EJECUTAMOS LA FUNCION DEL SWITCH*/}</td>
                <td>
                {iconCompleted()}
                    <i onClick={() => deleteTasks(task)} 
                                    className='bi-trash task-action' 
                                    style={{ color: 'tomato', fontSize: '20px' }}>
                    </i>
                </td>
                <td className={task.completed ? "task-completed" : "task-pending"}></td>
            </tr>
        </tbody>
        </table>
        </div>
    )
}
TaskComponent.propTypes = {
    // task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired
};

export default TaskComponent;