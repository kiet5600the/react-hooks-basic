import { useEffect, useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import PostList from './components/PostList';
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

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchPostList() {
      try {
        const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1'
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const { data } = responseJSON;
        setPostList(data);
      } catch (error) {
        console.log("error fetch post list: ", error.message)

      }
    }

    fetchPostList()
  }, [])

  return (
    <div className="app">
      <h1>Welcome to React Hooks!</h1>
      {/* <TodoForm onSubmit={handleTodoFormSubmit} /> */}
      {/* <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
      <PostList posts={postList} />
    </div>
  );
}

export default App;
