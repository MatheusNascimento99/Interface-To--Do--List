import "../componentes/ContadorNiver.scss";
import { useState, useEffect } from 'react';

const ContadorNiver = () => {
    const [finalDias, setFinalDias] = useState(0);
    const [finalHoras, setFinalHoras] = useState(0);
    const [finalMinutos, setFinalMinutos] = useState(0);
    const [finalSegundos, setFinalSegundos] = useState(0);
    const [dataLancamento, setDataLancamento] = useState("");

    const handleInputChange = (e) => {
        setDataLancamento(e.target.value);
    };

    const countDown = () => {
        const lancamento = new Date(dataLancamento).getTime();
        const hoje = new Date().getTime();
        const segTotal = (lancamento - hoje) / 1000;

        setFinalDias(Math.floor(segTotal / 60 / 60 / 24));
        setFinalHoras(Math.floor(segTotal / 60 / 60) % 24);
        setFinalMinutos(Math.floor(segTotal / 60) % 60);
        setFinalSegundos(Math.floor(segTotal) % 60);
    };

    useEffect(() => {
        countDown();
        const intervalId = setInterval(countDown, 1000);

        return () => clearInterval(intervalId);
    }, [dataLancamento]);

    const formatoTempo = (tempo) => (tempo < 10 ? `0${tempo}` : tempo);

    return (
        <div >
            <div className='contagem'>
                <label htmlFor="dataLancamento"> <h1>Informe o próximo aniversário:</h1></label>

                <input
                    type="date"
                    id="dataLancamento"
                    value={dataLancamento}
                    onChange={handleInputChange}
                />
                <h6 className="Paragrafo">Faltam:</h6>
            </div>
            <div className='data'>
                <p id="dia">{finalDias}-Dias</p>
                <p id="hora">{formatoTempo(finalHoras)}-Horas</p>
                <p id="minuto">{formatoTempo(finalMinutos)}-Minutos</p>
                <p id="segundo">{formatoTempo(finalSegundos)}-Segundos</p>
            </div>
           



        </div>


    );
};

export default ContadorNiver
