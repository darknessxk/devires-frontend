import React from 'react';
import tw from 'twin.macro';

const EmptyListStyled = tw.div``;

export const EmptyList = () => {
  return <EmptyListStyled>Add some new tasks...</EmptyListStyled>;
};
