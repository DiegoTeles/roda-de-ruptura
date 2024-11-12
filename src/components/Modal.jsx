import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  width: 80%;
  max-width: 900px;
  height: 80%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    width: 90%;
    height: 70%;
  }

  @media (max-width: 480px) {
    width: 95%;
    height: 60%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

const CloseButton = styled.button`
  background: #FFF;
  color: #000;
  border: none;
  width: 40px;
  height: 40px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  border-radius: 50%; 
  border: none;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }

  &:focus {
    outline: 2px solid rgba(0, 0, 0, 0.2);
    outline-offset: 2px; 
  }
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const Modal = ({ isOpen, onClose, articleLink, title }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <Header>
          <Title>{title}</Title>
          <CloseButton onClick={onClose}>×</CloseButton>
        </Header>
        <Iframe src={articleLink} title='Artigo' />
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
