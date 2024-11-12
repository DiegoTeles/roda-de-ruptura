import React, { useEffect, useState } from 'react';
import { PolarArea } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import styled from 'styled-components';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

// Registrar os componentes necessários do Chart.js
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const StyledIconButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.selected ? props.theme.palette.primary.main : '#e0e0e0'};
  color: ${(props) => (props.selected ? 'white' : 'black')};
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.selected ? props.theme.palette.primary.dark : '#bdbdbd'};
  }
`;

const TextSection = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  line-height: 1.6;
  font-size: 1rem;
  color: #333;
`;
const AlertBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff3cd;
  color: #856404;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 1rem;
  text-align: center;
  line-height: 1.5;

  svg {
    margin-right: 10px;
    position: absolute;
    top: -13px;
    left: -7px;
    background: #fff3cd;
    padding: 3px;
    border-radius: 100%;
  }
`;
const labels = [
  'Saúde e disposição',
  'Desenvolvimento intelectual',
  'Equilíbrio emocional',
  'Realização & Propósito',
  'Recursos financeiros',
  'Família',
  'Relacionamento amoroso',
  'Vida social',
  'Hobbies & Diversão',
  'Plenitude & Felicidade',
  'Espiritualidade',
];

export default function ResultsPage() {
  const theme = useTheme();
  const [responses, setResponses] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [stepperResponses, setStepperResponses] = useState(
    Array(labels.length).fill(null)
  );
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const savedResponses = JSON.parse(localStorage.getItem('responses')) || [];
    if (savedResponses.length === 0) {
      setOpenModal(true);
    }
    setResponses(savedResponses);
  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleValueSelect = (value) => {
    const updatedResponses = [...stepperResponses];
    updatedResponses[activeStep] = value;
    setStepperResponses(updatedResponses);
  };

  const handleSave = () => {
    localStorage.setItem('responses', JSON.stringify(stepperResponses));
    setResponses(stepperResponses);
    setOpenModal(false);
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Avaliações',
        data: responses,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)', // Vermelho
          'rgba(75, 192, 192, 0.5)', // Verde
          'rgba(255, 205, 86, 0.5)', // Amarelo
          'rgba(54, 162, 235, 0.5)', // Azul
          'rgba(153, 102, 255, 0.5)', // Roxo
          'rgba(255, 159, 64, 0.5)', // Laranja
          'rgba(201, 203, 207, 0.5)', // Cinza
          'rgba(255, 99, 71, 0.5)', // Tomate
          'rgba(60, 179, 113, 0.5)', // Verde Mar
          'rgba(255, 215, 0, 0.5)', // Ouro
          'rgba(138, 43, 226, 0.5)', // Azul Violeta
          'rgba(0, 128, 128, 0.5)', // Verde Azulado
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(201, 203, 207, 1)',
          'rgba(255, 99, 71, 1)',
          'rgba(60, 179, 113, 1)',
          'rgba(255, 215, 0, 1)',
          'rgba(138, 43, 226, 1)',
          'rgba(0, 128, 128, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Desativar a legenda no gráfico
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Permitir que o gráfico se ajuste ao container
  };

  // Componente separado para a legenda
  const LegendComponent = () => (
    <div style={{ marginTop: '20px' }}>
      <h3>Legenda</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {labels.map((label, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <span
              style={{
                display: 'inline-block',
                width: '20px',
                height: '20px',
                backgroundColor: data.datasets[0].backgroundColor[index],
                marginRight: '10px',
              }}
            ></span>
            {label}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div style={{ maxWidth: '100%', margin: 'auto', padding: '20px' }}>
      <AlertBox>
        <AiOutlineExclamationCircle size={24} style={{ marginRight: '10px' }} />
        Este teste é apenas um guia inicial. <br />
        Para uma avaliação completa e o suporte necessário, é essencial procurar
        um profissional de saúde mental, que pode oferecer a ajuda adequada para
        o que você está passando.
      </AlertBox>
      <h1 style={{ textAlign: 'center' }}>Resultados da avaliação</h1>
      {/* Gráfico */}
      <div
        style={{
          height: '50vh',
          width: '100%',
          maxWidth: '600px', // Limitar a largura máxima em telas grandes
          margin: 'auto',
        }}
      >
        <PolarArea data={data} options={options} />
      </div>
      {/* Legenda separada */}
      <LegendComponent />
      {/* Texto explicativo */}
      <TextSection>
        <h2>
          Reflexão sobre os aspectos da vida afetados pelo abuso psicológico
        </h2>
        <p>
          Aqui estão descrições para ajudar a entender a importância de cada
          aspecto da vida que pode ser afetado pelo abuso psicológico. Esses
          textos buscam despertar uma reflexão sobre como cada área é essencial
          para o bem-estar e como um relacionamento abusivo pode impactar cada
          uma delas.
        </p>
        <h3>1. Saúde e Disposição</h3>
        <p>
          A saúde física e disposição são fundamentais para enfrentar o dia a
          dia. Sentir-se constantemente cansada ou com dores pode ser um sinal
          de que algo está drenando sua energia e vitalidade. O estresse e o
          medo podem prejudicar seu sistema imunológico, aumentar a fadiga e
          causar sintomas físicos. Cuidar da saúde permite que você tenha mais
          energia e aproveite melhor a vida, ajudando a encarar desafios com
          força e resiliência.
        </p>

        <h3>2. Desenvolvimento Intelectual</h3>
        <p>
          O desenvolvimento intelectual é mais do que estudar ou aprender algo
          novo — é também uma forma de valorizar a si mesma e investir em suas
          habilidades. Estar em um relacionamento onde seu crescimento
          intelectual é desencorajado ou minimizado pode bloquear seu potencial
          e impedir que você evolua. Aprender coisas novas e cultivar interesses
          próprios são formas de ampliar sua autonomia e realizar seus sonhos.
        </p>

        <h3>3. Equilíbrio Emocional</h3>
        <p>
          O equilíbrio emocional envolve sentir-se segura e capaz de lidar com
          as emoções. Estar em uma relação abusiva afeta esse equilíbrio, pois o
          medo e a culpa constantes desgastam a capacidade de gerir sentimentos.
          Encontrar o equilíbrio emocional ajuda você a tomar decisões mais
          claras e a construir relacionamentos mais saudáveis e enriquecedores,
          onde se sinta valorizada.
        </p>

        <h3>4. Realização e Propósito</h3>
        <p>
          Ter um sentido de propósito é essencial para a autoestima e para
          alcançar realizações pessoais. Em um relacionamento onde você se sente
          controlada ou desvalorizada, é comum perder essa conexão com seu
          propósito. Lembrar do que traz significado à sua vida e buscar
          realizar seus objetivos pessoais pode ser um passo importante para
          retomar o controle sobre sua vida e seu futuro.
        </p>

        <h3>5. Recurso Financeiro</h3>
        <p>
          A independência financeira é um fator importante para sua autonomia e
          segurança. O abuso psicológico muitas vezes inclui o controle sobre o
          dinheiro, dificultando que você se sinta livre para tomar decisões.
          Ter controle sobre seus recursos e finanças é importante para criar
          uma base sólida e para poder escolher caminhos sem depender de
          ninguém, o que traz segurança e confiança.
        </p>

        <h3>6. Família</h3>
        <p>
          A família pode ser uma importante rede de apoio em momentos difíceis.
          Em uma relação abusiva, é comum o abusador tentar afastar a vítima de
          seus entes queridos, criando um sentimento de isolamento. Valorizar e
          manter essas relações familiares pode ser um suporte essencial,
          ajudando você a se sentir acolhida e fortalecida.
        </p>

        <h3>7. Relacionamento Amoroso</h3>
        <p>
          O relacionamento amoroso deve ser um espaço de afeto, respeito e
          companheirismo. Se esse vínculo se tornou uma fonte de dor e
          desrespeito, isso é um sinal de alerta. Relacionamentos saudáveis são
          fundamentais para o bem-estar e devem promover segurança e apoio
          mútuo. Reconhecer a importância de um relacionamento saudável pode
          ajudar a perceber que você merece amor e respeito.
        </p>

        <h3>8. Vida Social</h3>
        <p>
          A vida social é essencial para a autoestima e para manter uma visão
          positiva da vida. Um parceiro abusivo pode tentar limitar suas
          amizades e fazer com que você se afaste de pessoas queridas. Manter
          uma rede de amigos e compartilhar momentos felizes com outras pessoas
          traz suporte emocional e a chance de se sentir aceita e valorizada.
        </p>

        <h3>9. Hobbies e Diversão</h3>
        <p>
          Praticar hobbies e buscar momentos de lazer são formas de aliviar o
          estresse e encontrar alegria no dia a dia. Em um relacionamento
          abusivo, a vítima pode ser desestimulada ou até proibida de participar
          de atividades que trazem prazer. Reservar tempo para hobbies é um
          lembrete de que você merece momentos de felicidade e pode fortalecer
          sua capacidade de enfrentar dificuldades.
        </p>

        <h3>10. Plenitude e Felicidade</h3>
        <p>
          Plenitude e felicidade são sinais de uma vida equilibrada e
          significativa. O abuso psicológico prejudica esse estado de bem-estar,
          minando a alegria e a satisfação com a vida. Reconhecer a importância
          de se sentir plena e feliz é um passo para entender que você merece
          buscar um caminho que lhe traga paz e realização.
        </p>
        <h3>11. Espiritualidade</h3>
        <p>
          O abuso psicológico também pode afetar profundamente a vida espiritual
          ou religiosa da vítima. Em um relacionamento abusivo, a pessoa pode
          começar a sentir que está desconectada de sua fé, especialmente se o
          parceiro ridiculariza ou desvaloriza suas crenças. Esse distanciamento
          pode levar à perda de um importante recurso de força e apoio
          emocional, dificultando ainda mais a superação dos desafios diários.
          Além disso, a espiritualidade muitas vezes proporciona um senso de
          propósito e paz interior, e quando isso é enfraquecido, a vítima pode
          se sentir sem direção e menos esperançosa. Restaurar essa conexão é
          essencial para o fortalecimento pessoal e para o processo de cura{' '}
        </p>
      </TextSection>
      <Dialog open={openModal} disableEscapeKeyDown fullWidth maxWidth='sm'>
        <DialogTitle>Vamos primeiro fazer uma avaliação:</DialogTitle>
        <DialogContent>
          <Card sx={{ maxWidth: '100%', margin: 'auto', mt: 2 }}>
            <CardContent>
              <Typography variant='h6' gutterBottom>
                {labels[activeStep]}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Como você avalia este item de 0 a 10?
              </Typography>
              <Grid
                container
                spacing={1}
                justifyContent='center'
                sx={{ mt: 2 }}
              >
                {Array.from({ length: 11 }, (_, index) => (
                  <Grid item key={index}>
                    <StyledIconButton
                      onClick={() => handleValueSelect(index)}
                      selected={stepperResponses[activeStep] === index}
                      theme={theme}
                    >
                      {index}
                    </StyledIconButton>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </DialogContent>
        <DialogActions>
          <MobileStepper
            variant='dots'
            steps={labels.length}
            position='static'
            activeStep={activeStep}
            sx={{ maxWidth: '100%', flexGrow: 1, margin: 'auto', mt: 2 }}
            nextButton={
              activeStep === labels.length - 1 ? (
                <Button
                  size='small'
                  onClick={handleSave}
                  disabled={stepperResponses.includes(null)}
                >
                  Salvar
                </Button>
              ) : (
                <Button
                  size='small'
                  onClick={handleNext}
                  disabled={stepperResponses[activeStep] === null}
                >
                  Próximo{' '}
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              )
            }
            backButton={
              <Button
                size='small'
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Anterior
              </Button>
            }
          />
        </DialogActions>
      </Dialog>
      {/* Media query para ajustar o layout no mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*='height: 50vh'] {
            height: 40vh; // Ajustar a altura do gráfico em telas menores
          }
        }
      `}</style>
    </div>
  );
}
