type CommitDetails = {
  author: {
    name: string
    email: string
    date: string
  }
  commiter: {
    name: string
    email: string
    date: string
  }
  message: string
  tree: {
    sha: string
    url: string
  }
  url: string
  comment_count: number
  verification: {
    verified: boolean
    reason: string
    signature: null
    payload: null
  }
}

type AuthorDetails = {
  login: string // GithubAccount
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

type CommitterDetails = {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

type ParentDetails = {
  sha: string
  url: string
  html_url: string
}

type FileDetails = {
  sha: string
  filename: string
  status: string
  additions: number
  deletions: number
  changes: number
  blob_url: string
  raw_url: string
  contents_url: string
  patch: string
}

export type GithubCommitInfoResponse = {
  sha: string
  node_id: string
  commit: CommitDetails
  url: string
  html_url: string
  comments_url: string
  author: AuthorDetails
  committer: CommitterDetails
  parents: ParentDetails[]
  stats: {
    total: number
    additions: number
    deletions: number
  }
  files: FileDetails[]
}
