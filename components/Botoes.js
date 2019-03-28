import Link from 'next/link'

export const ButtonLink = ({ className, href, hrefAs, children, prefetch }) => (
  <Link href={href} as={hrefAs} prefetch>
    <a className={className}>
      {children}
    </a>
  </Link>
)
