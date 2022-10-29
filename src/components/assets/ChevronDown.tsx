import { HTMLAttributes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.svg`
  .fill {
    fill: ${({ theme: { colors } }) => colors.primaryDark};
  }
`

export const ChevronDown: React.FC<HTMLAttributes<SVGElement>> = ({ className, ...restProps }) => (
  <Wrapper
    className={`chevronDown ${className}`}
    height="6"
    viewBox="0 0 6 6"
    width="6"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <path className="fill" d="M3,0,6,6H0Z" transform="translate(6 6) rotate(180)" />
  </Wrapper>
)
