import { NextPage } from 'next'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { useTranslations } from 'next-intl'

import { BadgeCardPreview } from '@/src/components/common/BadgeCardPreview'
import { BaseTitle } from '@/src/components/text/BaseTitle'
import { SubgraphName, getSubgraphSdkByNetwork } from '@/src/constants/subgraph'
import { BadgeType } from '@/src/constants/types'
import { useWeb3Connection } from '@/src/providers/web3ConnectionProvider'

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 3rem;
`

const BadgeListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const MessageContainer = styled.div`
  font-size: 1.2rem;
`

const SubTitle = styled(BaseTitle)`
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  margin-top: 32px;
  margin-bottom: 16px;
`

const Profile: NextPage = () => {
  const router = useRouter()
  const t = useTranslations('profile')

  const userAddress = router.query.address as string
  const { appChainId } = useWeb3Connection()
  const gql = getSubgraphSdkByNetwork(appChainId, SubgraphName.TheBadge)
  const userBadges = gql.useUserBadges({ id: userAddress as string })

  // appending with real badges with test data
  const badges = userBadges.data?.badges || []

  return (
    <>
      <BaseTitle>{t('title')}</BaseTitle>
      <SubTitle>
        {t('subtitle')} {userAddress}
      </SubTitle>
      <ProfileContainer>
        {badges?.length === 0 ? (
          <MessageContainer>No badges available.</MessageContainer>
        ) : (
          <BadgeListContainer>
            {badges.map((badge) => (
              <BadgeCardPreview badge={badge as unknown as BadgeType} key={badge.id} />
            ))}
          </BadgeListContainer>
        )}
      </ProfileContainer>
    </>
  )
}

export default Profile
