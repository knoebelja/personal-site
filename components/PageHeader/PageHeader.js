import PageHeaderContainer from "./PageHeaderContainer"
import Navigation from "../Navigation"
import Link, { HeaderLink as Header } from "../Link"

const NavigationArray = [
  { title: "Life", href: "/life" },
  { title: "Work", href: "/work" },
  { title: "Knowledge", href: "/knowledge" }
]

const PageHeader = ({ currentPage }) => {
  return (
    <PageHeaderContainer>
      <Header href="/" isCurrent={"/" === currentPage}>
        Joseph Knoebel
      </Header>
      <Navigation>
        {NavigationArray.map(nav => (
          <Link href={nav.href} isCurrent={nav.href === currentPage}>
            {nav.title}
          </Link>
        ))}
      </Navigation>
    </PageHeaderContainer>
  )
}

export default PageHeader
