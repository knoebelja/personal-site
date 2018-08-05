import Link from "next/link"
import Header from "../Header"

const HeaderLink = ({ href, as, children, isCurrent }) => (
  <Link href={href} as={as}>
    <Header isCurrent={isCurrent}>{children}</Header>
  </Link>
)

export default HeaderLink
