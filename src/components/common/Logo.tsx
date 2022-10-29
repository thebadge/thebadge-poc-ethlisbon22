import Link from 'next/link'
import styled from 'styled-components'

import { LogoWithText as BaseLogoSVG } from '@/src/components/assets/LogoWithText'

const HomeLink = styled.a`
  transition: opacity 0.05s linear;

  &:active {
    opacity: 0.7;
  }
`

const LogoSVG = styled(BaseLogoSVG)`
  cursor: pointer;
  width: 121px;
`

export const Logo: React.FC = (props) => (
  <Link href="/" passHref>
    <HomeLink {...props}>
      <LogoSVG />
    </HomeLink>
  </Link>
)
