// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    // @todo (agustin) add nft.storage
    console.log('hello from upload metadata', req.body)

    const ipfsHash = '0x123'

    res.status(200).json(ipfsHash)
  } catch (error: any) {
    console.error('Error on upload metadata', error)
    res.status(500).send(error.response)
  }
}
