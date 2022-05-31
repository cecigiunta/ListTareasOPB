import { LEVELS } from '../../models/levels';
import {Task} from '../../models/task.class'
import TaskComponent from '../../components/pure/task';
import React, { useState, useEffect } from 'react';
import TaskForm from '../pure/forms/taskForm';

function TaskList () {
const defaultTask = new Task ('Example', 'Description', false, LEVELS.NORMAL); //Valores por Default
const defaultTask1 = new Task ('Example1', 'Description', true, LEVELS.URGENT);
const defaultTask2 = new Task ('Example2', 'Description', true, LEVELS.BLOCKING);
const[tasks, setTasks] = useState([defaultTask, defaultTask1, defaultTask2]);
const[loading, setLoading] = useState(true);

//Control del ciclo de vida del Componente
  useEffect(() => {
    console.log('Modificacion de tareas');
    setLoading(false);
    return () => {
      console.log('El componente va a desaparecer(Unmount)')
    }
  }, [tasks])


//Creamos una var temporal y le asignamos todas las tareas q tenemos hasta el momento, usando el spread nos las traemos
function addTask(task) {
  const tempTask = [...tasks] 
  tempTask.push(task);
  setTasks(tempTask)
}

function completeTask(task) {
  console.log('Complete this task:', task);
  const index = tasks.indexOf(task) //Buscamos el indice de la tarea
  const tempTask = [...tasks] 
  tempTask[index].completed = !tempTask[index].completed //A tempTask en el indice index le pasamos el estado inverso (si es true, false)
  setTasks(tempTask);
}

function deleteTask (task) {
  const index = tasks.indexOf(task) 
  const tempTask = [...tasks] 
  tempTask.splice(index, 1)
  setTasks(tempTask)
}

//Vamos a renderizar o no la tabla según el numero de tareas: 
//Si no hay tareas (0), mostramos un texto
const Table = () => {
  return (
    <div>
    <table>
      <thead>
                    <th>Tarea</th>
                    <th>Descripcion</th>
                    <th>Prioridad</th>
                    <th>Accion</th>
                </thead>
    </table>
    <table>
    {tasks.map(((task, index) => {
          return ( //Va a retornar tantas veces como tareas halla
            <TaskComponent key={index}  //Le pasamos la key para que identifique cada elemento y sepa si alguno sufrio cambios
                            task={task}   //Le pasamos por props las funciones que vamos haciendo
                            complete={completeTask}
                            deleteTasks={deleteTask}>
            </TaskComponent>
          )}))}
    </table>
    </div>
  )
}

let tasksTable;
if(tasks.length > 0) {
  tasksTable = <Table></Table>
} else {
  tasksTable = (
    <div className='noTasksDiv'>
        <h3>No tienes ninguna tarea </h3>
    </div>
  )
  
}

  return (
    <div className='col-12'>
      <div className='card'>
        <div>
            <h5>Tus tareas:</h5>
        </div>
        <div>
        {tasksTable}
      <TaskForm add={addTask}></TaskForm>
      </div>        
    </div>
  </div>
  )
}
export default TaskList;