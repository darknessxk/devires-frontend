import React, { FC, useCallback } from 'react';
import { ListItem, RoundedButton, TodoTitle } from './';
import { TodoItemProps } from '../types';
import { useAppDispatch } from '../store/hooks';
import { deleteTodoItem } from '../store/ducks/todo.duck';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const TodoItem: FC<TodoItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const deleteAction = useCallback(() => {
    if (item.id) {
      dispatch(deleteTodoItem(item.id));
    }
  }, [item, dispatch]);

  const deleteButtonClick = () => () => deleteAction();

  return (
    <ListItem>
      <TodoTitle>{item.title}</TodoTitle>
      <RoundedButton onClick={deleteButtonClick()}>
        <FontAwesomeIcon icon={faTrash} />
      </RoundedButton>
    </ListItem>
  );
};
