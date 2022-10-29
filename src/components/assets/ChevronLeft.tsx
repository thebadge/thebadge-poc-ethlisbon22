import { HTMLAttributes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.svg`
  .fill {
    fill: ${({ theme: { colors } }) => colors.primaryDark};
  }
`

export const ChevronLeft: React.FC<HTMLAttributes<SVGElement>> = ({ className, ...restProps }) => (
  <Wrapper
    className={`chevronLeft ${className}`}
    height="26"
    viewBox="0 0 17.429 26"
    width="17.429"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...restProps}
  >
    <defs>
      <filter filterUnits="userSpaceOnUse" height="26" id="chevron-left" width="17.429" x="0" y="0">
        <feGaussianBlur result="blur" stdDeviation="1" />
        <feFlood floodOpacity="0.6" />
        <feComposite in2="blur" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g filter="url(#chevron-left)" transform="matrix(1, 0, 0, 1, 0, 0)">
      <path
        d="M342.762,233.333a1.3,1.3,0,0,1-1-.429,1.381,1.381,0,0,1,0-2l7.571-7.571-7.571-7.571a1.414,1.414,0,0,1,2-2l8.571,8.571a1.381,1.381,0,0,1,0,2l-8.571,8.571a1.3,1.3,0,0,1-1,.429Z"
        fill="#fff"
        id="chevron-left-2"
        transform="translate(355.76 236.33) rotate(180)"
      />
    </g>
  </Wrapper>
)
