import { NextPage } from 'next'
import styled from 'styled-components'

import { BaseTitle } from '@/src/components/text/BaseTitle'
import { useWeb3Connection } from '@/src/providers/web3ConnectionProvider'

const BadgeStatusContainer = styled.div`
  display: flex;
  height: 80vh;
  width: 100%;
  justify-content: center;
`

const BadgeStatus = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  font-size: 1.2rem;
`

const BadgeMinted: NextPage = () => {
  const { address } = useWeb3Connection()
  return (
    <>
      <BaseTitle>Badge Status</BaseTitle>
      <BadgeStatusContainer>
        <BadgeStatus>
          <span>
            Your badge has been sent to Kleros for approval. After the probation period you will see
            it on your <a href={`/profile/${address}`}>profile.</a>
          </span>
        </BadgeStatus>
      </BadgeStatusContainer>
    </>
  )
}

export default BadgeMinted
