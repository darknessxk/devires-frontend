import React, { useEffect } from 'react';
import { AppBody, Container, Header, List, ListItem } from '../components';
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
        <List>
          {todos.map((todo) => (
            <ListItem item={todo} key={todo.id} />
          ))}
        </List>
      </Container>
    </AppBody>
  );
}

export default App;
