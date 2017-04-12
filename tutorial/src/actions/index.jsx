/// takes the input from ADDTODO field and returns it as "action" JSON data

export const addTodo = (text) => {
    return {
    type: 'ADD_TODO',
    id: nextToDoId++,
    text,
    completed: false
    }
}