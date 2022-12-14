import React from 'react'
import styled from 'styled-components'

import { LogoWithText } from '@/src/components/assets/LogoWithText'
import { GithubBadgePreview } from '@/src/components/githubBadgePreview/GithubBadgePreview'
import { BadgeMetadata, BadgeType, BadgeTypeMetadata } from '@/src/constants/types'
import useMetadata from '@/src/hooks/useMetadata'

const BadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 450px;
  margin-left: 3rem;
  margin-top: 3rem;
  justify-content: center;
  align-items: center;
`

const BadgeContainerError = styled(BadgeContainer)`
  border: 2px solid ${({ theme: { colors } }) => colors.darkGreen};
  border-radius: 8px;
  padding: 16px;
`
const BadgeMetadataErrorMessage = styled.div`
  padding: 8px;
  font-size: 16px;
  text-align: center;
`

type BadgeCardPreviewProps = {
  badge: BadgeType
}

export const BadgeCardPreview = ({ badge }: BadgeCardPreviewProps) => {
  const { badgeType, evidenceMetadataUrl } = badge
  const badgeMetadata = (useMetadata(evidenceMetadataUrl) as unknown as BadgeMetadata) || null
  const badgeTypeMetadata =
    (useMetadata(`${badgeType.metadataURL}`) as unknown as BadgeTypeMetadata) || null

  if (!badgeMetadata || !badgeMetadata || !badgeTypeMetadata) {
    return (
      <BadgeContainerError>
        <LogoWithText />
        <BadgeMetadataErrorMessage>
          <div>The metadata of the badge could not get recovered.</div>
          <div>Please try again.</div>
        </BadgeMetadataErrorMessage>
      </BadgeContainerError>
    )
  }

  const { evidence } = badgeMetadata
  const githubUserUrl = `https://github.com/${evidence.githubUser}`

  return (
    <BadgeContainer>
      <GithubBadgePreview
        address={badgeMetadata.userAddress}
        githubUser={evidence.githubUser}
        githubUserUrl={githubUserUrl}
      />
    </BadgeContainer>
  )
}
