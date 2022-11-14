import React, { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

// import '../useEffect/effects.css';
import './layout.css';

export const LayoutEffect = () => {

    const {counter, increment, decrement} = useCounter(1);
    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { payload} = state;
    const { quote} = !!payload && payload[0]

    const pTag = useRef();

    useLayoutEffect(()=>{
        console.log(pTag.current.getBoundingClientRect());
    },[quote])

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr/>

            <blockquote className='blockquote text-right'>
                <p 
                    className='mb-0'
                    ref={pTag}
                    >{quote}</p>
            </blockquote>
            <button className='btn btn-primary' onClick={increment}>
                Siguiente frase
            </button>
            { counter > 1 && <button className='btn btn-primary' onClick={decrement}>
                Anterior frase
            </button>}
        </div>
    )
}
