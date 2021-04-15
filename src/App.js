import { useEffect, useState } from 'react';
import './App.scss';
import queryString from 'query-string';
import ColorBox from './components/ColorBox';
import Pagination from './components/Pagination';
import PostList from './components/PostList';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import PostFilterForm from './components/PostFilterForm';
import Clock from './components/Clock';
import MagicColor from './components/MagicColor';


function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "green" },
    { id: 2, title: "blue" },
    { id: 3, title: "red" },
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1
  })
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
  })

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


  useEffect(() => {
    async function fetchPostList() {
      try {

        const paramString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("error fetch post list: ", error.message)

      }
    }

    fetchPostList()
  }, [filters])

  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      _page: newPage
    })
  }

  function handleFilterChange(newFilters) {
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    })

  }

  return (
    <div className="app">
      <h1>Welcome to React Hooks!</h1>
      <MagicColor />
      {/* <Clock /> */}
      {/* <TodoForm onSubmit={handleTodoFormSubmit} /> */}
      {/* <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
      {/* <PostFilterForm onSubmit={handleFilterChange} />
      <PostList posts={postList} />
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      /> */}
    </div>
  );
}

export default App;
