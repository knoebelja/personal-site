import PageBody from "./PageBody"

const IndexBody = PageBody.extend`
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-areas: ". today .";

  @media (max-width: 808px) {
    grid-template-columns: 1fr 10fr 1fr;
  }
`

export default IndexBody
