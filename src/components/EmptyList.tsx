import React from 'react';
import tw from 'twin.macro';

const EmptyListStyled = tw.div`flex-grow content-center items-center justify-center flex`;

export const EmptyList = () => {
  return <EmptyListStyled>Add some new tasks...</EmptyListStyled>;
};
