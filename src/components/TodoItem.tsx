import React, { FC, useCallback } from 'react';
import tw from 'twin.macro';
import { ListItem } from './';
import { TodoItemProps } from '../types';
import { useAppDispatch } from '../store/hooks';
import { deleteTodoItem } from '../store/ducks/todo.duck';

const StyledDescription = tw.span`px-1`;
const StyledName = tw.span`px-1`;

export const TodoItem: FC<TodoItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const deleteAction = useCallback(() => {
    if (item.id) {
      dispatch(deleteTodoItem(item.id));
    }
  }, [item, dispatch]);

  return (
    <ListItem>
      <StyledName>{item.title}</StyledName>
      <StyledDescription>{item.description}</StyledDescription>
      <span onClick={() => deleteAction()}>Delete ME</span>
    </ListItem>
  );
};
