import { Chains } from '../types'
import TheBadge_abi from '@/src/abis/TheBadge.json'

export const contracts = Object.freeze({
  TheBadge: {
    address: {
      [Chains.goerli]: '0x6B57CCfaA2b793D62FD877EA315E90eF5a9e105d',
    },
    abi: TheBadge_abi,
  },
})

export type ContractsKeys = keyof typeof contracts
