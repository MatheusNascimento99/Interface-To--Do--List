import"./TelaInicio.scss";
import { Link } from 'react-router-dom';

const TelaInicio = () => {
  return (
    <header className="header">
        <div>

        </div >
        <div>
        <h1>VAMOS COMEÇAR! POR FAVOR ACESSE:</h1>
      
        <button > 
            <Link to={`Organizador`} > ORGANIZADOR DE TAREFAS </Link> 
        </button></div>
        
    </header>
  )
}

export default TelaInicio