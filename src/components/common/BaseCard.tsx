import styled from 'styled-components'

export const BaseCard = styled.div`
  background-color: ${({ theme: { card } }) => card.backgroundColor};
  border-radius: 6px;
  border: 1px solid transparent;
  padding: 18px 20px;
  width: 100%;
`
