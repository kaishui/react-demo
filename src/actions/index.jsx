let nextTodoId = 0
export const addTodo = text => {
    console.log("ADD TODO ", text)
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

export const setVisibilityFilter = filter => {
    console.log("SET_VISIBILITY_FILTER", filter)
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTodo = id => {
    console.log("TOGGLE_TODO", id)
    return {
        type: 'TOGGLE_TODO',
        id
    }
}