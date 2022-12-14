import axios from 'axios'
import { File } from 'nft.storage'

export const getGithubEvidence = (address: string): string => {
  return `Claiming Github badge for address ${address}`
}

// @todo (agustin) remove
export const GITHUB_IMAGE_URL =
  'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'

// @todo (agustin) remove and make it generic
export const getGithubImage = async (): Promise<File> => {
  // @todo (agustin) fix that the img is correctly being uploaded
  return await axios
    .get(GITHUB_IMAGE_URL, { responseType: 'blob' })
    .then((response) => new File([response.data], 'Github.png'))
}
