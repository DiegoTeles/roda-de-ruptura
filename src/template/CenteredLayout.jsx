import styled from 'styled-components';
import Navbar from '../components/Navbar';

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  padding-top: 80px; /* Adiciona um espaçamento no topo para evitar sobreposição */
  box-sizing: border-box;
`;

const CenteredLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <CenteredContainer>
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </CenteredContainer>
    </>
  );
};

export default CenteredLayout;