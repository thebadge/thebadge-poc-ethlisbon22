import styled from 'styled-components'

import { useTranslations } from 'next-intl'

import { BaseCard } from '@/src/components/common/BaseCard'
import { BaseParagraph } from '@/src/components/text/BaseParagraph'
import { BaseTitle } from '@/src/components/text/BaseTitle'
import { SubgraphName, getSubgraphSdkByNetwork } from '@/src/constants/subgraph'
import OffChainDetails from '@/src/page_partials/badgeTypes/offChain/Details'
import { useWeb3Connection } from '@/src/providers/web3ConnectionProvider'

const Card = styled(BaseCard)`
  min-height: 300px;
`
const SectionContainer = styled.div`
  display: flex;
`

export default function Home() {
  const t = useTranslations('home')
  const { appChainId } = useWeb3Connection()

  // TODO get badge types with gql
  // const gql = getSubgraphSdkByNetwork(appChainId, SubgraphName.TheBadge)
  const offChainBadgeTypes = { data: { badgeTypes: [] } }

  return (
    <>
      <BaseTitle>{'badgeTypes'}</BaseTitle>
      <Card>
        {offChainBadgeTypes.data?.badgeTypes.length ? (
          <SectionContainer>
            {offChainBadgeTypes.data?.badgeTypes.map((type, index) => (
              <OffChainDetails
                badgeType={type}
                key={index}
                // key={type.id}
              />
            ))}
          </SectionContainer>
        ) : (
          <BaseParagraph>{t('noBadgeTypes')}</BaseParagraph>
        )}
      </Card>
    </>
  )
}
