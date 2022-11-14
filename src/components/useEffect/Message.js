// import { cleanup } from '@testing-library/react'
import React, { Fragment, useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
      console.log("Componente montado");

      return () => {
        console.log("Componente desmontado");
      }
    }, [])

    return (
        <Fragment>
            <h3> Hola !</h3>
        </Fragment>
    )
}
