import styled from "styled-components"

const Anchor = styled.a`
  color: darkturquoise;
  font-size: 24px;
  font-weight: 100;
  text-decoration: underline;
  &:hover,
  &:focus {
    text-decoration: overline underline;
    cursor: progress;
  }
`

export default Anchor
