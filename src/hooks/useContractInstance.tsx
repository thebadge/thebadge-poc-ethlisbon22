import { JsonRpcSigner } from '@ethersproject/providers'
import { useSigner } from '@web3modal/react'
import nullthrows from 'nullthrows'

import { ContractsKeys, contracts } from '@/src/constants/config/contracts'
import { useWeb3Connection } from '@/src/providers/web3ConnectionProvider'
import * as typechainImports from '@/types/typechain'
import { ObjectValues } from '@/types/utils'

type GetFactories<T> = T extends { connect: (...args: any) => any } ? T : never

type AppFactories = GetFactories<ObjectValues<typeof typechainImports>>

export const useContractInstance = <F extends AppFactories, RT extends ReturnType<F['connect']>>(
  contractFactory: F,
  contractKey: ContractsKeys,
) => {
  const { appChainId, readOnlyAppProvider } = useWeb3Connection()
  const { data } = useSigner()
  const address = contracts[contractKey]['address'][appChainId]
  const signer = data || readOnlyAppProvider
  nullthrows(signer, 'There is not signer to execute a tx.')

  return contractFactory.connect(address, signer as JsonRpcSigner) as RT
}
