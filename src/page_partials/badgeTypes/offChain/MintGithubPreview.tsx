import React, { FC, useState } from 'react'
import styled from 'styled-components'

import { useAccount } from '@web3modal/react'
import axios from 'axios'

import { ButtonDanger, ButtonPrimary } from '@/src/components/buttons/Button'
import { ButtonWrapper } from '@/src/components/buttons/ButtonWrapper'
import { GithubBadgePreview } from '@/src/components/githubBadgePreview/GithubBadgePreview'
import { BaseTitle } from '@/src/components/text/BaseTitle'
import { BadgeMetadata } from '@/src/constants/types'
import { useContractInstance } from '@/src/hooks/useContractInstance'
import useTransaction from '@/src/hooks/useTransaction'
import BadgeMinted from '@/src/page_partials/badgeTypes/offChain/BadgeMinted'
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

const ButtonWrapperStyled = styled(ButtonWrapper)`
  @media (max-width: ${({ theme }) => theme.breakPoints.tabletPortraitStart}) {
    flex-direction: column;
  }
`

const ButtonSubmit = styled(ButtonPrimary)`
  font-weight: 700;
  font-size: 14px;
  border-radius: 8px;
  margin-top: 16px;
  width: 160px;
  height: 32px;

  @media (max-width: ${({ theme }) => theme.breakPoints.tabletPortraitStart}) {
    margin-top: 0;
    width: 260px;
    height: 40px;
  }
`

const ButtonCancel = styled(ButtonDanger)`
  font-weight: 700;
  font-size: 14px;
  border-radius: 8px;
  margin-top: 16px;
  width: 160px;
  height: 32px;

  @media (max-width: ${({ theme }) => theme.breakPoints.tabletPortraitStart}) {
    width: 260px;
    height: 40px;
  }
`

const MintGithubPreview: FC<Props> = ({
  badgeTypeInfo,
  commitUrl,
  githubUser,
  githubUserUrl,
  onCancel,
}: Props) => {
  const { account } = useAccount()
  const { address } = account
  const [badgeCreatedStatus, setBadgeCreatedStatus] = useState(false)
  const theBadge = useContractInstance(TheBadge__factory, 'TheBadge')
  const sendTx = useTransaction()
  const [submitStarted, setSubmitStarted] = useState(false)

  if (!address) {
    return null
  }

  if (!badgeCreatedStatus) {
    return <BadgeMinted />
  }

  const mintBadge = async () => {
    try {
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
        // @todo (agustin) this partially fix the issue with the network change
        // seems that we need to call two times the sendTransaction in order to make it work
        // the first one it call the refetch and the update of the network starts
        // the second time the network is ok and the tx goes well, seems that there is an issue with wallet connect
        // this means that the submit button has to be pressed two times in order for the tx to work
        setSubmitStarted(true)
        await theBadge.refetch()
        const res = await theBadge.contract.mintBadgeFromKlerosStrategy(
          badgeTypeInfo.id,
          ipfsEvidenceUrl,
          {
            value: badgeTypeInfo.feeAndDeposit,
          },
        )
        setBadgeCreatedStatus(true)
        return res
      })
    } catch (error) {
      console.log('Error minting a badge from kleros strategy...', error)
    } finally {
      setSubmitStarted(false)
    }
  }

  return (
    <>
      <BaseTitle>Badge creation preview</BaseTitle>
      <BadgeStatus>This is how your new badge will look:</BadgeStatus>
      <GithubBadgePreview address={address} githubUser={githubUser} githubUserUrl={githubUserUrl} />
      <ButtonWrapperStyled>
        <ButtonSubmit disabled={submitStarted} onClick={mintBadge} type="button">
          Submit
        </ButtonSubmit>
        <ButtonCancel onClick={onCancel} type="button">
          Cancel
        </ButtonCancel>
      </ButtonWrapperStyled>
    </>
  )
}

export default MintGithubPreview
