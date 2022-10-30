import React, { FC, useState } from 'react'
import styled from 'styled-components'

import axios from 'axios'

import { ButtonDanger, ButtonPrimary } from '@/src/components/buttons/Button'
import { ButtonWrapper } from '@/src/components/buttons/ButtonWrapper'
import { GithubBadgePreview } from '@/src/components/githubBadgePreview/GithubBadgePreview'
import { BaseTitle } from '@/src/components/text/BaseTitle'
import { BadgeMetadata } from '@/src/constants/types'
import { useContractInstance } from '@/src/hooks/useContractInstance'
import useTransaction from '@/src/hooks/useTransaction'
import BadgeMinted from '@/src/page_partials/badgeTypes/offChain/BadgeMinted'
import { useWeb3Connection } from '@/src/providers/web3ConnectionProvider'
import { getGithubImage } from '@/src/utils/evidence'
import { BadgeTypeQuery } from '@/types/generated/subgraph'
import { TheBadge__factory } from '@/types/typechain'

const BadgeStatus = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  font-size: 1.6rem;
`

type Props = {
  commitUrl: string
  githubUser: string
  githubUserUrl: string
  onCancel: () => void
  badgeTypeInfo: NonNullable<BadgeTypeQuery['badgeType']>
}

const MintGithubPreview: FC<Props> = ({
  badgeTypeInfo,
  commitUrl,
  githubUser,
  githubUserUrl,
  onCancel,
}: Props) => {
  const { address } = useWeb3Connection()
  const [badgeCreatedStatus, setBadgeCreatedStatus] = useState(false)
  const theBadge = useContractInstance(TheBadge__factory, 'TheBadge')
  const sendTx = useTransaction()
  const [mintStarted, setMintStarted] = useState(false)

  if (!address) {
    return null
  }

  if (!badgeCreatedStatus) {
    return <BadgeMinted />
  }

  const mintBadge = async () => {
    try {
      setMintStarted(true)
      // First upload metadata
      const badgeMetadata: BadgeMetadata = {
        name: 'Github',
        description: 'Link a github account with an ethereum address',
        userAddress: address,
        image: await getGithubImage(),
        evidence: {
          githubUser,
          commitUrl,
        },
      }

      const { data: ipfsEvidenceUrl } = await axios.post('/api/ipfsUploadJson', badgeMetadata)

      // Second create the badge with TheBadge contract
      await sendTx(async () => {
        const res = await theBadge.mintBadgeFromKlerosStrategy(badgeTypeInfo.id, ipfsEvidenceUrl, {
          value: badgeTypeInfo.feeAndDeposit,
        })
        setBadgeCreatedStatus(true)
        return res
      })
    } catch (error) {
      console.log('Error minting a badge from kleros strategy...', error)
    } finally {
      setMintStarted(false)
    }
  }

  return (
    <>
      <BaseTitle>Badge creation preview</BaseTitle>
      <BadgeStatus>This is how your new badge will look:</BadgeStatus>
      <GithubBadgePreview address={address} githubUser={githubUser} githubUserUrl={githubUserUrl} />
      <ButtonWrapper>
        <ButtonPrimary disabled={mintStarted} onClick={mintBadge} type="button">
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
