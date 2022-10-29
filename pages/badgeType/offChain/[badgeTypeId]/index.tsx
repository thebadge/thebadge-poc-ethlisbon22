import { NextPage } from 'next'
import { useRouter } from 'next/router'

const BadgeTypeId: NextPage = () => {
  const router = useRouter()
  const badgeTypeId = router.query.badgeTypeId as string

  switch (badgeTypeId) {
    case '1':
      return <div>Github strategy page</div>
    default:
      return <div>PAGE NOT FOUND</div>
  }
}

export default BadgeTypeId
