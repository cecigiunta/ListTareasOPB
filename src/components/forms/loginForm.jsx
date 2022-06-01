import React from "react"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape (
    {
        email: Yup.string()
            .email('Formato inválido')
            .required('Campo obligatorio'),
        password: Yup.string()
            .required('Campo obligatorio')
    }       
)

function LoginForm () {
const initialCredentials = {
    email : '',
    password : ''
}
return (
    <div>
        <h1>Ingresar</h1>
        <Formik     
            initialValues={{ initialCredentials }}
            validationSchema = {loginSchema} //Le añadimos las validaciones de arriba
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert('Ingreso exitoso');
                localStorage.setItem('credentials', values)
            }}
        >
            {/* Accedemos a las props de Formik para el manejo de errores    */}
            { props => {
                const {
                    values,  //valores del formulario
                    touched, //Si el usuario interactuo con alguno de los campos
                    errors, //errores dentro de campos o del mismo Form
                    isSubmitting, //Te dice si se envio el form
                    handleChange,
                    handleBlur,
                    handleSubmit
                } = props;
            return (
                <Form>
                <label htmlFor="email">Email</label>
                <Field className="inputForm" id="email" name="email" type="email" placeholder="youremail@email.com" />
                {
                    errors.email && touched.email &&
                    (
                        <ErrorMessage name="email"></ErrorMessage>
                    )
                }
                <label htmlFor="password">Password</label>
                <Field className="inputForm" id="password" name="password" type="password" placeholder="********" />
                {
                    errors.password && touched.password &&
                    (
                        <ErrorMessage name="password" component='input'></ErrorMessage>
                    )
                }
                <button type="submit">Login</button>
                </Form>
            )    
            }}
        </Formik>
        </div>
    )
}
export default LoginForm