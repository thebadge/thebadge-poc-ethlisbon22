import { HTMLAttributes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.svg`
  .fill {
    fill: ${({ theme: { colors } }) => colors.primaryDark};
  }
`

export const List: React.FC<HTMLAttributes<SVGElement>> = ({ className, ...restProps }) => (
  <Wrapper
    className={`list ${className}`}
    height="15.227"
    viewBox="0 0 16 15.227"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <path
      className="fill"
      d="M197.441,194.238h9.834a.762.762,0,1,0,0-1.524h-9.834a.762.762,0,1,0,0,1.524Zm0,6.075h9.8a.762.762,0,0,0,0-1.524h-9.8a.762.762,0,1,0,0,1.524Zm9.835,4.586h-9.834a.762.762,0,1,0,0,1.524h9.834a.762.762,0,1,0,0-1.524Zm-15.238-11.423a1.524,1.524,0,1,0,1.524-1.524A1.524,1.524,0,0,0,192.037,193.477Zm0,6.066a1.524,1.524,0,1,0,1.524-1.524A1.524,1.524,0,0,0,192.037,199.543Zm0,6.114a1.524,1.524,0,1,0,1.524-1.524A1.524,1.524,0,0,0,192.037,205.657Z"
      transform="translate(-192.037 -191.953)"
    />
  </Wrapper>
)
