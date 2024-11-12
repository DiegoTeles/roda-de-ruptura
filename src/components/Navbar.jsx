import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa'; // Ícones de menu hamburger e fechar

const NavbarContainer = styled.nav`
  width: 100%;
  padding: 10px 20px;
  background-color: transparent;
  position: fixed; /* Fixa a navbar no topo */
  top: 0; /* Garante que a navbar fique no topo da página */
  left: 0;
  z-index: 1000; /* Garante que a navbar fique acima de outros elementos */
  background-color: white; /* Adiciona um fundo branco para a navbar */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adiciona uma sombra para destacar a navbar */
`;

const NavbarContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

const HamburgerIcon = styled.div`
  font-size: 24px;
  margin-right: 30px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.ul`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: white;
  list-style: none;
  padding: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinha os itens à esquerda */
  gap: 15px;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(100%)'}; /* Transição do menu */
  transition: transform 0.3s ease-in-out; /* Transição suave */
  z-index: 1001; /* Garante que o menu fique acima do overlay */
`;

const NavLink = styled.li`
  a {
    text-decoration: none;
    color: black;
    font-size: 18px;
    font-weight: 500;
    transition: color 0.3s;

    &:hover {
      color: #1e90ff;
    }

    &.active {
      color: #1e90ff;
    }
  }
`;

const DropdownContent = styled.ul`
  display: none; /* Escondido por padrão */
  position: absolute;
  top: 100%; /* Posiciona logo abaixo do link */
  left: 0;
  width: 100%; /* Ocupa 100% da largura do elemento pai */
  background-color: white;
  list-style: none;
  padding: 10px;
  margin: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;

  li {
    margin: 5px 0;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 16px;
    transition: color 0.3s;

    &:hover {
      color: #1e90ff;
    }
  }
`;

const DropdownLink = styled(NavLink)`
  &:hover ${DropdownContent} {
    display: block; /* Exibe o dropdown ao passar o mouse */
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo preto transparente */
  z-index: 1000; /* Fica abaixo do menu, mas acima do conteúdo */
  display: ${({ isOpen }) =>
    isOpen ? 'block' : 'none'}; /* Exibe o overlay quando o menu está aberto */
`;

const Navbar = () => {
  const location = useLocation(); // Hook para obter a URL atual
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar o menu hamburger
  const [showResultsMenu, setShowResultsMenu] = useState(false); // Estado para controlar a exibição do menu "Resultado da avaliação"

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Verifica o localStorage para ver se há respostas salvas
    const savedResponses = JSON.parse(localStorage.getItem('responses')) || [];
    if (savedResponses.length > 0) {
      setShowResultsMenu(true); // Exibe o menu se houver respostas
    }
  }, []);

  return (
    <>
      <NavbarContainer>
        <NavbarContent>
          <Logo>
            <Link to='/'>Ruptura</Link>
          </Logo>
          <HamburgerIcon onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}{' '}
            {/* Alterna entre ícone de abrir e fechar */}
          </HamburgerIcon>
        </NavbarContent>
      </NavbarContainer>
      <NavLinks isOpen={isOpen}>
        <NavLink>
          <a href='/' className={location.pathname === '/' ? 'active' : ''}>
            {' '}
            Home{' '}
          </a>
        </NavLink>
        <NavLink>
          <a
            href='/leis-direitos'
            className={location.pathname === '/leis-direitos' ? 'active' : ''}
          >
            {' '}
            A lei e seus Direitos{' '}
          </a>
        </NavLink>
        <NavLink>
          <a
            href='/historia'
            className={location.pathname === '/historia' ? 'active' : ''}
          >
            {' '}
            História Maria da Penha{' '}
          </a>
        </NavLink>
        <NavLink>
          <a
            href='/artigos'
            className={location.pathname === '/artigos' ? 'active' : ''}
          >
            {' '}
            Artigos{' '}
          </a>
        </NavLink>
        <NavLink>
          <a
            href='/contatos'
            className={location.pathname === '/contatos' ? 'active' : ''}
          >
            {' '}
            Contatos de apoio{' '}
          </a>
        </NavLink>
        <NavLink>
          <a
            href='/podcast'
            className={location.pathname === '/podcast' ? 'active' : ''}
          >
            {' '}
            Podcast{' '}
          </a>
        </NavLink>
        {/*   <DropdownLink>
          <a
            href='#'
            className={
              location.pathname === '/conteudos-adicionais' ? 'active' : ''
            }
          >
            {' '}
            Conteúdos adicionais{' '}
          </a>
          <DropdownContent>
            <li>
              <a href='/podcast'>Podcast</a>
            </li>
          </DropdownContent>
        </DropdownLink>
           */}
        {/* Condicionalmente renderiza o menu "Resultado da avaliação" */}
        {showResultsMenu && (
          <NavLink>
            <a
              href='/results'
              className={location.pathname === '/results' ? 'active' : ''}
            >
              {' '}
              Resultado da avaliação{' '}
            </a>
          </NavLink>
        )}
      </NavLinks>
      <Overlay isOpen={isOpen} onClick={toggleMenu} />{' '}
    </>
  );
};

export default Navbar;
