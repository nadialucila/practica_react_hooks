import React, { useState } from 'react'
import { MultipleCustomHooks } from '../ejemplos/MultipleCustomHooks';
import '../useEffect/effects.css';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

  return (
    <div>
        <h1>Real Example Ref</h1>
        <hr/>

        {show && <MultipleCustomHooks />}

        <button className='btn btn-primary mt-3' onClick={ () => setShow(!show) }> Toggle component </button>
    </div>
  )
}
