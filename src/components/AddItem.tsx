import React, { useState } from 'react';
import { FlexContainer, RoundedButton, Input } from './';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from '../store/hooks';
import { addTodoItem } from '../store/ducks/todo.duck';
import { TodoItem } from '../types';

export const AddItem = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>('');
  const [description] = useState<string>('disabled.');

  const addItem = (item: TodoItem) => {
    dispatch(addTodoItem(item));
  };

  const btnClick = () => {
    return () => {
      addItem({
        title,
        description,
        done: false,
      });
    };
  };

  return (
    <FlexContainer>
      <RoundedButton onClick={btnClick()}>
        <FontAwesomeIcon icon={faPlus} />
      </RoundedButton>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Feed mittens the kitty"
        autoComplete="off"
      />
    </FlexContainer>
  );
};
