import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todos: [],
    onTodoClick: null
}

function TodoList(props) {
    const { todos, onTodoClick } = props;

    function handleTodoClick(todo) {
        onTodoClick(todo);
    }

    return (
        <ul className="todo-list">
            {todos.map(item => (
                <li
                    key={item.id}
                    onClick={() => handleTodoClick(item)}
                >
                    {item.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;