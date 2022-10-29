import { NextPage } from 'next'
import { useRouter } from 'next/router'

import MintGithub from '@/src/page_partials/badgeTypes/offChain/MintGithub'

const BadgeTypeId: NextPage = () => {
  const router = useRouter()
  const badgeTypeId = router.query.badgeTypeId as string

  switch (badgeTypeId) {
    case '1':
      return <MintGithub badgeTypeId={badgeTypeId} />
    default:
      return <div>PAGE NOT FOUND</div>
  }
}

export default BadgeTypeId
