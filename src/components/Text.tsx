import React from 'react';
import tw from 'twin.macro';

const TextStyled = tw.p`text-gray-700 font-thin`;

export const Text: React.FC = ({ children }) => {
  return <TextStyled>{children}</TextStyled>;
};
