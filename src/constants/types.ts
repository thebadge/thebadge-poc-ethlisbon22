import { alchemyToken, infuraToken } from '@/src/constants/common'
import { ObjectValues } from '@/types/utils'

export enum ThemeType {
  light = 'light',
  dark = 'dark',
  noTheme = 'noTheme',
}

export const Chains = {
  // mainnet: 1,
  goerli: 5,
  // kovan: 42,
} as const

export type ChainConfig = {
  id: ChainsValues
  name: string
  shortName: string
  chainId: ChainsValues
  chainIdHex: string
  rpcUrl: string
  blockExplorerUrls: string[]
  token: string
}

export type ChainsValues = ObjectValues<typeof Chains>

export enum RPCProviders {
  infura = 'infura',
  alchemy = 'alchemy',
}

export const RPCProvidersENV: Record<RPCProviders, string | undefined> = {
  [RPCProviders.infura]: alchemyToken,
  [RPCProviders.alchemy]: infuraToken,
}

export type ProviderChains = { [key in RPCProviders]: { [key in ChainsValues]: string } }