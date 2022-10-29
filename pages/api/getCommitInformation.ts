import { NextApiRequest, NextApiResponse } from 'next'

import axios from 'axios'

import { githubApiToken, githubOrgName, githubRepoName } from '@/src/constants/common'

export type GetCommitInformationResponse = {
  githubOwner?: string
  errorMessage?: { documentation_url?: string; message: string }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetCommitInformationResponse>,
) {
  const { commitHash } = req.body

  if (!commitHash) {
    return res.status(500).json({ errorMessage: { message: 'Missing commitHash parameter' } })
  }

  try {
    const config = { headers: { Authorization: `Bearer ${githubApiToken}` } }

    const requestUrl = `https://api.github.com/repos/${githubOrgName}/${githubRepoName}/commits/${commitHash}`

    const result = (await axios.get(requestUrl, config)).data

    // @todo (agustin) validate evidence
    const validCommit = true

    if (!validCommit) {
      return res.status(500).json({
        errorMessage: { message: 'The commit hash is invalid or the given evidence is wrong.' },
      })
    }

    return res.status(200).json({ githubOwner: result.author.login })
  } catch (error: any) {
    console.error('Error on getCommitInformation ', error)
    if (error.response.status === 404) {
      return res.status(404).json({ errorMessage: error.response.data })
    }

    return res.status(500).json({ errorMessage: error.response.data })
  }
}
