//El estado inicial de mi to-do list, tengo un arreglo con un objeto to-do
const initialState = [{
    id:1,
    todo: 'comprar pan',
    done: false
}]

//creo el reducer, que va a recibir el estado de mi aplicacion de to-dos y una accion a realizar
const todoReducer = (state = initialState, action) => {
    //si el type de la action es 'add' entonces va a desestructurar el estado y concatenarle al final un nuevo objeto y lo retorna
    //entonces va a devolver un arreglo con 2 objetos
    if(action?.type === 'add'){
        return [
            ...state,
            action.payload
        ]
    }
    //despues de todas las acciones retorna el nuevo estado
    return state;
}

//todos va a representar a mi estado
let todos = todoReducer();

//nuevo objeto todo, este lo voy a querer agregar a la lista de to-dos
const newTodo = {
    id:2,
    todo: 'comprar mas pan',
    done: false
}

//aca creo mi action, que siempre van a tener un tipo y un payload. 
//en type se especifica que tipo de accion es, en este caso es 'add' de agregar
//y el payload va a ser el nuevo obj de tarea que cree anteriormente
const action = {
    type: 'add',
    payload: newTodo
}

//luego llamo al reducer, le paso el estado actual y la accion, y guardo el nuevo estado en todos.
todos = todoReducer(todos, action);

console.log(todos)