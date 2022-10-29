import { NextPage } from 'next'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { useTranslations } from 'next-intl'

import { BadgeCardPreview } from '@/src/components/common/BadgeCardPreview'
import { BaseTitle } from '@/src/components/text/BaseTitle'
import { SubgraphName, getSubgraphSdkByNetwork } from '@/src/constants/subgraph'
import { BadgeType } from '@/src/constants/types'
import { useWeb3Connection } from '@/src/providers/web3ConnectionProvider'

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 3rem;
`

const BadgeListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const SubTitle = styled(BaseTitle)`
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  margin-top: 32px;
  margin-bottom: 16px;
`

const test = [
  {
    id: '1-0x6230a918266d27ce0abd576b32b6a0516dba39d3',
    status: 'InReview',
    badgeType: {
      metadataURL:
        'ipfs://bafyreihv7k4vupbhwjlvyjlkdwsi7j2ttwkt3lbqkuctas43f2ausuq4ga/metadata.json',
      klerosMetadataURL: '/ipfs/bafkreih2ngblf5wdpnxdbkans76nyjge24zlpduujt2ea3lxwpjl6lrpiq',
    },
    user: {
      mintedBadges: 10,
    },
  },
  {
    id: '2-0x6230a918266d27ce0abd576b32b6a0516dba39d3',
    status: 'InReview',
    badgeType: {
      metadataURL:
        'ipfs://bafyreihv7k4vupbhwjlvyjlkdwsi7j2ttwkt3lbqkuctas43f2ausuq4ga/metadata.json',
      klerosMetadataURL: '/ipfs/bafkreih2ngblf5wdpnxdbkans76nyjge24zlpduujt2ea3lxwpjl6lrpiq',
    },
    user: {
      mintedBadges: 10,
    },
  },
  {
    id: '3-0x6230a918266d27ce0abd576b32b6a0516dba39d3',
    status: 'InReview',
    badgeType: {
      metadataURL:
        'ipfs://bafyreihv7k4vupbhwjlvyjlkdwsi7j2ttwkt3lbqkuctas43f2ausuq4ga/metadata.json',
      klerosMetadataURL: '/ipfs/bafkreih2ngblf5wdpnxdbkans76nyjge24zlpduujt2ea3lxwpjl6lrpiq',
    },
    user: {
      mintedBadges: 10,
    },
  },
  {
    id: '4-0x6230a918266d27ce0abd576b32b6a0516dba39d3',
    status: 'InReview',
    badgeType: {
      metadataURL:
        'ipfs://bafyreihv7k4vupbhwjlvyjlkdwsi7j2ttwkt3lbqkuctas43f2ausuq4ga/metadata.json',
      klerosMetadataURL: '/ipfs/bafkreih2ngblf5wdpnxdbkans76nyjge24zlpduujt2ea3lxwpjl6lrpiq',
    },
    user: {
      mintedBadges: 10,
    },
  },
  {
    id: '5-0x6230a918266d27ce0abd576b32b6a0516dba39d3',
    status: 'InReview',
    badgeType: {
      metadataURL:
        'ipfs://bafyreihv7k4vupbhwjlvyjlkdwsi7j2ttwkt3lbqkuctas43f2ausuq4ga/metadata.json',
      klerosMetadataURL: '/ipfs/bafkreih2ngblf5wdpnxdbkans76nyjge24zlpduujt2ea3lxwpjl6lrpiq',
    },
    user: {
      mintedBadges: 10,
    },
  },
  {
    id: '6-0x6230a918266d27ce0abd576b32b6a0516dba39d3',
    status: 'InReview',
    badgeType: {
      metadataURL:
        'ipfs://bafyreihv7k4vupbhwjlvyjlkdwsi7j2ttwkt3lbqkuctas43f2ausuq4ga/metadata.json',
      klerosMetadataURL: '/ipfs/bafkreih2ngblf5wdpnxdbkans76nyjge24zlpduujt2ea3lxwpjl6lrpiq',
    },
    user: {
      mintedBadges: 10,
    },
  },
  {
    id: '7-0x6230a918266d27ce0abd576b32b6a0516dba39d3',
    status: 'InReview',
    badgeType: {
      metadataURL:
        'ipfs://bafyreihv7k4vupbhwjlvyjlkdwsi7j2ttwkt3lbqkuctas43f2ausuq4ga/metadata.json',
      klerosMetadataURL: '/ipfs/bafkreih2ngblf5wdpnxdbkans76nyjge24zlpduujt2ea3lxwpjl6lrpiq',
    },
    user: {
      mintedBadges: 10,
    },
  },
  {
    id: '8-0x6230a918266d27ce0abd576b32b6a0516dba39d3',
    status: 'InReview',
    badgeType: {
      metadataURL:
        'ipfs://bafyreihv7k4vupbhwjlvyjlkdwsi7j2ttwkt3lbqkuctas43f2ausuq4ga/metadata.json',
      klerosMetadataURL: '/ipfs/bafkreih2ngblf5wdpnxdbkans76nyjge24zlpduujt2ea3lxwpjl6lrpiq',
    },
    user: {
      mintedBadges: 10,
    },
  },
]

const Profile: NextPage = () => {
  const router = useRouter()
  const t = useTranslations('profile')

  const userAddress = router.query.address as string
  const { appChainId } = useWeb3Connection()
  const gql = getSubgraphSdkByNetwork(appChainId, SubgraphName.TheBadge)
  const userBadges = gql.useUserBadges({ id: userAddress as string })

  // appending with real badges with test data
  const badges = userBadges.data?.badges ? [...userBadges.data.badges, ...test] : test

  return (
    <>
      <BaseTitle>{t('title')}</BaseTitle>
      <SubTitle>
        {t('subtitle')} {userAddress}
      </SubTitle>
      <ProfileContainer>
        {badges?.length === 0 ? (
          <div>No badges available.</div>
        ) : (
          <BadgeListContainer>
            {badges.map((badge) => (
              <BadgeCardPreview
                badge={badge as unknown as BadgeType}
                key={badge.id}
                userAddress={userAddress}
              />
            ))}
          </BadgeListContainer>
        )}
      </ProfileContainer>
    </>
  )
}

export default Profile
