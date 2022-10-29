import { HTMLAttributes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.svg`
  .fill {
    fill: ${({ theme: { colors } }) => colors.primaryDark};
  }
`

export const Grid: React.FC<HTMLAttributes<SVGElement>> = ({ className, ...restProps }) => (
  <Wrapper
    className={`grid ${className}`}
    height="16"
    viewBox="0 0 16 16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <path
      className="fill"
      d="M14.5,16H10a1.5,1.5,0,0,1-1.5-1.5V10A1.5,1.5,0,0,1,10,8.5h4.5A1.5,1.5,0,0,1,16,10v4.5A1.5,1.5,0,0,1,14.5,16Zm.5-6a.5.5,0,0,0-.5-.5H10a.5.5,0,0,0-.5.5v4.5a.5.5,0,0,0,.5.5h4.5a.5.5,0,0,0,.5-.5Zm-.5-2.5H10A1.5,1.5,0,0,1,8.5,6V1.5A1.5,1.5,0,0,1,10,0h4.5A1.5,1.5,0,0,1,16,1.5V6A1.5,1.5,0,0,1,14.5,7.5Zm.5-6a.5.5,0,0,0-.5-.5H10a.5.5,0,0,0-.5.5V6a.5.5,0,0,0,.5.5h4.5A.5.5,0,0,0,15,6ZM6,16H1.5A1.5,1.5,0,0,1,0,14.5V10A1.5,1.5,0,0,1,1.5,8.5H6A1.5,1.5,0,0,1,7.5,10v4.5A1.5,1.5,0,0,1,6,16Zm.5-6A.5.5,0,0,0,6,9.5H1.5A.5.5,0,0,0,1,10v4.5a.5.5,0,0,0,.5.5H6a.5.5,0,0,0,.5-.5ZM6,7.5H1.5A1.5,1.5,0,0,1,0,6V1.5A1.5,1.5,0,0,1,1.5,0H6A1.5,1.5,0,0,1,7.5,1.5V6A1.5,1.5,0,0,1,6,7.5Zm.5-6A.5.5,0,0,0,6,1H1.5a.5.5,0,0,0-.5.5V6a.5.5,0,0,0,.5.5H6A.5.5,0,0,0,6.5,6Z"
    />
  </Wrapper>
)
