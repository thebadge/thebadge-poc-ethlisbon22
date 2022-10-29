import { HTMLAttributes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.svg`
  .fill {
    fill: ${({ theme: { colors } }) => colors.primaryDark};
  }
`

export const Close: React.FC<HTMLAttributes<SVGElement>> = ({ className, ...restProps }) => (
  <Wrapper
    className={`close ${className}`}
    height="10"
    viewBox="0 0 10 10"
    width="10"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <path
      className="fill"
      d="M117.977,117l3.819-3.818a.692.692,0,1,0-.978-.978L117,116.022,113.18,112.2a.692.692,0,0,0-.978.978L116.02,117l-3.819,3.819a.692.692,0,1,0,.978.978L117,117.979l3.819,3.819a.692.692,0,0,0,.978-.978Z"
      transform="translate(-111.998 -112)"
    />
  </Wrapper>
)
