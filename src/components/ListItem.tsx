import React, { FC } from 'react';
import tw from 'twin.macro';
import { ListItemProps } from '../types';

const StyledListItem = tw.li`p-2`;
const StyledId = tw.span``;
const StyledName = tw.span`font-thin`;

export const ListItem: FC<ListItemProps> = ({ item }) => {
  return (
    <StyledListItem>
      <StyledId>#{item.id}</StyledId> - <StyledName>{item.title}</StyledName>
    </StyledListItem>
  );
};
