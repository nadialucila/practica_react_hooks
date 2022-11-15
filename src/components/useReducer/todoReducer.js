export const todoReducer = ( state=[], action ) => {

    switch (action.type) {
        case 'add':
            return [
                ...state,
                action.payload //se suele retornar el estado anterior desestrucutrado y el nuevo payload, al menos en el caso de agregar
            ];

        case 'delete':
            return state.filter( todo => todo.id !== action.payload ); //hacemos un filtro exceptuando el todo que tenga el id que pase por payload

        case 'update':
            return state.map( todo =>
                ( todo.id === action.payload) ?
                {...todo, done: !todo.done} : todo)

        default:
            return state; //por default devolvemos el estado tal cual se recibe
    }
}