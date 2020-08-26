//import  List  from "@material-ui/core/List";
import React from 'react'
import Todo from './Todo'

 const TodoList = ({ todos, toggleComplete, removeTodo }) => {

  // todos.map((todo) => { return(
  //   console.log(todo.id));
  // })

    const todo = todos.length ? (
      todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
          />
        );
      })
    ) : (
      <p className="center"> No tienes ningun TODO! </p>
    );
    // renderiza la matriz de to do
    return <div className="todos collection">{todo}</div>;


  //  return (
  //    <List>
  //      {todos.map((todo) => (
  //        <Todo
  //          key={todo.id}
  //          todo={todo}
  //          toggleComplete={toggleComplete}
  //          removeTodo={removeTodo}
  //        />
  //      ))}
  //    </List>
  //  );
 };

export default TodoList;