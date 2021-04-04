import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const TextStyled = styled.p`
  ${tw``};
`;

export const Text: React.FC = ({ children }) => {
  return <TextStyled>{children}</TextStyled>;
};
