import NavigationContainer from "./NavigationContainer"
import NavigationLink from "../Links"
import pages from "../../utils/pages"

const Navigation = ({ currentPage }) => (
  <NavigationContainer>
    {pages.map(page => (
      <NavigationLink
        key={page.href}
        href={page.href}
        isCurrent={page.href === currentPage}
      >
        {page.title}
      </NavigationLink>
    ))}
  </NavigationContainer>
)

export default Navigation
