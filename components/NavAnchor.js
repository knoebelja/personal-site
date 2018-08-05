import styled from "styled-components"

import Anchor from "./Anchor"

const NavAnchor = Anchor.extend`
  font-size: 32px;
  text-decoration: ${props =>
    props.isCurrent ? "overline underline" : "underline"};
  &:hover,
  &:focus {
    cursor: ${props => (props.isCurrent ? "not-allowed" : "progress")};
  }
`

export default NavAnchor
