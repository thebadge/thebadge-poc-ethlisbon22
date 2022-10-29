import { HTMLAttributes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.svg`
  .fill {
    fill: ${({ theme: { colors } }) => colors.primaryDark};
  }
`

export const Warning: React.FC<HTMLAttributes<SVGElement>> = ({ className, ...restProps }) => (
  <Wrapper
    className={`warning ${className}`}
    height="52.932"
    viewBox="0 0 60 52.932"
    width="60"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <g transform="translate(-63.976 -116.7)">
      <path
        className="fill"
        d="M484,401.875v15a1.875,1.875,0,0,0,3.75,0v-15a1.875,1.875,0,1,0-3.75,0Z"
        transform="translate(-391.899 -264.33)"
      />
      <path
        className="fill"
        d="M485.875,737.875m-1.875,0A1.875,1.875,0,1,0,485.875,736,1.875,1.875,0,0,0,484,737.875Z"
        transform="translate(-391.899 -577.831)"
      />
      <path
        className="fill"
        d="M123.479,164.135l-26.329-45.6a3.663,3.663,0,0,0-6.348,0l-26.329,45.6a3.665,3.665,0,0,0,3.174,5.5H120.3A3.665,3.665,0,0,0,123.479,164.135ZM67.721,166.01l26.255-45.473L120.3,165.883Z"
        transform="translate(0 0)"
      />
    </g>
  </Wrapper>
)
