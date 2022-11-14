import React from 'react'
import { useFetch } from '../../hooks/useFetch'

import '../useEffect/effects.css';

export const MultipleCustomHooks = () => {

    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);

    const {loading, payload, error} = state;
    const {author, quote} = !!payload && payload[0]

    console.log(payload);
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
        </div>
    )
}
