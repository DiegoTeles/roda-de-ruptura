import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  width: 100%;
  padding: 10px 20px;
  background-color: transparent;
`;

const NavbarContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const NavLink = styled.li`
  position: relative; /* Necessário para o dropdown */
  
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

const Navbar = () => {
  const location = useLocation(); // Hook para obter a URL atual

  return (
    <NavbarContainer>
      <NavbarContent>
        <NavLinks>
          <NavLink>
            <a href='/' className={location.pathname === '/' ? 'active' : ''}> Home </a>
          </NavLink>
          <NavLink>
            <a href='/leis-direitos' className={location.pathname === '/leis-direitos' ? 'active' : ''} > A lei e seus Direitos </a>
          </NavLink>
          <NavLink>
            <a href='/historia' className={location.pathname === '/historia' ? 'active' : ''} > História Maria da Penha </a>
          </NavLink>
          <NavLink>
            <a href='/artigos' className={location.pathname === '/artigos' ? 'active' : ''} > Artigos </a>
          </NavLink>
          <NavLink>
            <a href='/contatos' className={location.pathname === '/contatos' ? 'active' : ''} > Contatos de apoio </a>
          </NavLink>
          <DropdownLink>
            <a href='#' className={location.pathname === '/conteudos-adicionais' ? 'active' : ''} > Conteúdos adicionais </a>
            <DropdownContent>
              <li>
                <a href='/podcast'>Podcast</a>
              </li>
            </DropdownContent>
          </DropdownLink>
        </NavLinks>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;