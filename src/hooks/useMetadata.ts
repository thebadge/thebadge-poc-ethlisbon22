import axios from 'axios'
import useSWR from 'swr'

import { ipfsGateway } from '@/src/constants/common'

export type Metadata = {
  image: string
}

export const fetchFromIPFS = (ipfsUrl: string): string => {
  const ipfsHash = ipfsUrl.replace('ipfs://', 'ipfs/').replace('/ipfs/', 'ipfs/')
  return `${ipfsGateway}/${ipfsHash}`
}

export default function useMetadata(ipfsUrl?: string | null | undefined) {
  const { data = null } = useSWR(ipfsUrl ? ipfsUrl : null, async (ipfsUrl) => {
    const httpUrl = fetchFromIPFS(ipfsUrl)
    return await axios
      .get<Metadata>(httpUrl)
      .then((res) => {
        if (res.data.image) {
          return { ...res.data, image: fetchFromIPFS(res.data.image) }
        } else {
          return res.data
        }
      })
      .catch((error) => {
        console.log(error)
        return null
      })
  })

  return data
}
