import styled from 'styled-components';

// Estilos para o container principal
const Container = styled.section`
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
`;

// Estilos para o título principal
const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

// Estilos para subtítulos
const Subtitle = styled.h2`
  font-size: 20px;
  color: #555;
  margin-top: 20px;
`;

// Estilos para a lista de contatos
const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px 0;
`;

// Estilos para os itens da lista
const ListItem = styled.li`
  margin-bottom: 10px;
  font-size: 16px;
  color: #333;
`;

// Estilos para a caixa de informação importante
const InfoBox = styled.div`
  background-color: #e0f7fa; /* Azul claro */
  padding: 15px;
  border-left: 5px solid #00796b; /* Verde escuro para destaque */
  margin-top: 20px;
  font-size: 16px;
  color: #00796b;
`;

const Contacts = () => {
  return (
    <Container>
      <Title>CONTATOS PARA DENÚNCIAS</Title>

      <Subtitle>COMO PEDIR AJUDA</Subtitle>
      <p>
        Nada justifica a violência contra a mulher. Se você vive uma situação de violência, conhece quem vive e deseja ajudar ou mesmo se algum dia presenciar alguma situação de violência, fique atenta:
      </p>

      <Subtitle>LIGUE:</Subtitle>
      <List>
        <ListItem>• 190 – SE VOCÊ ESTÁ SOFRENDO VIOLÊNCIA OU SE OUVIR GRITOS E SINAIS DE BRIGA;</ListItem>
        <ListItem>• 180 – PARA DENUNCIAR VIOLÊNCIA DOMÉSTICA;</ListItem>
        <ListItem>• 100 – QUANDO A VIOLÊNCIA FOR CONTRA CRIANÇAS.</ListItem>
      </List>
      <p>Por meio desses canais, você pode fazer uma denúncia anônima!</p>

      <Subtitle>COMPAREÇA:</Subtitle>
      <List>
        <ListItem>• à Delegacia de Mulheres da sua cidade;</ListItem>
        <ListItem>• ao Centro Especializado de Atendimento à Mulher;</ListItem>
        <ListItem>• à Defensoria Pública Especializada na Defesa dos Direitos da Mulher em Situação de Violência (Nudem) da sua cidade.</ListItem>
      </List>

      <p>
        Se na sua cidade não houver nenhum serviço especializado no atendimento à mulher em situação de violência, entre em contato com:
      </p>
      <List>
        <ListItem>• a delegacia de polícia mais próxima;</ListItem>
        <ListItem>• o posto da Polícia Militar mais próximo;</ListItem>
        <ListItem>• o serviço de assistência social do seu município (Cras ou Creas);</ListItem>
        <ListItem>• a Promotoria de Justiça da comarca;</ListItem>
        <ListItem>• o fórum da comarca;</ListItem>
        <ListItem>• a Defensoria Pública da comarca.</ListItem>
      </List>

      <Subtitle>CONECTE-SE:</Subtitle>
      <List>
        <ListItem>• <a href="https://delegaciavirtual.sids.mg.gov.br">delegaciavirtual.sids.mg.gov.br</a> – faça o registro virtual da violência que você sofre e peça proteção.</ListItem>
        <ListItem>• MG App Cidadão – baixe o aplicativo e na aba “Segurança” faça o registro virtual da violência que você sofre e peça proteção.</ListItem>
      </List>

      <InfoBox>
        <Subtitle>INFORMAÇÃO IMPORTANTE</Subtitle>
        <p>
          Como se dá o processo de registro do Boletim de Ocorrência? O que acontece depois?
        </p>
        <p>
          A mulher vítima de violência deve procurar uma Delegacia de Polícia Civil – preferencialmente, uma Delegacia de Atendimento à Mulher; mas se no seu município não existir, todas as delegacias fazem o atendimento. Após narrar os fatos, a/o delegada/o fará a tipificação do crime e determinará a lavratura do Boletim de Ocorrência (BO).
        </p>
        <p>
          Se a mulher tiver sido vítima de violência física ou sexual grave, o encaminhamento deverá ser à unidade de saúde ou hospital – que entrará em contato com a Polícia Civil para as providências.
        </p>
        <p>
          Com o registro do BO, inicia-se o procedimento investigativo. Se houver necessidade de requisitar exame de corpo de delito ou outro exame, a autoridade policial fará a solicitação (pedidos comuns em casos de estupro e lesão corporal).
        </p>
        <p>
          Crimes decorrentes de agressão física ou sexual não dependem de representação (são os chamados “crimes de ação penal pública incondicionada”) e uma vez que a autoridade policial tenha recebido a notícia do crime, a investigação vai prosseguir, independente da vontade da vítima – inclusive, se a vítima mantiver ou retomar a convivência com o agressor.
        </p>
      </InfoBox>
    </Container>
  );
};

export default Contacts;
