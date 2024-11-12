import { useState, useEffect } from 'react';

function MemoryMonitor() {
  const [memoryUsage, setMemoryUsage] = useState({
    used: 0,
    total: 0,
    limit: 0,
  });

  useEffect(() => {
    // Verifica se a API de memória está disponível
    if (performance.memory) {
      console.log(performance);

      // Função para atualizar o uso de memória
      const updateMemoryUsage = () => {
        const memoryInfo = performance.memory;
        console.log('memoryInfo :>> ', memoryInfo);
        setMemoryUsage({
          used: (memoryInfo.usedJSHeapSize / 1024 / 1024).toFixed(2), // em MB
          total: (memoryInfo.totalJSHeapSize / 1024 / 1024).toFixed(2), // em MB
          limit: (memoryInfo.jsHeapSizeLimit / 1024 / 1024).toFixed(2), // em MB
        });
      };

      // Atualiza o uso de memória a cada segundo
      const intervalId = setInterval(updateMemoryUsage, 1000);

      // Limpa o intervalo quando o componente é desmontado
      return () => clearInterval(intervalId);
    } else {
      console.log('A API de memória não é suportada neste navegador.');
    }
  }, []);

  return (
    <div>
      <h2>Monitoramento de Memória</h2>
      {performance.memory ? (
        <div>
          <p>Memória usada: {memoryUsage.used} MB</p>
          <p>Memória total: {memoryUsage.total} MB</p>
          <p>Limite de memória: {memoryUsage.limit} MB</p>
        </div>
      ) : (
        <p>A API de memória não é suportada neste navegador.</p>
      )}
    </div>
  );
}

export default MemoryMonitor;
