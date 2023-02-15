import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: calc(100vh - 60px);
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};
`;

const DashboardContainer:React.FC = ()=> (
  <>
    <Container></Container>
  </>
)

export default DashboardContainer;