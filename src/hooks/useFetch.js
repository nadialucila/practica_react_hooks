import { useEffect, useState } from "react"

export const useFetch = ( url ) => {
    const [state, setState] = useState({
        payload: null,
        loading: true,
        error: null
    });

    useEffect( () => {
        fetch(url) //le pego a la api
        .then( r => r.json()) //espero la respuesta y la paso a json
        .then( d => {
            //espero el json y lo seteo en el state del usestate
            setState({
                loading: false,
                payload: d,
                error: false
            })
        });
    }, [url]); //pasa cuando cambia el url nomas

    return state;
}
