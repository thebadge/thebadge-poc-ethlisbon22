import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

import { CopyToClipboard } from 'react-copy-to-clipboard'

import { Copy } from '@/src/components/assets/Copy'

const Wrapper = styled.button`
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  height: 12px;
  justify-content: center;
  margin: 0;
  outline: none;
  padding: 0;
  transition: opacity 0.15s linear;
  width: 12px;

  &:active {
    opacity: 0.7;
  }

  &[disabled],
  &[disabled]:hover {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

interface ButtonCopyProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  copyValue: string
}

export const CopyButton: React.FC<ButtonCopyProps> = (props) => {
  const { copyValue, ...restProps } = props

  return (
    <CopyToClipboard text={copyValue}>
      <Wrapper className="buttonCopy" onClick={(e) => e.stopPropagation()} {...restProps}>
        <Copy />
      </Wrapper>
    </CopyToClipboard>
  )
}
