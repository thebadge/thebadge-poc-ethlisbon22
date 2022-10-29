import gql from 'graphql-tag'

export const SUBGRAPH_ERRORS = gql`
  query subgraphErrors {
    _meta {
      hasIndexingErrors
    }
  }
`
export const EMITTERS = gql`
  query emitters {
    emitters {
      id
      creator
      metadata
      isVerified
    }
  }
`

export const EMITTER_BY_ADDRESS = gql`
  query emitter($id: ID!) {
    emitter(id: $id) {
      id
      creator
      metadata
      isVerified
    }
  }
`

export const BadgeTypeList = gql`
  query badgeTypes($paused: Boolean, $curator: Curator) {
    badgeTypes(where: { paused: $paused, curator: $curator }) {
      id
      type
      metadataURL
      klerosMetadataURL
      badgesMintedAmount
      emitter {
        id
        isVerified
      }
      mintedBadges {
        id
      }
      mintCost
      mintFee
      klerosDeposit
      feeAndDeposit
      validFor
      curator
    }
  }
`
export const BadgeType = gql`
  query badgeType($id: ID!) {
    badgeType(id: $id) {
      id
      type
      metadataURL
      klerosMetadataURL
      badgesMintedAmount
      emitter {
        id
        isVerified
      }
      mintedBadges {
        id
      }
      mintCost
      mintFee
      klerosDeposit
      feeAndDeposit
      validFor
      curator
    }
  }
`

export const UserBadges = gql`
  query userBadges($id: String!) {
    badges(where: { user: $id }) {
      id
      status
      evidenceMetadataUrl
      badgeType {
        metadataURL
        klerosMetadataURL
      }
      user {
        mintedBadges
      }
    }
  }
`
