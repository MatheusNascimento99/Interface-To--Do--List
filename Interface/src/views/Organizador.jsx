import { useState } from "react";
import "../views/Organizador.scss";
import { todoList } from "../componentes/data";
import Modal from  '../componentes/Modal';
import ConfirmarModal from '../componentes/ConfirmarModal';

function Tarefas (){
    // Variáveis de estado usando o hook 'useState' para gerenciar o estado do componente   
    const [tarefas, setTarefas] = useState (todoList); //aqui ele chama a constante controlável.
    const [novaTarefa, setNovaTarefa] = useState (""); //para manipular a nova tarefa que será inserida.
    const [editandoIndex, setEditandoIndex] = useState(null);// para manipular a posição do elemento no array.
    
}


const Organizador = () => {
  return (
    <div className="divborda">
      <h5>Organização</h5>
      <h4>Tarefa</h4>
      <div className="function">
        <h2>Otimize seu tempo e se organize com o nosso Planejador Diário.</h2>
        {/* Mapeando as tarefas para exibi-las */}
        <div className="afazeres">
          


        </div>


      </div>
    </div>
  )
}

export default Organizador