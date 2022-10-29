import { NextApiRequest, NextApiResponse } from 'next'

import axios from 'axios'

import { githubApiToken, githubOrgName, githubRepoName } from '@/src/constants/common'
import { getGithubEvidence } from '@/src/utils/evidence'
import { GithubCommitInfoResponse } from '@/types/github'

export type GetCommitInformationResponse = {
  githubOwner?: string
  errorMessage?: { documentation_url?: string; message: string }
}

const EVIDENCE_FILENAME = 'EVIDENCES.md'

const validateEvidence = (commitInfo: GithubCommitInfoResponse, userAddress: string): boolean => {
  const { files, stats } = commitInfo
  const evidenceText = getGithubEvidence(userAddress)
  if (stats.total !== 1 || stats.additions !== 1) {
    return false
  }
  if (files[0].filename !== EVIDENCE_FILENAME) {
    return false
  }
  return files[0].patch.toLowerCase().includes(evidenceText.toLowerCase())
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetCommitInformationResponse>,
) {
  const { commitHash, userAddress } = req.body
  if (!commitHash) {
    return res.status(500).json({ errorMessage: { message: 'Missing commitHash parameter' } })
  }

  try {
    const config = { headers: { Authorization: `Bearer ${githubApiToken}` } }

    const requestUrl = `https://api.github.com/repos/${githubOrgName}/${githubRepoName}/commits/${commitHash}`

    const result = (await axios.get<GithubCommitInfoResponse>(requestUrl, config)).data
    const validCommit = validateEvidence(result, userAddress)

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
