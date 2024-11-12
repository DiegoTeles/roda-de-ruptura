import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Card, CardContent, Typography, Grid, Grid2 } from '@mui/material';
import styled from 'styled-components';

const StyledIconButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => (props.selected ? props.theme.palette.primary.main : '#e0e0e0')};
  color: ${(props) => (props.selected ? 'white' : 'black')};
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.selected ? props.theme.palette.primary.dark : '#bdbdbd')};
  }
`;

const values = [
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
  'Espiritualidade'
];

export default function DotsMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [responses, setResponses] = React.useState(Array(values.length).fill(null)); 

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleValueSelect = (value) => {
    const updatedResponses = [...responses];
    updatedResponses[activeStep] = value;
    setResponses(updatedResponses);
  };

  const handleSave = () => {
    localStorage.setItem('responses', JSON.stringify(responses));
  };

  return (
    <div>
      <Card sx={{ maxWidth: 500, margin: 'auto', mt: 5 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {values[activeStep]}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Como você avalia este item de 0 a 10?
          </Typography>
          <Grid2 container spacing={1} justifyContent="center" sx={{ mt: 2 }}>
            {Array.from({ length: 11 }, (_, index) => (
              <Grid item key={index}>
                <StyledIconButton
                  onClick={() => handleValueSelect(index)}
                  selected={responses[activeStep] === index}
                  theme={theme}
                >
                  {index}
                </StyledIconButton>
              </Grid>
            ))}
          </Grid2>
        </CardContent>
      </Card>

      <MobileStepper
        variant="dots"
        steps={values.length}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1, margin: 'auto', mt: 2 }}
        nextButton={
          activeStep === values.length - 1 ? (
            <Button size="small" onClick={handleSave}>
              Salvar
            </Button>
          ) : (
            <Button size="small" onClick={handleNext} disabled={responses[activeStep] === null}>
              Próximo
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          )
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Anterior
          </Button>
        }
      />
    </div>
  );
}