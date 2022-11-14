import React, {Fragment} from 'react'

export const Small = React.memo(({value}) => {


    //encierro todo en la funcion memo y no se va a recargar si otro componente cambia

    console.log("Soy el small y cargué")

  return (
    <Fragment>
        <small>{ value }</small>
    </Fragment>
  )
})
