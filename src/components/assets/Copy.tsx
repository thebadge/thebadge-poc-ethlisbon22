import { HTMLAttributes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.svg`
  .fill {
    fill: ${({ theme: { colors } }) => colors.darkGreen};
  }
`

export const Copy: React.FC<HTMLAttributes<SVGElement>> = ({ className, ...restProps }) => (
  <Wrapper
    className={`copy ${className}`}
    height="11"
    viewBox="0 0 11 11"
    width="11"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <path
      className="fill"
      d="M1.1,8.8H2.2V9.9A1.1,1.1,0,0,0,3.3,11H9.9A1.1,1.1,0,0,0,11,9.9V3.3A1.1,1.1,0,0,0,9.9,2.2H8.8V1.1A1.1,1.1,0,0,0,7.7,0H1.1A1.1,1.1,0,0,0,0,1.1V7.7A1.1,1.1,0,0,0,1.1,8.8ZM9.35,3.3a.52.52,0,0,1,.55.55v5.5a.52.52,0,0,1-.55.55H3.85a.52.52,0,0,1-.55-.55V3.85a.52.52,0,0,1,.55-.55h5.5ZM1.1,1.65a.52.52,0,0,1,.55-.55h5.5a.52.52,0,0,1,.55.55V2.2H3.3A1.1,1.1,0,0,0,2.2,3.3V7.7H1.65a.52.52,0,0,1-.55-.55V1.65Z"
    />
  </Wrapper>
)
