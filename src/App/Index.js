import React, { useState } from "react";
import TodoCounter from "../TodoCounter";
import TodoList from "../TodoList";
import Todoitem from "../Todoitem/Index";
import Todoseach from "../Todoseach";
import CreateTodoButton from "../CreateTodobutton"
import Loader from "../Loader"
import { useForm } from "react-hook-form";
import './App.css'

// const defaulttodos = [
//   {text: 'Tarea 1' , completed: true},
//   {text: 'Tarea 2' , completed: false},
//   {text: 'Tarea 3' , completed: false}
// ];


function App() { 

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  React.useEffect(()=> {
    setTimeout(()=> {
      try  {
        const localStorageTodos = localStorage.getItem('TAREAS');
        let tareasParseadas = [];

        if (!localStorageTodos){
          localStorage.setItem('TAREAS', JSON.stringify([]));
        }else {
          tareasParseadas = JSON.parse(localStorageTodos);
        }
        setTodos(tareasParseadas)
        setLoading(false)
        setError(false)
      } catch(error) {
        setError(error)
      }
    
    },1000);
  })

  const changeerror = (error) => {
    setError(error)
  }; 

  const [todos,setTodos] = useState([]);
  let completedTodos = todos.filter(todo => !!todo.completed).length;
  let totaltodos = todos.length;
  
  const [estado,setEstado] = useState('');

  let valoresbuscados = [];   
  let valoresencontrados = [];   

  if(estado.length >= 1){
    valoresencontrados= todos.filter((todo) =>(
        todo.text.toLocaleLowerCase().includes(estado.toLocaleLowerCase()) //quiere decir que cuando busquen no importa si es mayus o minus
     ));
     valoresbuscados = valoresencontrados.filter((val) => (val.completed  ===false))
  }else {
    valoresbuscados = todos.sort((a, b) => b.completed === false ? 1 : -1);//.map((todo) =>(todo.completed ===false)); 
  }

  const saveTodos  = (newTodos) => {
    try  {
      const stringifiedTodo = JSON.stringify(newTodos);
      localStorage.setItem('TAREAS', stringifiedTodo);
      
      setTodos(newTodos)
    } catch(error) {
      setError(error)
    }
   
  };
 
  const pasarTrueTODO = (text) => {
    const NewTodos = [...todos];
    let position = NewTodos.findIndex(todos => todos.text === text);
    NewTodos[position].completed = true;
    saveTodos(NewTodos);
    completedTodos = todos.filter(todo => !!todo.completed).length;
    totaltodos = todos.length;
  };
 
  const pasarFalseTODO = (text) => {
    const NewTodos = [...todos];
    let position = NewTodos.findIndex(todos => todos.text === text);
    NewTodos[position].completed = false;
    completedTodos = todos.filter(todo => !!todo.completed).length;
    totaltodos = todos.length;
    saveTodos(NewTodos);
  };

  const Borrar = (text) => {
    const NewTodos = [...todos];
    let position = NewTodos.findIndex(todos => todos.text === text);
    NewTodos.splice(NewTodos[position],1);
    completedTodos = todos.filter(todo => !!todo.completed).length;
    totaltodos = todos.length;
    saveTodos(NewTodos);
  };



  return (
    
    <React.Fragment>
     {loading ? (
        <div className="container"><Loader/></div>
     ) : (
      <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <h2 className="navbar-brand">Tareas Pendientes</h2>
          <CreateTodoButton
              todos={todos}
              changeerror={changeerror}
          /> 
          <form className="d-flex" role="search"> 
            <Todoseach 
              estado={estado}
              setEstado={setEstado}
            /> 
          </form>
        </div>
      </nav> 

          <TodoCounter
            total={totaltodos}        
            completedTodos={completedTodos}
          />
       
      <div className="containere">
        
        <TodoList  >
                {error && <p>Hubo un error al cargar los datos</p>}
                {loading && <p>Estamos cargando la informacion</p>}
                {(!loading && !valoresbuscados.length) && <p>Crea tu primera Tarea</p>}
                {
                  valoresbuscados.map(todo => (
                    <Todoitem 
                      key={todo.text} 
                      text={todo.text}
                      completed={todo.completed}
                      pasarFalseTODO={() =>(pasarFalseTODO(todo.text))}
                      Borrar={() =>(Borrar(todo.text))}
                      pasarTrueTODO={() =>(pasarTrueTODO(todo.text))}
                    />
                ))}
        </TodoList> 
      </div>
      </>
     )}
    </React.Fragment>
     
  );
}

export default App;
