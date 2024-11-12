import styled from 'styled-components';
import './App.css';
import SvgRadarChart from './ConeColumns';

const ArcContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: conic-gradient(
    #3498db 0deg 180deg,
    transparent 180deg 360deg
  ); /* Cria o arco */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transform: rotate(-90deg); /* Ajusta a rotação para acompanhar o arco */
  font-size: 1.2rem;
  color: #333;
`;

function App() {
  return (
    <>
      {/*    <div className='card'>
        <div
          style={{
            position: 'absolute ',
            transform: 'rotate(14.09deg)',
            top: '17px',
            right: '600px',
          }}
        >
          <SvgRadarChart />
        </div>
        <div
          style={{
            transform: 'rotate(43.09deg)',
            position: 'fixed',
            top: '73px',
            right: '496px',
          }}
        >
          <SvgRadarChart />
        </div>
        <div
          style={{
            transform: 'rotate(72.09deg)',
            position: 'fixed',
            top: '172px',
            right: '433px',
          }}
        >
          <SvgRadarChart />
        </div>
        <div
          style={{
            position: 'fixed',
            transform: 'rotate(102.09deg)',
            top: '293px',
            right: '426px',
          }}
        >
          <SvgRadarChart />
        </div>
        <div
          style={{
            position: 'fixed',
            transform: 'rotate(132.09deg)',
            top: '400px',
            right: '481px',
          }}
        >
          <SvgRadarChart />
        </div>
        <div
          style={{
            position: 'fixed',
            transform: 'rotate(163.09deg)',
            top: '465px',
            right: '586px',
          }}
        >
          <SvgRadarChart />
        </div>
        <div
          style={{
            position: 'fixed',
            transform: 'rotate(193.09deg)',
            top: '468px',
            right: '708px',
          }}
        >
          <SvgRadarChart />
        </div>
        <div
          style={{
            position: 'fixed',
            transform: 'rotate(223.09deg)',
            top: '410px',
            right: '815px',
          }}
        >
          <SvgRadarChart />
        </div>
        <div
          style={{
            position: 'fixed',
            transform: 'rotate(253.09deg)',
            top: '309px',
            right: '878px',
          }}
        >
          <SvgRadarChart />
        </div>
        <div
          style={{
            position: 'fixed',
            transform: 'rotate(283.09deg)',
            top: '189px',
            right: '883px',
          }}
        >
          <SvgRadarChart />
        </div>
        <div
          style={{
            position: 'fixed',
            transform: 'rotate(313.09deg)',
            top: '83px',
            right: '827px',
          }}
        >
          <SvgRadarChart />
        </div>
        <div
          style={{
            position: 'fixed',
            transform: 'rotate(344.09deg)',
            top: '19px',
            right: '722px',
          }}
        >
          <SvgRadarChart />
        </div>
      </div> */}

      {/*       <div>
        {positions.map((pos, index) => (
          <div
            key={index}
            style={{
              position: 'fixed',
              //transform: `rotate(${pos.rotate})`,
              top: pos.top,
              right: pos.right,
              pointerEvents: 'auto',
              zIndex: index + 1,
            }}
          >
            <div style={{ transform: `rotate(${pos.rotate})` }}>
              <SvgRadarChart
                title={data[index].value}
                values={data[index].value}
                onClick={() => console.log(`Escolhido ${data[index].value[0]}`)}
              />
            </div>
          </div>
        ))}
      </div> */}

      <ConeColumns values={values} />
    </>
  );
}

export default App;

const values = [
  'Saúde e disposição',
  'Desenvolvimento intelectual',
  'Equilíbrio emocional',
  'Realização & Propósito',
  'Recursos financeiros',
  'Contribuição social',
  'Família',
  'Relacionamento amoroso',
  'Vida social',
  'Hobbies & Diversão',
  'Plenitude & Felicidade',
  'Espiritualidade'
];

const positions = [
  { id: 1, rotate: '14.09deg', top: '17px', right: '600px' },
  { id: 2, rotate: '43.09deg', top: '73px', right: '496px' },
  { id: 3, rotate: '72.09deg', top: '172px', right: '433px' },
  { id: 4, rotate: '102.09deg', top: '293px', right: '426px' },
  { id: 5, rotate: '132.09deg', top: '400px', right: '481px' },
  { id: 6, rotate: '163.09deg', top: '465px', right: '586px' },
  { id: 7, rotate: '193.09deg', top: '468px', right: '708px' },
  { id: 8, rotate: '223.09deg', top: '410px', right: '815px' },
  { id: 9, rotate: '253.09deg', top: '309px', right: '878px' },
  { id: 10, rotate: '283.09deg', top: '189px', right: '883px' },
  { id: 11, rotate: '313.09deg', top: '83px', right: '827px' },
  { id: 0, rotate: '344.09deg', top: '19px', right: '722px' },
];

// Dados de cada tema e valores
const data = [
  { value: ['Saúde e disposição', 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
  { value: ['Desenvolvimento intelectual', 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
  { value: ['Equilíbrio emocional', 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
  { value: ['Realização & Propósito', 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
  { value: ['Recursos financeiros', 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
  { value: ['Contribuição social', 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
  { value: ['Família', 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
  { value: ['Relacionamento amoroso', 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
  { value: ['Vida social', 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
  { value: ['Hobbies & Diversão', 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
  { value: ['Plenitude & Felicidade', 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
  { value: ['Espiritualidade', 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] },
];
