import React, { useRef } from "react"
import PropTypes from 'prop-types';
import { LEVELS } from "../../models/levels";
import { Task } from "../../models/task.class";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function TaskForm({ add }) {
    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value

        );
        console.log('valor', newTask)
        add(newTask);
    }

    return (
        <div>
            <form onSubmit={addTask} className='justify-content-center align-items-center mb-4'>
                <div className="form-outline ">
                    <input ref={nameRef} id='inputName' type="text" placeholder="Nombre" className="form-control form-control-lg" required autoF />
                    <input ref={descriptionRef} id='inputDescription' type="text" placeholder="Descripción" className="form-control form-control-lg" required autoFocus />
                    <label htmlFor="selectLevel" className="sr-only">Nivel de Prioridad</label>
                    <select className="form-control form-control-lg" ref={levelRef} defaultValue={LEVELS.NORMAL} id="selectLevel">
                        <option value={LEVELS.NORMAL}>Normal</option>
                        <option value={LEVELS.URGENT}>Urgente</option>
                        <option value={LEVELS.BLOCKING}>Bloqueante</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-success btn-lg ms-2">Crear Tarea</button>
            </form> 
        </div>
    )
}

TaskForm.propTypes = {
    addTask: PropTypes.func.isRequired
}


export default TaskForm;


 

            {/*<Formik
                initialValues={{
                    nameRef, descriptionRef, levelRef
                }}
                validationSchema={taskSchema}
                onSubmit={addTask}
            >
                {({
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit
                }) => (
                    <Form onSubmit={addTask} className='justify-content-center align-items-center mb-4'>
                        <label htmlFor="name">Nombre de la Tarea</label>
                        <Field  id='inputName' name="name" type="text" placeholder="Your Task Name" autoFocus />
                        {errors.name && touched.name &&
                            (<ErrorMessage component="div" name="name"></ErrorMessage>)}

                        <label htmlFor="description">Descripcion</label>
                        <Field id='inputDescription' name="description" type="text" placeholder="Your Task Description" autoFocus />
                        {errors.description && touched.description &&
                            (<ErrorMessage component="div" name="description"></ErrorMessage>)}

                        <select ref={levelRef} className="form-control form-control-lg" defaultValue={LEVELS.NORMAL} id="selectLevel">
                            <option value={LEVELS.NORMAL}>Normal</option>
                            <option value={LEVELS.URGENT}>Urgente</option>
                            <option value={LEVELS.BLOCKING}>Bloqueante</option>
                        </select>
                        <button type="submit">Crear Tarea</button>
                    </Form>

                )}
            </Formik>
*/}