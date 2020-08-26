import React, { useEffect, useState} from 'react';
import TodoForm  from './components/TodoForm'
import TodoList from './components/TodoList'
import Typograpy from '@material-ui/core/Typography';
import'./App.css';

function App() {
  const [ todos, setTodos ] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);
 
  
  async function getTodos() {
    const url =
      "https://assets.breatheco.de/apis/fake/todos/user/gonzaloalonzo";
    const response = await fetch(url);
    const data = await response.json();
    setTodos(data);
  }

  async function removeTodo(id) {
    const newTodos = (todos.filter(todo => todo.id !== id));
    
    setTodos(
      newTodos
      );

    const url =
      "https://assets.breatheco.de/apis/fake/todos/user/gonzaloalonzo";
    const response = await fetch(url, {
      method: "put",
      body: JSON.stringify(newTodos),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    alert(data.result);
  }

  async function addTodo(todo) {
    const list = [todo, ...todos ];
    setTodos(
      list
    );

    const url =
      "https://assets.breatheco.de/apis/fake/todos/user/gonzaloalonzo";
    const response = await fetch(url, {
      method: "put",
      body: JSON.stringify(list),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    alert(data.result);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  return (
    <>
      <Typograpy style={{ padding: 16 }} variant="h1">
        Todos
      </Typograpy>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </>
  );
}

export default App;
