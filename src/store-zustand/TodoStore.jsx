import {create} from "zustand"

export const useTodoStore= create((set)=>({

    
    todos:[],

    //Adding task here....
    addTodos:(newTodo)=>set((state)=>({todos:[...state.todos ,newTodo]})),

    //remove function
    removeTodo:(id)=>set((state)=>({todos:[state.todos.filter((i)=>i!==id)]}))

}))



// export default useTodoStore