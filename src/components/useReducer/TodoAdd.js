import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {
    //tremos el custom hook useForm para que maneje el cambio en el input
    //vamos a necesitar una description que es para la tarea, la funcion para manejar el input y un reset para que se borre el input despues
    const [{description}, handleInputChange, reset ] = useForm({
        description: ''               //le avisamos al form que va a tener un attr description
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length <= 1) return;

        handleAddTodo({
                id: new Date().getTime(),
                desc: description,             //la descripcion viene del input
                done: false
        });

        reset();
    }

  return (
    <React.Fragment>
        <h4> Agregar tarea: </h4>
        <hr/>
        <form onSubmit={ handleSubmit }>
            <input
                type='text'
                name='description'
                placeholder='Tengo que ...'
                value={description}
                autoComplete='off'
                className='form-control'
                onChange={ handleInputChange }
                />
            <button
                type='submit'
                className='btn btn-success mt-1 btn-block'
                >
                Agregar
            </button>
        </form>
    </React.Fragment>
  )
}
