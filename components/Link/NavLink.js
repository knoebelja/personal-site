import Link from "next/link"
import NavAnchor from "../NavAnchor"

const NavLink = ({ href, as, children, isCurrent }) => (
  <Link href={href} as={as}>
    <NavAnchor isCurrent={isCurrent}>{children}</NavAnchor>
  </Link>
)

export default NavLink
