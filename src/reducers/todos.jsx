const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            console.log("todos add_todo", action.text)
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            console.log("todos TOGGLE_TODO", action.id)
            return state.map(todo =>
                (todo.id === action.id) ? {
                    ...todo,
                    completed: !todo.completed
                } : todo
            )
        default:
            return state
    }
}

export default todos