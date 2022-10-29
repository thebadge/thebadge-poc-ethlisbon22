export const appName = process.env.NEXT_PUBLIC_APP_NAME || 'letsHopeWeCanAvoidNameClashingThen'
export const cookiesWarningEnabled =
  process.env.NEXT_PUBLIC_COOKIES_WARNING_ENABLED === 'true' || ''
export const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''
export const defaultTheme = process.env.NEXT_PUBLIC_DEFAULT_THEME
export const defaultChainID = process.env.NEXT_PUBLIC_DEFAULT_CHAIN_ID || '42'
export const infuraToken = process.env.NEXT_PUBLIC_INFURA_TOKEN
export const alchemyToken = process.env.NEXT_PUBLIC_ALCHEMY_TOKEN
export const ipfsGateway = process.env.NEXT_PUBLIC_IPFS_GATEWAY
export const githubOrgName = process.env.NEXT_PUBLIC_GITHUB_ORG_NAME || ''
export const githubRepoName = process.env.NEXT_PUBLIC_GITHUB_REPO_NAME || ''
export const githubEvidenceURL = process.env.NEXT_PUBLIC_GITHUB_EVIDENCE_FILE
export const githubCommitUrl = `https://github.com/${githubOrgName}/${githubRepoName}`
export const githubApiToken = process.env.NEXT_PUBLIC_GITHUB_API_TOKEN
export const nftStorageApiToken = process.env.NEXT_PUBLIC_NFT_STORAGE_API_TOKEN
