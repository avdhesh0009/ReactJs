import {createSlice,nanoid} from '@reduxjs/toolkit';
// nanoId generates unique Id's

const initialState={
    todos:[
        {
           id:1,
           text:"Hello World" 
        }
    ]
}
// intial state array bhi ho skti hai aur object bhi 
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        // hume state aur action ka access milta hai
        // yeh ek syntax hi hai
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
                // payload ek object hai apne mein
                // usme text,id pada hoga
            }
            // state ko update krna padega
            // yahan state preserve rehti hai
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
    }
    // reducers mein properties aur function ate hain
})
// isme jaydatar object ate hain
// todoslice exk reducer hai core reduce mein isse slice kaha 
// jata hai

export const {addTodo,removeTodo} =todoSlice.actions;
// individual functionality export ki hai yeh component mein kaam ayega

export default todoSlice.reducer
// yeh isliye kyunki jo store banaya hai vo sirf yehi reducers mein change krta hai
// aur kisi mein nhi