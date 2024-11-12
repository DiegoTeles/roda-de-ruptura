import { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  Grid2,
  Card,
  CardContent,
  Modal,
  Box,
} from '@mui/material';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import StepperAvaliation from '../components/Stepper';

const HeroSection = styled.div`
  background-color: #f5f5f5;
  padding: 50px 0;
  text-align: center;

  @media (max-width: 600px) {
    padding: 30px 0;
  }
`;

const Section = styled.div`
  padding: 50px 0;

  @media (max-width: 600px) {
    padding: 30px 0;
  }
`;

const RodaButton = styled(Button)`
  background-color: #1976d2;
  color: white;
  margin-top: 20px;
  &:hover {
    background-color: #1565c0;
    color: white;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 colunas em telas maiores */
  gap: 16px; /* Espaçamento entre os itens */

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* 1 coluna em telas menores */
  }
`;

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%', // Ajuste para mobile
  maxWidth: '500px', // Limite máximo para telas maiores
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <HeroSection>
        <Container>
          <Typography variant='h2' gutterBottom>
            Bem-vinda ao Roda da Ruptura
          </Typography>
          <Typography variant='h6' paragraph>
            Um espaço seguro para informação, apoio e reflexão. Juntas, somos
            mais fortes.
          </Typography>
          <RodaButton variant='contained' size='large' onClick={handleOpen}>
            Avalie sua saúde emocional
          </RodaButton>
        </Container>
      </HeroSection>

      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Typography variant='h6' gutterBottom>
            Avaliação de Saúde Emocional
          </Typography>
          <StepperAvaliation handleClose={handleClose}  />
        </Box>
      </Modal>

      <Section>
        <Container>
          <Typography variant='h4' gutterBottom>
            Artigos sobre Violência Doméstica
          </Typography>
          <GridContainer>
            <Card>
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  Problematizando definições teóricas, filosóficas e jurídicas
                </Typography>
                <Typography variant='body2'>
                  <a
                    href='https://www.scielo.br/j/psoc/a/Dr7bvbkMvcYSTwdHDpdYhfn'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Leia o artigo completo
                  </a>
                </Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  Concepções e práticas de profissionais de serviços públicos
                </Typography>
                <Typography variant='body2'>
                  <a
                    href='https://pepsic.bvsalud.org/scielo.php?script=sci_arttext&pid=S2236-64072018000200003'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Leia o artigo completo
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </GridContainer>
          <RodaButton
            variant='contained'
            size='large'
            component={Link}
            to='/artigos'
          >
            Ver mais artigos
          </RodaButton>
        </Container>
      </Section>

      <Section>
        <Container>
          <Typography variant='h4' gutterBottom>
            Podcasts
          </Typography>
          <Typography variant='body1' paragraph>
            Ouça nossos podcasts sobre violência doméstica, direitos das
            mulheres e histórias de superação.
          </Typography>
          <GridContainer>
            <Card>
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  Praia dos Ossos
                </Typography>
                <Typography variant='body2'>
                  Este podcast conta a história do feminicídio de Ângela Diniz,
                  um caso de grande repercussão no Brasil dos anos 1970. Ele
                  explora temas como violência doméstica, machismo, e como o
                  sistema judiciário lidou com o caso.
                </Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  Mamilos – Episódio “Violência Doméstica”
                </Typography>
                <Typography variant='body2'>
                  O Mamilos, um podcast que discute temas sociais e culturais,
                  tem episódios dedicados à violência doméstica, trazendo
                  especialistas para debater os sinais, os desafios e as
                  soluções para combater o problema.
                </Typography>
              </CardContent>
            </Card>
          </GridContainer>
          <RodaButton
            variant='contained'
            size='large'
            component={Link}
            to='/podcast'
          >
            Ouça mais podcasts
          </RodaButton>
        </Container>
      </Section>

      <Section>
        <Container>
          <Typography variant='h4' gutterBottom>
            Leis e Direitos
          </Typography>
          <Typography variant='body1' paragraph>
            Conheça as principais leis que protegem as mulheres no Brasil, como
            a Lei Maria da Penha, e saiba como elas podem te ajudar.
          </Typography>
          <RodaButton
            variant='contained'
            size='large'
            component={Link}
            to='/leis-direitos'
          >
            Saiba mais sobre seus direitos
          </RodaButton>
        </Container>
      </Section>

      <Section>
        <Container>
          <Typography variant='h4' gutterBottom>
            Ferramenta Roda da Ruptura
          </Typography>
          <Typography variant='body1' paragraph>
            Avalie sua saúde emocional e identifique áreas da sua vida que
            precisam de mais atenção e cuidado.
          </Typography>
          <RodaButton variant='contained' size='large' onClick={handleOpen}>
            Avalie agora
          </RodaButton>
        </Container>
      </Section>
    </div>
  );
};

export default Home;