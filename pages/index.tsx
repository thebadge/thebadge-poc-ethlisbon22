import type { NextPage } from 'next'
import styled from 'styled-components'

import ms from 'ms'
import { useTranslations } from 'next-intl'

import { BaseCard } from '@/src/components/common/BaseCard'
import { BaseTitle } from '@/src/components/text/BaseTitle'

const Card = styled(BaseCard)`
  min-height: 300px;
`

const Home: NextPage = () => {
  const t = useTranslations('home')

  return (
    <>
      <BaseTitle>{t('badgeTypes')}</BaseTitle>
      <Card>{'Main card here'}</Card>
    </>
  )
}

export default Home
