import Link from 'next/link'
import { useRouter } from 'next/router'
import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  href: string
}

export const NavLink: React.FC<Props> = ({ children, className, href, ...restProps }) => {
  const router = useRouter()

  return (
    <Link href={href} passHref>
      <button className={`${className} ${router.pathname === href && 'active'}`}>{children}</button>
    </Link>
  )
}
