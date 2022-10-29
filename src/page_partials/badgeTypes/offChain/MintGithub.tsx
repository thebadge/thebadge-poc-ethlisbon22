import { FC } from 'react'
import styled from 'styled-components'

import { useTranslations } from 'next-intl'

import { BaseCard } from '@/src/components/common/BaseCard'
import { BaseTitle } from '@/src/components/text/BaseTitle'
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

const SubTitle = styled(Label)`
  font-size: 1.8rem;
  font-weight: 600;
`

type Props = {
  badgeTypeId: string
}

const MintGithub: FC<Props> = ({ badgeTypeId }: Props) => {
  const { address, appChainId, isAppConnected } = useWeb3Connection()
  const t = useTranslations('badgeMint')

  if (!isAppConnected) {
    return null
  }

  return (
    <Wrapper>
      <Title>{t('title')}</Title>
      <RowWrapper>
        <Form>
          <BaseCard>
            <SubTitle>{t('subtitle')}</SubTitle>
          </BaseCard>
        </Form>
      </RowWrapper>
    </Wrapper>
  )
}

export default MintGithub
