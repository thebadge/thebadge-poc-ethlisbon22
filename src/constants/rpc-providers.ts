import { alchemyToken, defaultChainID } from '@/src/constants/common'
import {
  Chains,
  ChainsValues,
  ProviderChains,
  RPCProviders,
  RPCProvidersENV,
} from '@/src/constants/types'
import { ObjectValues } from '@/types/utils'

export const providerChains: ProviderChains = {
  [RPCProviders.infura]: {
    //[Chains.mainnet]: 'mainnet',
    [Chains.goerli]: 'goerli',
    [Chains.gnosisChain]: 'gnosis',
    // [Chains.kovan]: 'kovan',
  },
  [RPCProviders.alchemy]: {
    //[Chains.mainnet]: 'eth-mainnet',
    [Chains.goerli]: 'eth-goerli',
    [Chains.gnosisChain]: 'gnosis',
    // [Chains.kovan]: 'eth-kovan',
  },
}

const GNOSIS_CHAIN_RPC_URL = 'https://rpc.gnosischain.com/'

// @todo (agustin) then fix properly this trick for gnosis chain
const getInfuraRPCUrl = (chainId: ChainsValues) =>
  chainId == Chains.gnosisChain
    ? GNOSIS_CHAIN_RPC_URL
    : `https://${providerChains[RPCProviders.infura][chainId]}.infura.io/v3/${defaultChainID}`

const getAlchemyRPCUrl = (chainId: ChainsValues) =>
  chainId == Chains.gnosisChain
    ? GNOSIS_CHAIN_RPC_URL
    : `https://${providerChains[RPCProviders.alchemy][chainId]}.g.alchemy.com/v2/${alchemyToken}`

export const getProviderUrl = (
  chainId: ChainsValues,
  provider?: ObjectValues<typeof RPCProviders>,
) => {
  if (!RPCProvidersENV[RPCProviders.infura] && !RPCProvidersENV[RPCProviders.alchemy]) {
    throw new Error(`You must set infura/alchemy token provider in environment variable`)
  }

  //Manual provider
  if (provider === RPCProviders.infura && RPCProvidersENV[RPCProviders.infura])
    return getInfuraRPCUrl(chainId)

  if (provider === RPCProviders.alchemy && RPCProvidersENV[RPCProviders.alchemy])
    return getAlchemyRPCUrl(chainId)

  // Automagic provider
  if (RPCProvidersENV[RPCProviders.infura]) return getInfuraRPCUrl(chainId)
  if (RPCProvidersENV[RPCProviders.alchemy]) return getAlchemyRPCUrl(chainId)

  throw Error('Token provider could not be found')
}
