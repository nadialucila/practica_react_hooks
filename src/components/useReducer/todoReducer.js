//este es el reducer, aca vamos a recibir un estado actual, una accion y va a devolver un nuevo estado dependiendo de como le afecte la accion
export const todoReducer = (state=[], action ) => {
    //se suele hacer un switch para elegir los types de la action
    switch (action.type) {
        case 'add':
            //se suele retornar el estado anterior desestrucutrado y el nuevo payload, al menos en el caso de agregar
            return [
                ...state,
                action.payload
            ]

        //por default devolvemos el estado tal cual se recibe
        default:
            return state;
    }
}