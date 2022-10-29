import { Chains } from '../types'
import TheBadge_abi from '@/src/abis/TheBadge.json'

export const contracts = Object.freeze({
  TheBadge: {
    address: {
      [Chains.goerli]: '0x6B57CCfaA2b793D62FD877EA315E90eF5a9e105d',
      [Chains.gnosisChain]: '0xD24b0847747F334c3634BAD3C5CF76a76A384f7A',
    },
    abi: TheBadge_abi,
  },
})

export type ContractsKeys = keyof typeof contracts
