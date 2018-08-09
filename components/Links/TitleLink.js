import Link from "next/link"
import Title from "../Title"

const TitleLink = ({ children, isCurrent }) => (
  <Link href="/">
    <Title tabIndex="1" isCurrent={isCurrent}>
      {children}
    </Title>
  </Link>
)

export default TitleLink

// Title Link: title links to Index
