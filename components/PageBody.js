import styled from "styled-components"

const PageBody = styled.div`
  height: calc(100vh - 2 * ${props => props.theme.pageHeaderHeight});
  padding: 0 32px;
  display: grid;
  align-items: center;
`

export default PageBody
