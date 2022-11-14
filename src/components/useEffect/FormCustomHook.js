import React, { Fragment } from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormCustomHook = () => {

    //por defecto le envio a mi custom hook un objeto con 3 attr vacios
    //del otro lado se setea con un obj completamente vacio como initial state
    const [values, setValues] = useForm({
        name: '',
        email: '',
        pass: ''
    });

    const {name, email, pass} = values; //desestructuramos cada attr del objeto para manejarlo de forma mas comoda

    return (
        <Fragment>
            <h1> Form Custom Hook </h1>
            <hr/>
            <div className='form-group'>
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Nombre'
                    autoComplete='off'
                    value={ name }
                    onChange={ setValues } //en el onchange solo le paso la referencia a la funcion que tengo en mi customhook, que va a escuchar
                    //el target (la etiqueta html) y va a recuperar el name y el valor.
                />
            </div>
            <div className='form-group'>
                <input
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='Email'
                    autoComplete='off'
                    value={ email }
                    onChange={ setValues }
                />
            </div>
            <div className='form-group'>
                <input
                    type='password'
                    name='pass'
                    className='form-control'
                    placeholder='contraseña'
                    value={ pass }
                    onChange={ setValues }
                />
            </div>
        </Fragment>
    );
}