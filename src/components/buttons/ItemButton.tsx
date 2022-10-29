import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

import { Ellipsis } from '@/src/components/assets/Ellipsis'

const Wrapper = styled.button`
  --item-dimensions: 20px;

  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  height: var(--item-dimensions);
  justify-content: center;
  margin: 0;
  outline: none;
  padding: 0;
  transition: opacity 0.15s linear;
  width: var(--item-dimensions);

  &:active {
    opacity: 0.7;
  }

  &[disabled],
  &[disabled]:hover {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

export const ItemButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ ...restProps }) => {
  return (
    <Wrapper className="itemButton" {...restProps}>
      <Ellipsis />
    </Wrapper>
  )
}
