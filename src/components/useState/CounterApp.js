import React, { Fragment, useState } from 'react'
import './counter.css';

export const CounterApp = () => {

    // const [counter, setCounter] = useState(10);
    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 45,
        counter4: 55
    })

    const {counter1, counter2} = state;

    return (
        <Fragment>
            {/* <h1>Counter {counter}</h1> */}
            <h1>Counter 1 {counter1}</h1>
            <h1>Counter 2 {counter2}</h1>
            <hr/>

            <button className='btn btn-primary' onClick={ () => { 
                // setCounter(counter+1)
                setState({
                    //aca dejo todos los demas estados como estaban y solo cambio el que me interesa.
                    ...state,
                    counter1: counter1+1
                })
             }}>
                +1
            </button>
        </Fragment>
    )
}
