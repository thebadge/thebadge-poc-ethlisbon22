import { FC } from 'react'
import styled from 'styled-components'

import { useTranslations } from 'next-intl'

import { BaseCard } from '@/src/components/common/BaseCard'
import { Textfield } from '@/src/components/form/Textfield'
import { BaseTitle } from '@/src/components/text/BaseTitle'
import { SubgraphName, getSubgraphSdkByNetwork } from '@/src/constants/subgraph'
import { useWeb3Connection } from '@/src/providers/web3ConnectionProvider'

// @todo (agustin) extract all this to generic components
const Label = styled.label`
  color: ${({ theme: { colors } }) => colors.textColor};
  display: block;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 8px;
  white-space: nowrap;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Title = styled(BaseTitle)`
  text-align: center;
  margin-bottom: 16px;
`

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Form = styled.form`
  width: 100%;
`

const CustomItemList = styled.li`
  margin-bottom: 2rem;
`

const SubTitle = styled(Label)`
  font-size: 1.8rem;
  font-weight: 600;
`

const EvidenceTextContainer = styled.div`
  display: flex;
`

const TextLink = styled.a`
  text-decoration: underline;
`

const Text = styled(Label)`
  font-size: 1.4rem;
`

type Props = {
  badgeTypeId: string
}

const MintGithub: FC<Props> = ({ badgeTypeId }: Props) => {
  const { address, appChainId, isAppConnected } = useWeb3Connection()
  const t = useTranslations('badgeMint')
  const gql = getSubgraphSdkByNetwork(appChainId, SubgraphName.TheBadge)
  const badgeType = gql.useBadgeType({ id: badgeTypeId })

  if (!isAppConnected) {
    return <div>Connect your wallet to continue</div>
  }

  if (!badgeType.data?.badgeType) {
    return <div>Badge type not found</div>
  }

  const evidenceText = ''
  const githubEvidenceURL = ''

  return (
    <Wrapper>
      <Title>{t('title')}</Title>
      <RowWrapper>
        <Form>
          <BaseCard>
            <SubTitle>{t('subtitle')}</SubTitle>
            <ol>
              <CustomItemList>
                <Text>Copy the following text:</Text>
                <EvidenceTextContainer>
                  <Textfield disabled={true} value={evidenceText} />
                </EvidenceTextContainer>
              </CustomItemList>
              <CustomItemList>
                <Text>
                  Paste the text in a new commit on the following
                  <TextLink href={githubEvidenceURL} rel="noreferrer" target="_blank">
                    repository.
                  </TextLink>
                </Text>
              </CustomItemList>
              <CustomItemList>
                <Text>
                  Please note that the commit should be done with the github user you are trying to
                  obtain a badge for.
                </Text>
              </CustomItemList>
              <CustomItemList>
                <Text>Finally paste the commit hash and press submit.</Text>
                <EvidenceTextContainer>
                  <Textfield placeholder={t('commitInputPlaceholder')} />
                </EvidenceTextContainer>
              </CustomItemList>
            </ol>
          </BaseCard>
        </Form>
      </RowWrapper>
    </Wrapper>
  )
}

export default MintGithub
