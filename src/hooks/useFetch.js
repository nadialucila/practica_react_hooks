import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {
    const isMounted = useRef(true);

    const [state, setState] = useState({
        payload: null,
        loading: true,
        error: null
    });

    useEffect(()=>{
        //cuandoe l componente se "desmonte" le digo a useRef que el componente no esta activo para prevenir que se use 
        //poniendole la condicion mas abajo en el codigo en el then 
        return()=>{
            isMounted.current=false;
        }
    },[])

    useEffect( () => {

        setState({payload: null, loading: true, error: null}); //antes del fetch rectifico que data es null y cargand true

        fetch(url) //le pego a la api
        .then( r => r.json()) //espero la respuesta y la paso a json
        .then( d => {
            if(isMounted.current){
                setState({
                    loading: false,
                    payload: d,
                    error: false
                })
            } else {
                console.log("Set state no se llamó porque el componente no esta renderizado.")
            }
            //espero el json y lo seteo en el state del usestate
        });
    }, [url]); //pasa cuando cambia el url nomas

    return state;
}
