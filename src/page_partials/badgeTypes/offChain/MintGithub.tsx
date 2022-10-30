import { FC, useState } from 'react'
import styled from 'styled-components'

import axios from 'axios'
import { useTranslations } from 'next-intl'

import { GetCommitInformationResponse } from '@/pages/api/getCommitInformation'
import { ButtonPrimary } from '@/src/components/buttons/Button'
import { CopyButton } from '@/src/components/buttons/CopyButton'
import { BaseCard } from '@/src/components/common/BaseCard'
import { ButtonWrapper } from '@/src/components/common/ButtonWrapper'
import { Error } from '@/src/components/form/Error'
import { Textfield } from '@/src/components/form/Textfield'
import { BaseTitle } from '@/src/components/text/BaseTitle'
import { githubCommitUrl, githubEvidenceURL } from '@/src/constants/common'
import { SubgraphName, getSubgraphSdkByNetwork } from '@/src/constants/subgraph'
import OffChainDetails from '@/src/page_partials/badgeTypes/offChain/Details'
import MintGithubPreview from '@/src/page_partials/badgeTypes/offChain/MintGithubPreview'
import { useWeb3Connection } from '@/src/providers/web3ConnectionProvider'
import { getGithubEvidence } from '@/src/utils/evidence'
import { isValidSHA1 } from '@/src/utils/isValidSHA1'

// @todo (agustin) extract all this to generic components
const Label = styled.label`
  color: ${({ theme: { colors } }) => colors.textColor};
  display: block;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 8px;
`

const Form = styled.form`
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakPoints.tabletPortraitStart}) {
    margin-top: 20px;
  }
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
  text-decoration: underline !important;
`

const Text = styled(Label)`
  font-size: 1.4rem;
  @media (max-width: ${({ theme }) => theme.breakPoints.tabletPortraitStart}) {
  }
`
const Card = styled(BaseCard)`
  margin-top: 32px;
  min-height: 300px;
`

const CardTitle = styled(BaseTitle)`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 18px;
  font-weight: 800;
`
const SectionContainer = styled.div``

const Content = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${({ theme }) => theme.breakPoints.tabletPortraitStart}) {
    flex-direction: column;
    align-items: center;
  }
`

type Props = {
  badgeTypeId: string
}

type FormData = {
  commitHash: string
  valid: boolean
  errorMessage: string
}

const MintButton = styled(ButtonPrimary)`
  font-weight: 700;
  font-size: 14px;
  border-radius: 8px;
  margin-top: 16px;
  width: 160px;
  height: 32px;
`

const initState = {
  commitHash: '',
  valid: true,
  errorMessage: '',
}

const MintGithub: FC<Props> = ({ badgeTypeId }: Props) => {
  const { address, appChainId, isAppConnected } = useWeb3Connection()
  const t = useTranslations('badgeMint')
  const gql = getSubgraphSdkByNetwork(appChainId, SubgraphName.TheBadge)
  const badgeType = gql.useBadgeType({ id: badgeTypeId })
  const [formData, setFormData] = useState<FormData>(initState)
  const [previewMode, setPreviewMode] = useState<{
    commitUrl: string
    githubUser: string
    githubUserUrl: string
  } | null>(null)
  const evidenceText = getGithubEvidence(address!)

  const onSubmit = async () => {
    try {
      const { commitHash } = formData
      const result = await axios.post<GetCommitInformationResponse>('/api/getCommitInformation', {
        commitHash,
        userAddress: address,
      })
      const githubOwner = result.data.githubOwner as string
      setPreviewMode({
        commitUrl: `${githubCommitUrl}/commit/${commitHash}`,
        githubUser: githubOwner,
        githubUserUrl: `https://github.com/${githubOwner}`,
      })
    } catch (error: any) {
      console.log('Error fetching commit information:', error.response.data)
      const { errorMessage } = error.response.data
      setFormData({
        commitHash: '',
        valid: false,
        errorMessage: errorMessage.message,
      })
    }
  }

  const updateCommitHash = (hash: string) => {
    const valid = isValidSHA1(hash)
    setFormData({
      commitHash: hash,
      valid,
      errorMessage: valid ? '' : 'The given commit hash is invalid',
    })
  }

  if (!isAppConnected) {
    return <div>Connect your wallet to continue</div>
  }

  if (!badgeType.data?.badgeType) {
    return <div>Badge type not found</div>
  }

  if (previewMode) {
    return (
      <MintGithubPreview
        {...previewMode}
        badgeTypeInfo={badgeType.data.badgeType}
        onCancel={() => setPreviewMode(null)}
      />
    )
  }

  return (
    <Card>
      <CardTitle>{t('title')}</CardTitle>
      <SectionContainer>
        <Content>
          <OffChainDetails badgeType={badgeType.data.badgeType} summary />
          <Form>
            <BaseCard>
              <SubTitle>{t('subtitle')}</SubTitle>
              <ol>
                <CustomItemList>
                  <Text>1. {t('step1')}</Text>
                  <EvidenceTextContainer>
                    <Textfield disabled={true} value={evidenceText} />
                    <CopyButton copyValue={evidenceText} type={'button'} />
                  </EvidenceTextContainer>
                </CustomItemList>
                <CustomItemList>
                  <Text>
                    2. {t('step2a')}
                    <TextLink href={githubEvidenceURL} rel="noreferrer" target="_blank">
                      {t('step2b')}
                    </TextLink>
                  </Text>
                  <Text>{t('step2c')}</Text>
                </CustomItemList>
                <CustomItemList>
                  <Text>3. {t('step3')}</Text>
                  <EvidenceTextContainer>
                    <Textfield
                      onChange={(event) => updateCommitHash(event.target.value)}
                      placeholder={t('commitInputPlaceholder')}
                    />
                  </EvidenceTextContainer>
                  <Error>{formData.valid ? null : formData.errorMessage}</Error>
                </CustomItemList>
              </ol>
            </BaseCard>
          </Form>
        </Content>

        <ButtonWrapper>
          <MintButton
            disabled={!formData.commitHash || !formData.valid}
            onClick={() => onSubmit()}
            type="button"
          >
            {t('submit')}
          </MintButton>
        </ButtonWrapper>
      </SectionContainer>
    </Card>
  )
}

export default MintGithub
