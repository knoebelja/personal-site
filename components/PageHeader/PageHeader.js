import PageHeaderContainer from "./PageHeaderContainer"
import { TitleLink } from "../Links"
import Navigation from "../Navigation"

const PageHeader = ({ currentPage }) => {
  return (
    <PageHeaderContainer>
      <TitleLink isCurrent={"/" === currentPage}>Joseph Knoebel</TitleLink>
      <Navigation currentPage={currentPage} />
    </PageHeaderContainer>
  )
}

export default PageHeader
