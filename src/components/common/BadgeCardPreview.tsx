import React from 'react'
import styled from 'styled-components'

import { BadgePreview } from 'thebadge-ui-library'

const BadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 450px;
  margin-left: 3rem;
  margin-top: 3rem;
`

type BadgeCardPreviewProps = {
  badge: unknown
  userAddress: string
}

export const BadgeCardPreview = ({ badge }: BadgeCardPreviewProps) => {
  // TODO get badge metadata and badge type metadata
  const badgeMetadata = null
  const badgeTypeMetadata = { image: '' }

  // if (!badgeMetadata || !badgeMetadata || !badgeTypeMetadata) {
  //   return (
  //     <BadgeContainer>
  //       The metadata of the badge could not get recovered, please try again...
  //     </BadgeContainer>
  //   )
  // }

  // TODO get badge title from data
  const badgeTitle = 'Badge'

  // TODO get evidence url
  const evidenceUrl = 'https://sample.com'

  return (
    <BadgeContainer>
      <BadgePreview
        animationOnHover={true}
        badgeCategory="OFFCHAIN"
        badgeType="GITHUB"
        badgeUrl={evidenceUrl}
        imageUrl={badgeTypeMetadata?.image}
        onClick={() => {
          const newWindow = window.open(evidenceUrl, '_blank', 'noopener,noreferrer')
          if (newWindow) newWindow.opener = null
        }}
        size={300}
        title={badgeTitle}
      />
    </BadgeContainer>
  )
}
