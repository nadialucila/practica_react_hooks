import React, { Fragment } from 'react'
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter();

  return (
    <Fragment>
        <h1>Counter con custom hook {state}</h1>
        <hr/>
        <button onClick={ () => increment(9)} className='btn btn-primary'> +1 </button>
        <button onClick={ reset } className='btn btn-primary'> Reset </button>
        <button onClick={ () => decrement(9)} className='btn btn-primary'> -1 </button>
    </Fragment>
  )
}
