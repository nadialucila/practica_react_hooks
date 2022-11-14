import React, { useMemo, useState } from 'react'
import {useCounter} from '../../hooks/useCounter.js';
import '../useEffect/effects.css';

export const MemoHook = () => {

    const {counter, increment} = useCounter(100);
    const [show, setShow] = useState(false);

    const procesoPesado = (iteraciones) => {
        for(let i=0; i< iteraciones; i++){
            console.log("Iteración");
        }
        return "Realizado.";
    }

    //si mi counter no cambia, la funcion va a memorizar el resultado que dio, si cambia el counter si se ejecuta

    const memoProcesoPesado = useMemo(()=> procesoPesado(counter), [counter]);

  return (
    <div>
        <h1> MemoHook </h1>
        <h2> Counter: {counter}</h2>
        <hr/>
        <p>{memoProcesoPesado}</p>
        <button
            className='btn btn-primary'
            onClick={ increment }
            > +1 </button>
        <button
            className='btn btn-primary mx-3'
            onClick={ ()=>setShow(!show) }
            >
            Toggle view {JSON.stringify(show)}
        </button>
    </div>
  )
}
