import { NextPage } from 'next'
import styled from 'styled-components'

import ms from 'ms'
import { useTranslations } from 'next-intl'

import { BaseCard } from '@/src/components/common/BaseCard'
import { BaseParagraph } from '@/src/components/text/BaseParagraph'
import { BaseTitle } from '@/src/components/text/BaseTitle'
import { SubgraphName, getSubgraphSdkByNetwork } from '@/src/constants/subgraph'
import OffChainDetails from '@/src/page_partials/badgeTypes/offChain/Details'
import { useWeb3Connection } from '@/src/providers/web3ConnectionProvider'
import { Curator } from '@/types/generated/subgraph'

const Card = styled(BaseCard)`
  min-height: 300px;
`
const SectionContainer = styled.div`
  display: flex;
`

const Home: NextPage = () => {
  const t = useTranslations('home')
  const { appChainId } = useWeb3Connection()

  const gql = getSubgraphSdkByNetwork(appChainId, SubgraphName.TheBadge)
  const offChainBadgeTypes = gql.useBadgeTypes(
    { paused: false, curator: Curator.Kleros },
    { refreshInterval: ms('10s') },
  )

  return (
    <>
      <BaseTitle>{'badgeTypes'}</BaseTitle>
      <Card>
        {offChainBadgeTypes.data?.badgeTypes.length ? (
          <SectionContainer>
            {offChainBadgeTypes.data?.badgeTypes.map((type) => (
              <OffChainDetails badgeType={type} key={type.id} />
            ))}
          </SectionContainer>
        ) : (
          <BaseParagraph>{t('noBadgeTypes')}</BaseParagraph>
        )}
      </Card>
    </>
  )
}

export default Home
