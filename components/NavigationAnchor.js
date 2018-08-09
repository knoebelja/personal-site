import Anchor from "./Anchor"

const NavigationAnchor = Anchor.extend`
  font-size: 32px;
  text-decoration: ${props =>
    props.isCurrent ? "overline underline" : "underline"};
  &:hover,
  &:focus {
    cursor: ${props => (props.isCurrent ? "not-allowed" : "progress")};
  }
`

export default NavigationAnchor

// Navigation Anchor: styles change when anchor navigates to the current page
