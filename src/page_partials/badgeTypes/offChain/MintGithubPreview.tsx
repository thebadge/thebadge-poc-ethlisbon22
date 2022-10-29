import { FC, useState } from 'react'
import styled from 'styled-components'

import axios from 'axios'

import { ButtonDanger, ButtonPrimary } from '@/src/components/buttons/Button'
import { ButtonWrapper } from '@/src/components/buttons/ButtonWrapper'
import { BaseCard } from '@/src/components/common/BaseCard'
import { Label } from '@/src/components/form/Label'
import { BaseTitle } from '@/src/components/text/BaseTitle'
import { BadgeMetadata } from '@/src/constants/types'
import BadgeMinted from '@/src/page_partials/badgeTypes/offChain/BadgeMinted'
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
  githubUser: string
  githubUserUrl: string
  onCancel: () => void
}

const MintGithubPreview: FC<Props> = ({
  commitUrl,
  githubUser,
  githubUserUrl,
  onCancel,
}: Props) => {
  const { address } = useWeb3Connection()
  const [badgeCreatedStatus, setBadgeCreatedStatus] = useState(false)

  if (!address) {
    return null
  }

  if (badgeCreatedStatus) {
    return <BadgeMinted />
  }

  const mintBadge = async () => {
    // @todo (agustin)

    try {
      // First upload metadata
      const badgeMetadata: BadgeMetadata = {
        name: 'Github',
        description: 'Link a github account with an ethereum address',
        userAddress: address,
        evidence: {
          githubUser,
          commitUrl,
        },
      }

      const { data: ipfsEvidenceUrl } = await axios.post('/api/ipfsUploadJson', badgeMetadata)

      console.log('ipfs', ipfsEvidenceUrl)
      // Second create the badge with TheBadge contract
      // @todo (agustin)

      // Redirect to creation page
      setBadgeCreatedStatus(true)
    } catch (error) {
      console.log('Error minting a badge from kleros strategy...', error)
    }
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
