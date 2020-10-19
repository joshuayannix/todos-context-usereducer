import React, { createContext } from 'react';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';
import todosReducer from '../reducers/todo.reducer';
const defaultTodos = [
  { id: 1, task: 'clean kitchen', completed: false},
  { id: 2, task: 'walk dog', completed: true },
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    'todos', 
    defaultTodos, 
    todosReducer
  );
  return (
    <TodosContext.Provider value={ todos }>
      <DispatchContext.Provider value={ dispatch }>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}