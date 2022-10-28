import Link from 'next/link'
import styled from 'styled-components'

import { formatEther } from 'ethers/lib/utils'
import { useTranslations } from 'next-intl'
import { Button, LogoTheBadge } from 'thebadge-ui-library'

import { ipfsGateway } from '@/src/constants/common'
import useMetadata from '@/src/hooks/useMetadata'
import { BadgeTypesQuery } from '@/types/generated/subgraph'

const Box = styled.div`
  background-color: ${({ theme: { colors } }) => colors.tertiary};
  border-radius: 15px;
  color: black;

  padding: 10px;
  width: 200px;

  display: flex;
  flex-direction: column;
`

const Img = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100px;
`

type Props = {
  badgeType: BadgeTypesQuery['badgeTypes'][number]
  summary?: boolean
}

function OffChainDetails({ badgeType, summary, ...rest }: Props) {
  const t = useTranslations('pagePartials.badgeType.offChainDetails')
  const metadata =
    (useMetadata(badgeType.metadataURL) as {
      name: string
      description: string
      image: string
    }) || {}

  const klerosMetadata =
    (useMetadata(badgeType.klerosMetadataURL) as unknown as {
      fileURI: string
    }) || {}

  return (
    <Box {...rest}>
      <span>
        {metadata?.image ? (
          <Img alt="Badge type logo" src={metadata?.image || ''} />
        ) : (
          <LogoTheBadge size={50} />
        )}
      </span>
      <div>{metadata.name || 'Badge'}</div>
      <div>{metadata.description}</div>

      {!summary && (
        <>
          <div>
            <a href={`${ipfsGateway}${klerosMetadata?.fileURI}`} rel="noreferrer" target="_blank">
              {t('criteria')}
            </a>
          </div>

          <div>badges minted: {badgeType.badgesMintedAmount}</div>
          <div>
            {t('mintCost')}: {formatEther(badgeType.mintCost)}
          </div>
          <div>
            {t('mintFee')}: {formatEther(badgeType.mintFee)}
          </div>
          <div>
            {t('deposit')}: {formatEther(badgeType.klerosDeposit)}
          </div>

          <Link href={`/badgeType/offChain/${badgeType.id}`} passHref>
            <Button>{t('getBadge')}</Button>
          </Link>
        </>
      )}
    </Box>
  )
}

export default OffChainDetails
