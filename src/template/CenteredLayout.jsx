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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CenteredLayout = ({ children }) => {
  return (
    <CenteredContainer>
      <ContentWrapper>
        <Navbar />
        {children}
      </ContentWrapper>
    </CenteredContainer>
  );
};

export default CenteredLayout;
