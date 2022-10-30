import styled from 'styled-components'

export const Error = styled.label`
  color: ${({ theme: { colors } }) => colors.error};
  display: block;
  font-size: 1.1rem;
  letter-spacing: 0.05rem;
  font-weight: 400;
  left: 3px;
  line-height: 1.2;
  top: calc(100% + 3px);
  white-space: pre-wrap;

  &:empty {
    display: none;
  }
`
