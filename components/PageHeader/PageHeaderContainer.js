import styled from "styled-components"

const PageHeaderContainer = styled.div`
  height: 96px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  font-family: "Kirang Haerang", cursive;

  @media (max-width: 808px) {
    flex-direction: column;
    height: 120px;
  }
`

export default PageHeaderContainer
