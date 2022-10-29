import { HTMLAttributes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.svg`
  height: 18px;
  width: 18px;

  .fill {
    fill: ${({ theme: { colors } }) => colors.lightBlue};
  }
  .stroke {
    stroke: ${({ theme: { colors } }) => colors.lightBlue};
  }
`

export const Favorites: React.FC<HTMLAttributes<SVGElement>> = ({ className, ...restProps }) => (
  <Wrapper
    className={`favorites ${className}`}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <path
      className="fill stroke"
      d="M14.6 1.5c-1.9 0-3.7 1.1-4.6 2.8C8.6 1.7 5.5.8 2.9 2.1.4 3.5-.6 6.7.8 9.2c.2.4.5.8.8 1.1l8 8c.2.2.6.2.9 0l8-8c2-2.1 1.8-5.5-.3-7.4-1.1-.9-2.3-1.4-3.6-1.4zm2.8 7.9L10 17 2.6 9.4c-1.5-1.5-1.5-4 .1-5.5.7-.7 1.7-1.1 2.7-1.1 1.7 0 3.2 1.1 3.8 2.7.1.5.7.8 1.1.6.2-.1.4-.3.5-.5.6-2.1 2.8-3.2 4.9-2.6 1.6.5 2.7 2 2.7 3.7.1 1-.3 2-1 2.7z"
      strokeWidth="0"
    />
  </Wrapper>
)
