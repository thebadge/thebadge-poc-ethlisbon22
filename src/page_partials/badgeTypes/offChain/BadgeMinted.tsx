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
  flex-direction: column;
  margin-top: 32px;
  column-gap: 16px;
  align-items: center;
`

const Label = styled.label`
  color: ${({ theme: { colors } }) => colors.textColor};
  display: block;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 8px;
`

const SubTitle = styled(Label)`
  font-size: 1.8rem;
  font-weight: 600;

  text-align: center;
`

const Img = styled.img`
  height: 200px;
`

const BadgeMinted: NextPage = () => {
  const { account } = useAccount()
  const { address } = account
  return (
    <>
      <BaseTitle>Badge Status</BaseTitle>
      <BadgeStatusContainer>
        <BadgeStatus>
          <Img src="/certification.png" />
          <SubTitle>Your badge has been sent to Kleros for approval.</SubTitle>
          <Label>
            After the probation period you will see it on your{' '}
            <a href={`/profile/${address}`}>profile.</a>
          </Label>
        </BadgeStatus>
      </BadgeStatusContainer>
    </>
  )
}

export default BadgeMinted
