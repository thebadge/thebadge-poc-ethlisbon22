// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import axios from 'axios'
import { NFTStorage } from 'nft.storage'
import { File } from 'nft.storage'

import { nftStorageApiToken } from '@/src/constants/common'
import { BadgeMetadata } from '@/src/constants/types'

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    if (!nftStorageApiToken) {
      throw new Error('Missing NFT.Storage api token')
    }
    const client = new NFTStorage({
      token: nftStorageApiToken,
    })

    // @todo (agustin) remove hardcoded github imagw
    const imgURL = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'

    // @todo (agustin) fix that the img is correctly being uploaded
    const imgAsBlob = await axios
      .get(imgURL, { responseType: 'blob' })
      .then((response) => new File([response.data], 'Github.png'))

    const metadata: BadgeMetadata = {
      ...req.body,
      image: imgAsBlob,
    }
    const ipfsRes = (await client.store(metadata)) as { ipnft: string; url: string }

    res.status(200).json(ipfsRes.url)
  } catch (error: any) {
    console.error('Error on upload metadata', error)
    res.status(500).send(error.response)
  }
}
