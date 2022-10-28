import { GraphQLClient } from 'graphql-request'
import nullthrows from 'nullthrows'

import endpoints from '@/src/constants/subgraph-endpoints.json'
import { ChainsValues } from '@/src/constants/types'
import { SdkWithHooks, getSdkWithHooks } from '@/types/generated/subgraph'

export type AllSDK = Record<ChainsValues, SdkWithHooks>

export enum SubgraphName {
  TheBadge = 'TheBadge',
}

export function getSubgraphSdkByNetwork(
  chainId: ChainsValues,
  subgraphName: SubgraphName,
): ReturnType<typeof getSdkWithHooks> {
  const networkConfig = getSdkWithHooks(new GraphQLClient(endpoints[chainId][subgraphName]))
  return nullthrows(networkConfig, `No sdk for chain id: ${chainId}`)
}
