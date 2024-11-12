import styled from 'styled-components';
import { FiExternalLink } from 'react-icons/fi';
const Podcast = () => {
  const podcasts = [
    {
      id: 1,
      title: 'Praia dos Ossos',
      description:
        'Este podcast conta a história do feminicídio de Ângela Diniz, um caso de grande repercussão no Brasil dos anos 1970. Ele explora temas como violência doméstica, machismo, e como o sistema judiciário lidou com o caso.',
      tags: ['Feminicídio', 'Sistema de Justiça'],
      link: 'https://example.com/praia-dos-ossos', // Link para o podcast
    },
    {
      id: 2,
      title: 'Mamilos – Episódio “Violência Doméstica”',
      description:
        'O Mamilos, um podcast que discute temas sociais e culturais, tem episódios dedicados à violência doméstica, trazendo especialistas para debater os sinais, os desafios e as soluções para combater o problema.',
      tags: ['Cultura da Violência', 'Soluções'],
      link: 'https://example.com/mamilos-violencia-domestica', // Link para o podcast
    },
    {
      id: 3,
      title: 'Café com Crime',
      description:
        'Apesar de ser focado em crimes reais, o podcast já tratou de casos que envolvem violência doméstica e suas consequências, abordando tanto o lado jurídico quanto o emocional.',
      tags: ['Crimes Reais', 'Violência Doméstica'],
      link: 'https://example.com/cafe-com-crime', // Link para o podcast
    },
    {
      id: 4,
      title: 'Papo de Mãe',
      description:
        'Podcast que aborda diversos temas relacionados à maternidade, saúde mental, e relacionamentos familiares, incluindo a violência doméstica e o impacto dela na vida das mulheres e suas famílias.',
      tags: ['Família', 'Maternidade', 'Violência Doméstica'],
      link: 'https://www.youtube.com/watch?v=YOf0e02ezfE', // Link para o podcast
    },
    {
      id: 5,
      title: 'The Hotline (em inglês)',
      description:
        'Este é o podcast da National Domestic Violence Hotline nos EUA. Ele explora os muitos aspectos da violência doméstica, como reconhecer os sinais, histórias de sobreviventes, e a importância do apoio.',
      tags: ['Violência Doméstica', 'Suporte a Sobreviventes'],
      link: 'https://example.com/the-hotline', // Link para o podcast
    },
  ];

  return (
    <Section>
      <MenuTitle>LISTA DE PODCAST Sugeridos</MenuTitle>
      {podcasts.map((podcast) => (
        <Card
          key={podcast.id}
          href={podcast.link}
          target='_blank'
          rel='noopener noreferrer'
        >
          <PlayButton>
            <p>▶</p>
          </PlayButton>
          <Info>
            <ExternalLink
              href={podcast.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Title>{podcast.title}</Title>
              <FiExternalLink />
            </ExternalLink>
            <Description>{podcast.description}</Description>
            <Tags>
              {podcast.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </Tags>
          </Info>
        </Card>
      ))}
    </Section>
  );
};

export default Podcast;


const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const ExternalLink = styled.a`
  color: #ff7171;
  font-size: 20px;
  display: flex;
  align-items: center;
  display: flex;
  gap: 10px;
  align-items: center;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #e0e0e0;
  }
`;

const MenuTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Card = styled.a`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const PlayButton = styled.button`
  background: #ff7171;
  color: white;
  border: none;
  width: 80px;
  height: 80px;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 20px;

  &:hover {
    background-color: #e0e0e0;
  }

  &:focus {
    outline: 2px solid rgba(0, 0, 0, 0.2);
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
`;

const Tags = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;

const Tag = styled.span`
  background-color: #e0e0e0;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
  color: #333;
`;
