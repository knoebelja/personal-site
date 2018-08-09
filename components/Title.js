import styled from "styled-components"

const Title = styled.h1`
  font-size: 64px;
  color: tomato;
  margin: 0;
  padding: 0;
  font-weight: 100;
  text-decoration: overline;
  &:hover,
  &:focus {
    cursor: ${props => (props.isCurrent ? "not-allowed" : "progress")};
  }

  @media (max-width: 808px) {
    font-size: 48px;
  }
`

export default Title

// Title: styles change when on Index
