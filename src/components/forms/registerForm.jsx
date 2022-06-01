import React from "react"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { User } from '../../models/user.class'
import { ROLES } from "../../models/roles";

function Registro() {
let user = new User();

const initialValues = {
    username: '',
    email: '',
    password: '',
    confirm: '', //La confirmacion de la contraseña, deben coincidir
    role: ROLES.USER
}

const registerSchema = Yup.object().shape (
    {
        username: Yup.string()
                        .required('Campo obligatorio')
                        .min(6, 'el campo debe tener al menos 6 caracteres')
                        .max(15, 'el campo no debe tener más de 15 caracteres'),
        email: Yup.string()
                        .email('Formato inválido')
                        .required('Campo obligatorio'),
        password: Yup.string()
                        .required('Campo obligatorio')
                        .min(8, 'la contraseña debe tener al menos 8 caracteres'),
        confirm: Yup.string()
                        .when(
                            "password", {
                                is: value => (value && value.length > 0 ? true : false),
                                then: Yup.string().oneOf(
                                    [ Yup.ref("password") ],
                                    'Las contraseñas deben coincidir'  //Mensaje de error
                                )
                            })
                        .required('Campo obligatorio'),

        role: Yup.string()
                    .oneOf([ROLES.USER, ROLES.ADMIN], 'Debe elegir un rol')
                    .required('obligatorio')
    }
)

function submit (values) {
    alert('register user')
}

    return(
        <div>
            <h1>Registrá tu cuenta</h1>
            
            <Formik     
            initialValues={{ initialValues }}
            validationSchema = {registerSchema} //Le añadimos las validaciones de arriba
            onSubmit={submit}
            >
            {/* Accedemos a las props de Formik para el manejo de errores    */}
            {({
                values,  
                touched, 
                errors, 
                isSubmitting, 
                handleChange,
                handleBlur,
                handleSubmit 
            }) => (
                <Form>
                    <label htmlFor="username">Username</label>
                    <Field className="inputForm" id="username" name="username" type="text" placeholder="username" />
                        { errors.username && touched.username &&
                        ( <ErrorMessage name="username"></ErrorMessage>)}

                    <label htmlFor="email">Email</label>
                    <Field className="inputForm" id="email" name="email" type="email" placeholder="youremail@email.com" />
                        {errors.email && touched.email &&
                        (<ErrorMessage name="email"></ErrorMessage>)}

                    <label htmlFor="password">Password</label>
                    <Field className="inputForm" id="password" name="password" type="password" placeholder="********" />
                        {errors.password && touched.password &&
                        (<ErrorMessage name="password" component='div'></ErrorMessage>)}

                    <label htmlFor="confirm">Confirm Password</label>
                    <Field className="inputForm" id="confirm" name="confirm" type="password" />
                        {errors.confirm && touched.confirm &&
                        (<ErrorMessage name="confirm" component='div'></ErrorMessage>)}

                    <button type="submit">Registrarse</button>
                </Form>
            )  
            }
            </Formik>
        </div>
    )

}

export default Registro;