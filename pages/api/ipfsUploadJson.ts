// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { NFTStorage } from 'nft.storage'

import { nftStorageApiToken } from '@/src/constants/common'
import { BadgeMetadata } from '@/src/constants/types'
import { getGithubImage } from '@/src/utils/evidence'

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    if (!nftStorageApiToken) {
      throw new Error('Missing NFT.Storage api token')
    }
    const client = new NFTStorage({
      token: nftStorageApiToken,
    })

    const imgAsBlob = await getGithubImage()

    const metadata: BadgeMetadata = {
      ...req.body,
      image: imgAsBlob,
    }

    // @todo (agustin) uncomment after test
    // const ipfsRes = (await client.store(metadata)) as { ipnft: string; url: string }

    const result =
      'ipfs://bafyreicjwiijx56uvrxr62pfd5tktsxjezc3qke73fhz4hkqygwkomun3q/metadata.json'
    res.status(200).json(result)
  } catch (error: any) {
    console.error('Error on upload metadata', error)
    res.status(500).send(error.response)
  }
}
