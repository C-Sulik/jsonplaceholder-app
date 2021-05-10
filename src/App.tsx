import React, { useState, useEffect } from 'react';
import { fetchTodos, todosSlice } from './features/todos/todos-slice';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const todosLoadingStatus = useSelector<{ todos: { list: any[]; loading: boolean } }>(
    (state) => state.todos.loading,
  );

  const todos = useSelector<{ todos: { list: any[]; loading: boolean } }>(
    (state) => state.todos.list,
  );

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div>
      todos:
      <ul>
        {Array.isArray(todos) && todos.map((todo: any) => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
