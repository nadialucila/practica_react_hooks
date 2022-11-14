import React, { useState } from 'react'
import '../useEffect/effects.css';
import {useCounter} from '../../hooks/useCounter.js';
import { Small } from './Small';

export const Memorize = () => {

    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(false);

  return (
    <div>
        <h1> Memorize </h1>
        <h2> Counter: <Small value={counter}/></h2>
        <hr/>
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
