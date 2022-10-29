import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

import { ChevronDown } from '@/src/components/assets/ChevronDown'

const Wrapper = styled.button`
  align-items: center;
  background-color: transparent;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.primaryDark};
  border-left: none;
  border-right: none;
  border-top: none;
  color: ${({ theme: { colors } }) => colors.primaryDark};
  cursor: pointer;
  display: flex;
  font-size: 1.3rem;
  gap: 6px;
  justify-content: center;
  line-height: 1.2;
  margin: 0;
  outline: none;
  padding: 0;
  transition: opacity 0.15s linear;

  &:active {
    opacity: 0.7;
  }

  &[disabled],
  &[disabled]:hover {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

export const DropdownButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...restProps
}) => {
  return (
    <Wrapper className="itemButton" {...restProps}>
      {children}
      <ChevronDown />
    </Wrapper>
  )
}
