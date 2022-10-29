import { HTMLAttributes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.svg`
  .fill {
    fill: ${({ theme: { colors } }) => colors.textColorLight};
  }
`

export const Link: React.FC<HTMLAttributes<SVGElement>> = ({ className, ...restProps }) => (
  <Wrapper
    className={`link ${className}`}
    height="11"
    viewBox="0 0 11 11"
    width="11"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <path
      className="fill"
      d="M93.033,96.333h-6.05a1.621,1.621,0,0,1-1.65-1.65v-6.05a1.621,1.621,0,0,1,1.65-1.65h3.3a.55.55,0,0,1,0,1.1h-3.3a.52.52,0,0,0-.55.55v6.05a.52.52,0,0,0,.55.55h6.05a.52.52,0,0,0,.55-.55v-3.3a.55.55,0,1,1,1.1,0v3.3A1.621,1.621,0,0,1,93.033,96.333Zm2.75-6.6a.52.52,0,0,1-.55-.55v-2.75h-2.75a.55.55,0,0,1,0-1.1h3.3a.52.52,0,0,1,.55.55v3.3A.52.52,0,0,1,95.783,89.733Z"
      transform="translate(-85.333 -85.333)"
    />
    <path
      className="fill"
      d="M384.55,92.483a.5.5,0,0,1-.385-.165.532.532,0,0,1,0-.77l6.05-6.05a.544.544,0,1,1,.77.77l-6.05,6.05A.5.5,0,0,1,384.55,92.483Z"
      transform="translate(-380.15 -85.333)"
    />
  </Wrapper>
)
