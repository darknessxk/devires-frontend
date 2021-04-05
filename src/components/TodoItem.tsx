import React, { FC } from 'react';
import tw from 'twin.macro';
import { ListItem } from './';
import { TodoItemProps } from '../types';

const StyledId = tw.span``;
const StyledName = tw.span``;

export const TodoItem: FC<TodoItemProps> = ({ item }) => {
  return (
    <ListItem>
      <StyledId>#{item.id}</StyledId> - <StyledName>{item.title}</StyledName>
    </ListItem>
  );
};
