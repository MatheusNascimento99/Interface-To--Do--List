import "./TelaInicio.scss";
import { Link } from 'react-router-dom';

const TelaInicio = () => {
  return (
    <header >
      <div className="pginicio">

      </div >
      <div className="bt">
        <h1>VAMOS COMEÇAR! POR FAVOR ACESSE:</h1>

        <button >
          <Link id="lk" to={`Organizador`} > ORGANIZADOR DE TAREFAS </Link>
        </button></div>
        <div id="fim"></div>

    </header>
  )
}

export default TelaInicio