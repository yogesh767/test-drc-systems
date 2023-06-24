import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loggedIn: sessionStorage.getItem("loggedIn") ? sessionStorage.getItem("loggedIn"): false,
    todos: []
}

export const mainSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginUser: (state) => {
            state.loggedIn = true;
        },
        logout: (state) => {
            sessionStorage.clear()
            state.loggedIn = false;
        },
        addTodo:(state, action)=>{
            console.log("action",action);
            state.todos.push(action.payload)
        },
        editTodo:(state, action)=>{
            console.log("action",action);
            state.todos=state.todos.map((todo,index)=> index ==action.payload.index ? ({title:action.payload.title,description:action.payload.description,time:new Date()}) : todo )
        },
        deleteTodo:(state, action)=>{
            console.log("act",action.payload);
            state.todos=state.todos.filter((todo,index)=> index !== action.payload )
        },
        
    },
})

// Action creators are generated for each case reducer function
export const { loginUser,logout,addTodo,editTodo,deleteTodo} = mainSlice.actions

export default mainSlice.reducer