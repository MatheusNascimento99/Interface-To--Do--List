import { useState, useEffect } from 'react';
import "./Cronometro.scss"

const Cronometro = () => {
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
  const [pausado, setPausado] = useState(true); // Inicialmente, o cronômetro está pausado

  useEffect(() => {
    let intervalId;

    if (!pausado) {
      intervalId = setInterval(() => {
        setSegundos((prevSegundos) => prevSegundos + 1);

        if (segundos === 59) {
          setSegundos(0);
          setMinutos((prevMinutos) => prevMinutos + 1);

          if (minutos === 59) {
            setMinutos(0);
            setHoras((prevHoras) => prevHoras + 1);
          }
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [segundos, minutos, horas, pausado]);

  const pausarCronometro = () => {
    setPausado(true);
  };

  const iniciarCronometro = () => {
    setPausado(false);
  };

  const zerarCronometro = () => {
    setSegundos(0);
    setMinutos(0);
    setHoras(0);
    setPausado(true); // Após zerar, o cronômetro fica pausado
  };

  return (
    <div className='cro'>
      <h1>Cronômetro</h1>
      <p >
        {String(horas).padStart(2, '0')}:{String(minutos).padStart(2, '0')}:{String(segundos).padStart(2, '0')}
      </p>
      <div className='bt'>
      <button onClick={iniciarCronometro}>Iniciar</button>
      <button onClick={pausarCronometro}>Pausar</button>
      <button onClick={zerarCronometro}>Zerar</button>
      </div>
      
    </div>
  );
};

export default Cronometro;
