import { InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

export enum TextfieldState {
  error = 'error',
  success = 'success',
}

interface TexfieldCSSProps {
  status?: TextfieldState | undefined
}

export interface TextfieldProps extends InputHTMLAttributes<HTMLInputElement>, TexfieldCSSProps {}

export const TexfieldPartsCSS = css<TexfieldCSSProps>`
  &:active,
  &:focus {
    background-color: ${({ theme: { textField } }) => textField.active.backgroundColor};
    border-bottom-color: ${({ status, theme: { textField } }) =>
      status === TextfieldState.error
        ? textField.errorColor
        : status === TextfieldState.success
        ? textField.successColor
        : textField.active.borderColor};
    color: ${({ status, theme: { textField } }) =>
      status === TextfieldState.error ? textField.errorColor : textField.color};
  }

  &[disabled],
  &[disabled]:hover {
    background-color: ${({ theme: { textField } }) => textField.backgroundColor};
    border-bottom-color: ${({ theme: { textField } }) => textField.borderColor};
    color: ${({ theme: { textField } }) => textField.active.color};
    cursor: not-allowed;
    opacity: 0.5;
  }

  &[disabled]::placeholder,
  &[disabled]:hover::placeholder {
    color: ${({ theme: { textField } }) => textField.color}!important;
  }

  &::placeholder {
    color: ${({ theme: { textField } }) => textField.placeholder.color};
    font-size: var(--texfield-font-size);
    font-style: italic;
    font-weight: var(--textfield-font-weight);
    opacity: 0.75;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &[readonly] {
    background-color: ${({ theme: { textField } }) => textField.backgroundColor};
    border-bottom-color: ${({ theme: { textField } }) => textField.borderColor};
    color: ${({ theme: { textField } }) => textField.placeholder.color};
    cursor: default;
    font-style: normal;
  }

  &[type='number'] {
    -moz-appearance: textfield;
    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  &::-webkit-search-decoration {
    -webkit-appearance: none;
  }
`

export const TextfieldCSS = css<TexfieldCSSProps>`
  --textfield-border-radius: 0;
  --texfield-font-size: 1.3rem;
  --textfield-padding: 0 3px 2px;
  --textfield-height: 20px;
  --textfield-font-weight: 400;

  background-color: ${({ theme: { textField } }) => textField.backgroundColor};
  border-bottom-color: ${({ status, theme: { textField } }) =>
    status === TextfieldState.error
      ? textField.errorColor
      : status === TextfieldState.success
      ? textField.successColor
      : textField.borderColor};
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left: none;
  border-radius: var(--textfield-border-radius);
  border-right: none;
  border-top: none;
  color: ${({ status, theme: { textField } }) =>
    status === TextfieldState.error ? textField.errorColor : textField.color};
  font-size: var(--texfield-font-size);
  font-weight: var(--textfield-font-weight);
  height: var(--textfield-height);
  outline: none;
  overflow: hidden;
  padding: var(--textfield-padding);
  text-overflow: ellipsis;
  transition: border-color 0.15s linear;
  white-space: nowrap;
  width: 100%;

  ${TexfieldPartsCSS}
`

export const Textfield = styled.input<TextfieldProps>`
  ${TextfieldCSS}
`

Textfield.defaultProps = {
  className: 'textField',
}
