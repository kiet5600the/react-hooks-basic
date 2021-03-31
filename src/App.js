import { useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "green" },
    { id: 2, title: "blue" },
    { id: 3, title: "red" },
  ]);

  function handleTodoClick(todo) {
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    const newTodo = {
      id: todoList.length + 1,
      ...formValues
    }

    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <h1>Welcome to React Hooks!</h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
