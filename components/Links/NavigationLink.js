import Link from "next/link"
import NavigationAnchor from "../NavigationAnchor"

const NavigationLink = ({ href, as, children, isCurrent }) => (
  <Link href={href} as={as}>
    <NavigationAnchor tabIndex="1" isCurrent={isCurrent}>
      {children}
    </NavigationAnchor>
  </Link>
)

export default NavigationLink

// Navigation Link: navigation anchor that links to different pages via client-side render
