import styled from "styled-components"

const PageHeaderContainer = styled.div`
  height: ${props => props.theme.pageHeaderHeight};
  padding: 0 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: "Kirang Haerang", cursive;

  @media (max-width: 808px) {
    flex-direction: column;
    height: 120px;
  }
`

export default PageHeaderContainer
