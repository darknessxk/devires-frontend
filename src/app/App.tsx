import React, { useEffect } from 'react';
import { AddItem, AppBody, Container, Header, List, TodoItem } from '../components';
import '../styles/main.css';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getTodoList } from '../store/ducks/todo.duck';

function App() {
  const todos = useAppSelector((state) => state.todoReducer.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodoList());
  }, [dispatch]);

  return (
    <AppBody className="App">
      <Container>
        <Header>My Things</Header>
        {todos.length > 0 ? (
          <List>
            {todos.map((todo) => (
              <TodoItem item={todo} key={todo.id} />
            ))}
          </List>
        ) : null}
        <AddItem />
      </Container>
    </AppBody>
  );
}

export default App;
