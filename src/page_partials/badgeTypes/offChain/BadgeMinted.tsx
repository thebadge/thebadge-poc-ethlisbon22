import { NextPage } from 'next'
import styled from 'styled-components'

import { useAccount } from '@web3modal/react'

import { BaseTitle } from '@/src/components/text/BaseTitle'

const BadgeStatusContainer = styled.div`
  display: flex;
  height: 80vh;
  width: 100%;
  justify-content: center;
`

const BadgeStatus = styled.div`
  display: flex;
  align-items: center;
`

const BadgeMinted: NextPage = () => {
  const { account } = useAccount()
  const { address } = account
  return (
    <>
      <BaseTitle>Badge Status</BaseTitle>
      <BadgeStatusContainer>
        <BadgeStatus>
          Your badge has been sent to Kleros for approval. After the probation period you will see
          it on your <a href={`/profile/${address}`}>profile.</a>
        </BadgeStatus>
      </BadgeStatusContainer>
    </>
  )
}

export default BadgeMinted
