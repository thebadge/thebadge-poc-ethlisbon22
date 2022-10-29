import styled from 'styled-components'

export const BaseTitle = styled.h1`
  color: ${({ color, theme }) => color || theme.colors.white};
  text-align: center;
  font-size: 2.6rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  text-shadow: 6px 4px 4px rgba(0, 0, 0, 0.5);
`
