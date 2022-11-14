import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

import '../useEffect/effects.css';

export const MultipleCustomHooks = () => {

    const {counter, increment, decrement, reset} = useCounter(1);
    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {loading, payload} = state;
    const {author, quote} = !!payload && payload[0]

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr/>
            {/*aca utilizo operador ternario, si loading es true muestro el loading, caso contrario muestor lo que quiero mostrar
            que seria la frase de bb*/ }
            { loading ? (
                <div className='alert alert-info text-center'>
                    Cargando...
                </div>
                ):
                <blockquote className='blockquote text-right'>
                    <p className='mb-0'>{quote}</p>
                    <footer className='blockquote-footer'> {author} </footer>
                </blockquote>
            }
            <button className='btn btn-primary' onClick={increment}>
                Siguiente frase
            </button>
            { counter > 1 && <button className='btn btn-primary' onClick={decrement}>
                Anterior frase
            </button>}
        </div>
    )
}
