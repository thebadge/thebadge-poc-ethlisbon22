import React from 'react'
import styled from 'styled-components'

import { BadgePreview } from 'thebadge-ui-library'

import { BadgeMetadata, BadgeType, BadgeTypeMetadata } from '@/src/constants/types'
import useMetadata from '@/src/hooks/useMetadata'

const BadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 450px;
  margin-left: 3rem;
  margin-top: 3rem;
`

type BadgeCardPreviewProps = {
  badge: BadgeType
  userAddress: string
}

export const BadgeCardPreview = ({ badge }: BadgeCardPreviewProps) => {
  const { badgeType, evidenceMetadataUrl } = badge
  const badgeMetadata =
    (useMetadata(`${evidenceMetadataUrl}/metadata.json`) as unknown as BadgeMetadata) || null
  const badgeTypeMetadata =
    (useMetadata(`${badgeType.metadataURL}`) as unknown as BadgeTypeMetadata) || null

  if (!badgeMetadata || !badgeMetadata || !badgeTypeMetadata) {
    return (
      <BadgeContainer>
        The metadata of the badge could not get recovered, please try again...
      </BadgeContainer>
    )
  }

  const { evidence } = badgeMetadata
  const evidenceUrl = `https://github.com/${evidence.githubUser}`

  return (
    <BadgeContainer>
      <BadgePreview
        animationOnHover={true}
        badgeCategory="OFFCHAIN"
        badgeType="GITHUB"
        badgeUrl={evidenceUrl}
        imageUrl={badgeTypeMetadata?.image || ''}
        onClick={() => {
          const newWindow = window.open(evidenceUrl, '_blank', 'noopener,noreferrer')
          if (newWindow) newWindow.opener = null
        }}
        size={300}
        title={`@${evidence.githubUser}`}
      />
    </BadgeContainer>
  )
}
