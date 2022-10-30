import { useRouter } from 'next/router'
import styled from 'styled-components'

import { useTranslations } from 'next-intl'

import { NavLink as BaseNavLink } from '@/src/components/navigation/NavLink'
import { useWeb3Connection } from '@/src/providers/web3ConnectionProvider'

const Wrapper = styled.nav`
  display: none;
  height: 100%;
  font-size: 1.2rem;

  @media (min-width: ${({ theme }) => theme.breakPoints.tabletLandscapeStart}) {
    align-items: center;
    display: flex;
  }
`

const NavLink = styled(BaseNavLink)`
  align-items: center;
  border-bottom: 2px solid transparent;
  color: ${({ theme: { colors } }) => colors.textColor};
  display: flex;
  font-size: 1.4rem;
  font-weight: 700;
  height: 80%;
  line-height: 1.2;
  padding: 0 10px;
  text-decoration: none;
  transition: border-color 0.15s linear, color 0.15s linear;

  &.active {
    border-bottom-color: ${({ theme: { colors } }) => colors.darkGreen};
    cursor: default;
  }

  &:not(.active):hover {
    color: ${({ theme: { colors } }) => colors.darkGreen};
  }

  &:active {
    opacity: 0.7;
  }
`

export const MainMenu: React.FC = ({ ...restProps }) => {
  const t = useTranslations('mainMenu')
  const { address } = useWeb3Connection()
  const router = useRouter()
  return (
    <Wrapper {...restProps}>
      <NavLink className={router.route == '/home' ? 'active' : ''} href="/">
        {t('home')}
      </NavLink>
      {address && (
        <NavLink
          className={router.route == '/profile/[address]' ? 'active' : ''}
          href={`/profile/${address}`}
        >
          {t('profile')}
        </NavLink>
      )}
    </Wrapper>
  )
}
