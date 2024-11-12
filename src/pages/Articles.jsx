import { useState } from 'react';
import styled from 'styled-components';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Modal from '../components/Modal';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 15px;
  width: 300px;
  overflow: hidden;
  position: relative;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const RedirectIcon = styled(FaExternalLinkAlt)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #FFF;
  font-size: 18px;
  opacity: 0.7;
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 10px 0;
`;

const CardLink = styled.button`
  background: none;
  border: none;
  color: #007BFF;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-top: 20px;
  color: #333;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Articles = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticleLink, setSelectedArticleLink] = useState('');
  const [selectedArticleTitle, setSelectedArticleTitle] = useState(''); // Novo estado para o título

  const openModal = (link, title) => {
    setSelectedArticleLink(link);
    setSelectedArticleTitle(title); // Definir o título do artigo
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticleLink('');
    setSelectedArticleTitle(''); // Limpar o título ao fechar o modal
  };

  const handleArticleClick = (article) => {
    if (article.showModal) {
      openModal(article.link, article.title); // Passar o título ao abrir o modal
    } else {
      window.open(article.link, '_blank');
    }
  };

  const articles = [
    {
      title: 'Violência contra a Mulher: Problematizando Definições Teóricas, Filosóficas e Jurídicas',
      description: 'Este artigo aborda as definições teóricas, filosóficas e jurídicas sobre a violência contra a mulher.',
      link: 'https://www.scielo.br/j/psoc/a/Dr7bvbkMvcYSTwdHDpdYhfn',
      image: 'https://via.placeholder.com/300x180',
      showModal: true, // Exibe no modal
    },
    {
      title: 'Violência contra mulher: Concepções e Práticas de Profissionais de Serviços Públicos',
      description: 'Este estudo explora as concepções e práticas de profissionais de serviços públicos em relação à violência contra a mulher.',
      link: 'https://pepsic.bvsalud.org/scielo.php?script=sci_arttext&pid=S2236-64072018000200003',
      image: 'https://via.placeholder.com/300x180',
      showModal: true, // Exibe no modal
    },
    {
      title: 'A Violência Contra a Mulher',
      description: 'Uma análise sobre a violência contra a mulher e suas implicações sociais e jurídicas.',
      link: 'https://periodicorease.pro.br/rease/article/view/12710',
      image: 'https://via.placeholder.com/300x180',
      showModal: true, // Exibe no modal
    },
    {
      title: 'A Magnitude Invisível da Violência Contra a Mulher',
      description: 'Este artigo discute a magnitude invisível da violência contra a mulher e suas consequências.',
      link: 'http://scielo.iec.gov.br/scielo.php?script=sci_arttext&pid=S1679-49742016000300451',
      image: 'https://via.placeholder.com/300x180',
      showModal: false, // Redireciona para nova aba
    },
    {
      title: 'Gênero e Violência Contra a Mulher: O Perigoso Jogo de Poder e Dominação',
      description: 'Uma análise sobre o papel do gênero na violência contra a mulher e o jogo de poder envolvido.',
      link: 'https://pepsic.bvsalud.org/scielo.php?script=sci_arttext&pid=S1870-350X2008000300012',
      image: 'https://via.placeholder.com/300x180',
      showModal: true, // Exibe no modal
    },
    {
      title: 'Judiciário pela Eliminação da Violência Contra a Mulher',
      description: 'Este artigo discute o papel do judiciário na eliminação da violência contra a mulher.',
      link: 'https://www.cnj.jus.br/artigo-judiciario-pela-eliminacao-da-violencia-contra-a-mulher/',
      image: 'https://via.placeholder.com/300x180',
      showModal: true, // Exibe no modal
    },
  ];

  return (
    <>
      <Title>Artigos</Title>
      <Container>
        {articles.map((article, index) => (
          <Card key={index}>
            <CardImage src={article.image} alt={`Artigo ${index + 1}`} />
            {!article.showModal && <RedirectIcon />} {/* Exibe o ícone de redirecionamento se não for modal */}
            <CardContent>
              <CardTitle>
                <CardLink onClick={() => handleArticleClick(article)}>
                  {article.title}
                </CardLink>
              </CardTitle>
              <CardDescription>{article.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </Container>

      <Modal isOpen={isModalOpen} title={selectedArticleTitle} onClose={closeModal} articleLink={selectedArticleLink} />
    </>
  );
};

export default Articles;