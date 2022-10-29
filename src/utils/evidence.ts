import axios from 'axios'
import { File } from 'nft.storage'

export const getGithubEvidence = (address: string): string => {
  return `Claiming Github badge for address ${address}`
}

// @todo (agustin) remove and make it generic
export const getGithubImage = async (): Promise<File> => {
  // @todo (agustin) remove hardcoded github imagw
  const imgURL = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'

  // @todo (agustin) fix that the img is correctly being uploaded
  return await axios
    .get(imgURL, { responseType: 'blob' })
    .then((response) => new File([response.data], 'Github.png'))
}
