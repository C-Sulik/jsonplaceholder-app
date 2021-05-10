import React, { useState, useEffect } from 'react';
import { fetchTodos, TodoI, TodosStateI } from './features/todos/todos-slice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchingStatuses, FetchingStatus } from './types';

import { RootStateI } from './store';
import { Loader } from './Components/Loader';

const { pending, fulfilled, rejected } = fetchingStatuses;

function App() {
  const dispatch = useDispatch();
  const { error, list: todos, fetchingStatus } = useSelector<RootStateI, TodosStateI>(
    (state) => state.todos,
  );

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div>
      todos:
      {fetchingStatus === pending && <Loader />}
      {fetchingStatus === fulfilled && (
        <ul>
          {todos.map((todo: TodoI) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
      {fetchingStatus === rejected && <p>{error}</p>}
    </div>
  );
}

export default App;

// https://codepen.io/arsh-shaikh/pen/LYxKavy
