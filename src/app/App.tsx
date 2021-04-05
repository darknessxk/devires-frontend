import React, { useEffect, useMemo } from 'react';
import {
  AddItem,
  AppBody,
  Container,
  EmptyList,
  Header,
  List,
  TodoItem,
} from '../components';
import '../styles/main.css';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getTodoList } from '../store/ducks/todo.duck';

function App() {
  const todos = useAppSelector((state) => state.todoReducer.items);
  const dispatch = useAppDispatch();
  const ListItems = useMemo(() => {
    if (todos.length === 0) return <EmptyList />;

    return todos.map((todo) => <TodoItem item={todo} key={todo.id} />);
  }, [todos]);

  useEffect(() => {
    dispatch(getTodoList());
  }, [dispatch]);

  return (
    <AppBody className="App">
      <Container>
        <Header>My Things</Header>
        <List>{ListItems}</List>
        <AddItem />
      </Container>
    </AppBody>
  );
}

export default App;
