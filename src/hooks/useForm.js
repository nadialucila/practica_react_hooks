import { useState } from "react"

//recibimos un objeto inicial para manejar mis formularios
export const useForm = (initialState = {}) => {

    //con use state vamos a manejar el obj que le indicamos en el estado inicial, en este caso desde el otro lado trajimos una descripcion solamente
    //y set values va a setear esta descripcion
    const [values, setValues] = useState(initialState);

    //reset hace que se limpie el formulario
    const reset = () => {
        setValues(initialState);
    }
    
    //funcion para manejar el cambio en la etiqueta indicada, en este caso la de name 'description'
    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    }

    //retornamos las cosas que vamos a necesitar usar de aca
    return [ values, handleInputChange, reset];
}
