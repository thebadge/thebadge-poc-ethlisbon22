import Link from 'next/link'
import styled from 'styled-components'

import { formatEther } from 'ethers/lib/utils'
import { useTranslations } from 'next-intl'
import { LogoTheBadge } from 'thebadge-ui-library'

import { ButtonPrimary } from '@/src/components/buttons/Button'
import { genericSuspense } from '@/src/components/helpers/SafeSuspense'
import { ipfsGateway } from '@/src/constants/common'
import useMetadata from '@/src/hooks/useMetadata'
import { BadgeTypesQuery } from '@/types/generated/subgraph'

const Box = styled.div`
  border: 1px solid ${({ theme: { colors } }) => colors.darkGreen};
  box-shadow: 0 0 4px #f6f3f382;
  border-radius: 15px;
  color: ${({ theme: { colors } }) => colors.textColor};

  padding: 10px;
  width: 200px;

  display: flex;
  flex-direction: column;
`

const Text = styled.div`
  white-space: nowrap;
  min-width: 0;
  text-overflow: ellipsis;
  color: ${({ theme: { colors } }) => colors.textColor};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
`

const Name = styled(Text)`
  font-weight: 700;
  margin-top: 8px;
`

const Description = styled(Text)`
  margin-top: 8px;
  white-space: break-spaces;
  font-size: 14px;
`

const Criteria = styled(Text)`
  margin-top: 8px;
  font-weight: 700;
  margin-bottom: 4px;
`

const Cost = styled(Text)`
  margin-left: 4px;
  font-weight: 700;
  font-size: 10px;
`

const Img = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100px;
`

const GetButton = styled(ButtonPrimary)`
  font-weight: 700;
  font-size: 14px;
  border-radius: 8px;
  margin-top: 16px;
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
      <Name>{metadata.name || 'Badge'}</Name>
      <Description>{metadata.description}</Description>

      {!summary && (
        <>
          <Criteria>
            <a href={`${ipfsGateway}${klerosMetadata?.fileURI}`} rel="noreferrer" target="_blank">
              {t('criteria')}
            </a>
          </Criteria>

          <div>badges minted: {badgeType.badgesMintedAmount}</div>
          <Cost>
            {t('mintCost')}: {formatEther(badgeType.mintCost)}
          </Cost>
          <Cost>
            {t('mintFee')}: {formatEther(badgeType.mintFee)}
          </Cost>
          <Cost>
            {t('deposit')}: {formatEther(badgeType.klerosDeposit)}
          </Cost>

          <Link href={`/badgeType/offChain/${badgeType.id}`} passHref>
            <GetButton>{t('getBadge')}</GetButton>
          </Link>
        </>
      )}
    </Box>
  )
}

export default genericSuspense(OffChainDetails)
