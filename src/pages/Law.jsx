import styled from 'styled-components';

const Law = () => {
  return (
    <div>
      <Section>
        <Title>A Lei e Seus Direitos: Explicação da Lei Maria da Penha</Title>

        <Subtitle>Contexto Histórico</Subtitle>
        <Paragraph>
          A <Highlight>Lei Maria da Penha</Highlight>, oficialmente Lei nº
          11.340, foi sancionada no Brasil em 7 de agosto de 2006 e é um marco
          na proteção dos direitos das mulheres contra a violência doméstica e
          familiar. Ela recebeu esse nome em homenagem a Maria da Penha Maia
          Fernandes, uma mulher que sofreu violência doméstica por parte de seu
          marido durante muitos anos e lutou intensamente por justiça.
        </Paragraph>
        <Paragraph>
          Maria da Penha foi vítima de duas tentativas de homicídio por parte de
          seu marido, que resultaram em sua paraplegia. Após anos de impunidade,
          o caso foi levado à Comissão Interamericana de Direitos Humanos da OEA
          (Organização dos Estados Americanos), que recomendou ao Brasil a
          criação de uma legislação específica para combater a violência
          doméstica.
        </Paragraph>

        <Subtitle>Principais Aspectos da Lei Maria da Penha</Subtitle>
        <Paragraph>
          A lei define <Highlight>violência doméstica</Highlight> como qualquer
          ação ou omissão baseada no gênero que cause morte, lesão, sofrimento
          físico, sexual ou psicológico, e dano moral ou patrimonial à mulher.
        </Paragraph>
        <List>
          <ListItem>
            <Highlight>Abrangência:</Highlight> A lei se aplica a mulheres de
            todas as idades, independente de classe social, raça, etnia,
            orientação sexual, renda, cultura ou nível educacional.
          </ListItem>
          <ListItem>
            <Highlight>Medidas Protetivas de Urgência:</Highlight> As mulheres
            agredidas podem solicitar medidas protetivas, como afastamento do
            agressor do lar e proibição de aproximação.
          </ListItem>
          <ListItem>
            <Highlight>Atuação da Autoridade Policial:</Highlight> A polícia
            deve receber a denúncia com atenção e respeito, garantindo a
            segurança da vítima.
          </ListItem>
          <ListItem>
            <Highlight>Criação de Juizados:</Highlight> A lei prevê a criação de
            juizados especializados para tratar dos casos de violência
            doméstica.
          </ListItem>
          <ListItem>
            <Highlight>Apoio Multidisciplinar:</Highlight> Estabelece a
            necessidade de equipes de atendimento multidisciplinar para
            assistência às vítimas.
          </ListItem>
          <ListItem>
            <Highlight>Educação e Prevenção:</Highlight> A lei enfatiza a
            importância de campanhas educativas sobre a violência contra a
            mulher.
          </ListItem>
        </List>

        <Subtitle>Direitos das Mulheres sob a Lei Maria da Penha</Subtitle>
        <List>
          <ListItem>
            <Highlight>Direito à Proteção Integral:</Highlight> As mulheres têm
            direito à proteção do Estado contra qualquer forma de violência.
          </ListItem>
          <ListItem>
            <Highlight>Direito à Informação:</Highlight> As vítimas têm o
            direito de serem informadas sobre seus direitos e sobre a tramitação
            dos processos judiciais.
          </ListItem>
          <ListItem>
            <Highlight>Direito à Assistência Integral:</Highlight> Inclui acesso
            a serviços de saúde, assistência social, proteção policial e abrigo
            seguro.
          </ListItem>
          <ListItem>
            <Highlight>Direito ao Acesso à Justiça:</Highlight> As mulheres têm
            garantido o acesso facilitado à Justiça para denunciar agressores e
            buscar medidas protetivas.
          </ListItem>
        </List>

        <Subtitle>Impacto</Subtitle>
        <Paragraph>
          Desde sua implementação, a <Highlight>Lei Maria da Penha</Highlight>{' '}
          tem sido crucial no combate à violência doméstica no Brasil,
          aumentando a conscientização sobre o tema, incentivando denúncias e
          promovendo a proteção das vítimas.
        </Paragraph>
      </Section>
    </div>
  );
};

export default Law;

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
