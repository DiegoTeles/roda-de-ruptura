import styled from 'styled-components';

const History = () => {
  return (
    <div>
      <Section>
        <Title>História de Maria da Penha</Title>

        <Subtitle>Quem é Maria da Penha?</Subtitle>
        <Paragraph>
          <Highlight>Maria da Penha Maia Fernandes</Highlight> (Fortaleza - CE,
          1º de fevereiro de 1945) é farmacêutica bioquímica e se formou na
          Faculdade de Farmácia e Bioquímica da Universidade Federal do Ceará em
          1966, concluindo o seu mestrado em Parasitologia em Análises Clínicas
          na Faculdade de Ciências Farmacêuticas da Universidade de São Paulo em
          1977.
        </Paragraph>

        <Subtitle>Antes do Crime</Subtitle>
        <Paragraph>
          Maria da Penha conheceu{' '}
          <Highlight>Marco Antônio Heredia Viveros</Highlight>, colombiano,
          quando estava cursando o mestrado na Faculdade de Ciências
          Farmacêuticas da Universidade de São Paulo em 1974. Eles se casaram em
          1976 e tiveram três filhas. No entanto, após o nascimento da primeira
          filha e a mudança para Fortaleza, as agressões começaram.
        </Paragraph>
        <Paragraph>
          As agressões se intensificaram após Marco Antônio conseguir a
          cidadania brasileira e se estabilizar economicamente. O ciclo de
          violência se formou: aumento da tensão, ato de violência,
          arrependimento e comportamento carinhoso.
        </Paragraph>

        <Subtitle>O Crime</Subtitle>
        <Paragraph>
          Em 1983, Maria da Penha foi vítima de{' '}
          <Highlight>dupla tentativa de feminicídio</Highlight> por parte de
          Marco Antônio. Primeiro, ele deu um tiro em suas costas enquanto ela
          dormia, o que a deixou paraplégica. Quatro meses depois, ele tentou
          eletrocutá-la durante o banho.
        </Paragraph>

        <Subtitle>O Processo Judicial</Subtitle>
        <Paragraph>
          O primeiro julgamento de Marco Antônio aconteceu apenas em 1991, oito
          anos após o crime, e ele foi condenado a 15 anos de prisão, mas saiu
          em liberdade devido a recursos. O segundo julgamento ocorreu em 1996,
          com uma nova condenação de 10 anos e 6 meses, mas novamente a sentença
          não foi cumprida.
        </Paragraph>

        <Subtitle>Denúncia Internacional</Subtitle>
        <Paragraph>
          Em 1998, Maria da Penha, junto com organizações de direitos humanos,
          denunciou o caso à{' '}
          <Highlight>
            Comissão Interamericana de Direitos Humanos da OEA
          </Highlight>
          . Em 2001, o Estado brasileiro foi responsabilizado por negligência e
          omissão em relação à violência doméstica.
        </Paragraph>

        <Subtitle>Como Surgiu a Lei Maria da Penha</Subtitle>
        <Paragraph>
          Em 2002, um consórcio de ONGs feministas elaborou um projeto de lei
          para combater a violência doméstica. Após debates no Legislativo e
          Executivo, a <Highlight>Lei Maria da Penha</Highlight> foi sancionada
          em 7 de agosto de 2006, como reconhecimento da luta de Maria da Penha
          contra as violações dos direitos humanos das mulheres.
        </Paragraph>

        <Subtitle>Reconhecimento e Reparação</Subtitle>
        <Paragraph>
          Como parte das recomendações da OEA, o Estado do Ceará pagou uma
          indenização a Maria da Penha, e o Governo Federal batizou a lei com o
          seu nome, simbolizando sua luta e resistência.
        </Paragraph>
      </Section>
    </div>
  );
};

export default History;

const Section = styled.section`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #1e90ff;
  text-align: center;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 20px;
`;

const Highlight = styled.span`
  font-weight: bold;
  color: #1e90ff;
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const ListItem = styled.li`
  font-size: 18px;
  color: #555;
  margin-bottom: 10px;
`;
