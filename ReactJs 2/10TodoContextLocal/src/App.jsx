import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context';
import { TodoForm, TodoItem } from './components';
function App() {
  // todos context se ayenge toh kahi na kahi store krke rakhna padega
  // store krke ui bhi change ho rha hai
  const [todos,setTodos]=useState([]);
  // same name se function define krna hai tabhi functionality jayegi usme
  const addTodo=(todo)=>{
    // prev se hume previous state mil jati hai
    // agar direct value dalege todo ki toh sirf single todo hi rahega
     setTodos((prev)=>[{id:Date.now(),...todo},...prev]);
  }
  const updateTodo=(id,todo)=>{
     setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id
      === id ?todo:prevTodo)))
  }
  const deleteTodo=(id)=>{
    // filter check krega jiski id parameter vali id ke equal nhi hai 
    // usse return kr dega
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id));
  }
  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===
    // saari values prevTodo ki le ke completed vala 
    // override kr dia
    id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }

  // Storage ka concept
  // jab bhi value browser se get krni hoti hai jaa set krni hoti hai toh
  // voh string format mein hota hai. Toh hume usse json format mein convert
  // krna padta hai.

  useEffect(()=>{
    //jab takk server side rendering nhi krte hain tab takk localStorage
    // ka access rahega. 
   const todos=JSON.parse(localStorage.getItem("todos"));
   if(todos && todos.length>0){
      setTodos(todos)
   }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  {/* Todo form goes here */} 
                  <TodoForm/>
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
                  {
                    todos.map((todo)=>(
                      <div key={todo.id} className='w-full'>
                        <TodoItem todo={todo} />
                      </div>
                    ))
                  }
              </div>
          </div>
      </div>
    </TodoProvider>
  )
}

export default App
