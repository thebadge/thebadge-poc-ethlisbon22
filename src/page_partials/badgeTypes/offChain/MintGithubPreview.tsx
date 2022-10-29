import { useRouter } from 'next/router'
import { FC } from 'react'
import styled from 'styled-components'

import { ButtonDanger, ButtonPrimary } from '@/src/components/buttons/Button'
import { ButtonWrapper } from '@/src/components/buttons/ButtonWrapper'
import { BaseCard } from '@/src/components/common/BaseCard'
import { Label } from '@/src/components/form/Label'
import { BaseTitle } from '@/src/components/text/BaseTitle'
import { useWeb3Connection } from '@/src/providers/web3ConnectionProvider'

const BadgeStatus = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`

const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  height: 200px;
  width: 100%;
`

// @todo (agustin) replace with ui library
const BadgeCard = styled(BaseCard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background: black;
`

type Props = {
  commitUrl: string
  githubUserUrl: string
  onCancel: () => void
}

const MintGithubPreview: FC<Props> = ({ commitUrl, githubUserUrl, onCancel }: Props) => {
  const router = useRouter()
  const { address } = useWeb3Connection()

  if (!address || !router.query) {
    return null
  }

  const mintBadge = async () => {
    // @todo (agustin)
    // First upload metadata
    // Second create the badge with TheBadge contract
    // Redirect to creation page
  }

  return (
    <>
      <BaseTitle>Badge creation preview</BaseTitle>
      <BadgeStatus>This is how your new badge will look:</BadgeStatus>
      <BadgeContainer>
        <BadgeCard>
          <Label>Github account:</Label>
          <Label>
            <a href={githubUserUrl} rel="noreferrer" target="_blank">
              {githubUserUrl}
            </a>
          </Label>
          <Label>User address:</Label>
          <Label>{address}</Label>
          <Label>
            <a href={commitUrl} rel="noreferrer" target="_blank">
              Your evidence (Commit)
            </a>
          </Label>
        </BadgeCard>
      </BadgeContainer>
      <ButtonWrapper>
        <ButtonPrimary onClick={mintBadge} type="button">
          Submit
        </ButtonPrimary>
        <ButtonDanger onClick={onCancel} type="button">
          Cancel
        </ButtonDanger>
      </ButtonWrapper>
    </>
  )
}

export default MintGithubPreview
