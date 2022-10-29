import React from 'react'
import styled from 'styled-components'

import { BadgePreview } from 'thebadge-ui-library'

import { GITHUB_IMAGE_URL } from '@/src/utils/evidence'
import { textShortener } from '@/src/utils/tools'

type CustomBadgePreviewProps = {
  githubUser: string
  commitUrl: string
  githubUserUrl: string
  address: string
}

const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  width: 100%;
`

// @todo (agustin) replace with generic
export const GithubBadgePreview = ({
  address,
  commitUrl,
  githubUser,
  githubUserUrl,
}: CustomBadgePreviewProps) => {
  const shortener = textShortener({ charsStart: 10, charsEnd: 10 })
  return (
    <BadgeContainer>
      <BadgePreview
        animationOnHover={true}
        badgeCategory="OFFCHAIN"
        badgeType="GITHUB"
        badgeUrl={commitUrl}
        height={300}
        imageUrl={GITHUB_IMAGE_URL}
        onClick={() => {
          const newWindow = window.open(githubUserUrl, '_blank', 'noopener,noreferrer')
          if (newWindow) newWindow.opener = null
        }}
        size={300}
        subline={`${shortener(address)}`}
        title={`@${githubUser}`}
      />
    </BadgeContainer>
  )
}
