import gql from 'graphql-tag'

export const SUBGRAPH_ERRORS = gql`
  query subgraphErrors {
    _meta {
      hasIndexingErrors
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
      mintCost
      mintFee
      klerosDeposit
      feeAndDeposit
      validFor
      curator
    }
  }
`
