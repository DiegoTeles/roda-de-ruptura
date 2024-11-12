// import { useState } from 'react';
// import styled from 'styled-components';

// const ConeContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   flex-direction: row;
//   gap: 10px;
//   margin-top: 20px;
// `;

// const Trapezoid = styled.div`
//   width: 205px;
//   background-color: #3498db;
//   clip-path: polygon(
//     ${(props) => (props.level - 1) * 4.17}% 0%,
//     ${(props) => 100 - (props.level - 1) * 4.17}% 0%,
//     ${(props) => 100 - props.level * 4.17}% 100%,
//     ${(props) => props.level * 4.17}% 100%
//   );
//   color: black;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   cursor: pointer;
// `;

// const ConeColumns = ({ values, title }) => {
//   const lines = Array.from({ length: 10 }, (_, i) => i + 1).reverse();
//   const [selectedValue, setselectedValue] = useState([]);

//   console.log('selectedValue :>> ', selectedValue);

//   return (
//     <ConeContainer>
//      {/*  <div
//         style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
//         onClick={() => console.log(`Escolhido   de ${values[0]}`)}
//       >
//         {values.length &&
//           values.map((line, index) => (
//             <Trapezoid
//               key={line}
//               level={++index}
//               isLast={index === lines.length - 1}
//               onClick={() => console.log(`Escolhido ${line} de ${values[0]}`)}
//             >
//               <div>
//                 <p>{line}</p>
//               </div>
//             </Trapezoid>
//           ))}
//       </div> */}

//       <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
//         {lines.map((line, index) => (
//           <Trapezoid
//             key={line}
//             level={++index}
//             isLast={index === lines.length - 1}
//             onClick={() => console.log(`Escolhido ${line} de ${values[0]}`)}
//           >
//             <div>
//               <p>{line}</p>
//             </div>
//           </Trapezoid>
//         ))}
//       </div>
//     </ConeContainer>
//   );
// };

// export default ConeColumns;

import React from 'react';
import styled from 'styled-components';

const ConeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  margin-top: 20px;
`;

const TrapezoidSVG = ({ level, totalLevels, color }) => {
  const topWidth = 100 - (level - 1) * 4.17;
  const bottomWidth = 100 - level * 4.17;
  const points = `
    ${50 - topWidth / 2}%, 0%,
    ${50 + topWidth / 2}%, 0%,
    ${50 + bottomWidth / 2}%, 100%,
    ${50 - bottomWidth / 2}%, 100%
  `;

  return (
    <svg width="200" height="100" viewBox="0 0 100 50">
      <polygon points={points} fill={color} />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="5" fill="black">
        {level}
      </text>
    </svg>
  );
};

const ConeColumns = ({ values }) => {
  //const totalLevels = values.length || 11;
  const totalLevels =  11;

  return (
    <ConeContainer>
      {values.map((value, index) => (
        <TrapezoidSVG
          key={index}
          level={index + 1}
          totalLevels={totalLevels}
          color="#3498db"
        />
      ))}
    </ConeContainer>
  );
};

export default ConeColumns;