import { FC, useState } from 'react'
import styled from 'styled-components'

import axios from 'axios'
import { useTranslations } from 'next-intl'

import { GetCommitInformationResponse } from '@/pages/api/getCommitInformation'
import { ButtonPrimary } from '@/src/components/buttons/Button'
import { CopyButton } from '@/src/components/buttons/CopyButton'
import { BaseCard } from '@/src/components/common/BaseCard'
import { ButtonWrapper } from '@/src/components/common/ButtonWrapper'
import { Textfield } from '@/src/components/form/Textfield'
import { BaseTitle } from '@/src/components/text/BaseTitle'
import { githubCommitUrl, githubEvidenceURL } from '@/src/constants/common'
import { SubgraphName, getSubgraphSdkByNetwork } from '@/src/constants/subgraph'
import MintGithubPreview from '@/src/page_partials/badgeTypes/offChain/MintGithubPreview'
import { useWeb3Connection } from '@/src/providers/web3ConnectionProvider'
import { getGithubEvidence } from '@/src/utils/evidence'

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
    // @todo (agustin) validate hash
    const valid = true
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
                  <CopyButton copyValue={evidenceText} type={'button'} />
                </EvidenceTextContainer>
              </CustomItemList>
              <CustomItemList>
                <Text>
                  Paste the text in a new commit on the following
                  <TextLink href={githubEvidenceURL} rel="noreferrer" target="_blank">
                    {' '}
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
                  <Textfield
                    onChange={(event) => updateCommitHash(event.target.value)}
                    placeholder={t('commitInputPlaceholder')}
                  />
                </EvidenceTextContainer>
              </CustomItemList>
            </ol>
          </BaseCard>
        </Form>
      </RowWrapper>
      <ButtonWrapper>
        <MintButton
          disabled={!formData.commitHash || !formData.valid}
          onClick={() => onSubmit()}
          type="button"
        >
          {t('submit')}
        </MintButton>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default MintGithub
