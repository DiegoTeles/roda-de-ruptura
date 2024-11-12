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
  const [legendPosition, setLegendPosition] = useState('right'); // Estado para controlar a posição da legenda

  useEffect(() => {
    const savedResponses = JSON.parse(localStorage.getItem('responses')) || [];
    if (savedResponses.length === 0) {
      setOpenModal(true);
    }
    setResponses(savedResponses);

    // Função para ajustar a posição da legenda com base no tamanho da tela
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setLegendPosition('bottom'); // Legenda abaixo do gráfico em telas menores
      } else {
        setLegendPosition('right'); // Legenda na lateral em telas maiores
      }
    };

    // Adicionar o event listener para redimensionamento da tela
    window.addEventListener('resize', handleResize);

    // Chamar a função uma vez para definir a posição inicial
    handleResize();

    // Limpar o event listener ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
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
        display: true,
        position: legendPosition, // Posição da legenda controlada pelo estado
        align: 'end',
        labels: {
          boxWidth: 20,
          padding: 20,
        },
        maxWidth: 200,
        maxHeight: 400,
        title: {
          display: true,
          text: 'Categorias',
        },
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
    maintainAspectRatio: false,
  };

  return (
    <div style={{ maxWidth: '100%', margin: 'auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Resultados da avaliação</h1>
      <div style={{ height: '50vh', width: '100%' }}>
        <PolarArea data={data} options={options} />
      </div>

      <Dialog open={openModal} disableEscapeKeyDown fullWidth maxWidth="sm">
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
    </div>
  );
}