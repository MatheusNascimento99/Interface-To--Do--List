import { useState } from "react";
import "../views/Organizador.scss";
import { todoList } from "../componentes/data";
import Modal from '../componentes/Modal';
import ConfirmarModal from '../componentes/ConfirmarModal';

function Tarefas() {
  // Variáveis de estado usando o hook 'useState' para gerenciar o estado do componente   
  const [tarefas, setTarefas] = useState(todoList); //aqui ele chama a constante controlável(checkbok).
  const [novaTarefa, setNovaTarefa] = useState(""); //para manipular a nova tarefa que será inserida.
  const [editandoIndex, setEditandoIndex] = useState(null);// para manipular a posição do elemento no array.
  const [mostrarModal, setMostrarModal] = useState(null); //para chamar modal
  const [deletandoIndex, setDeletandoIndex] = useState(null);//para apagar tarefa
  const [mostrarConfirmarModal, setmostrarConfirmarModal] = useState(null);//para confirmar modal
}

//manipulador de evento para alterar o estado da tarefa (checkbok).
const handleCheckboxChange = (index) => { //aqui eu passo o index como parâmetro para que ele saiba qual checkbox alterar.
  cosnt tarefasAtualizadas = [...tarefas];//aqui ele atualiza a nova tarefa com todas as tarefas anteriores.
  tarefasAtualizadas[index].status = !tarefasAtualizadas[index].status;
  setTarefas(tarefasAtualizadas);
}

// Manipulador de evento para adicionar uma nova tarefa à lista
const adicionarTarefa = () => {
  if (novaTarefa.trim() !=="") { // trim para remover espaços da string
    const novaTarefaObj = {tarefa: novaTarefa, status: false}; // para cria um novo objeto representando a nova tarefa com o texto fornecido e o status inicial como falso.
    setTarefas([...tarefas, novaTarefaObj]); // Atualiza o estado das tarefas, adicionando a nova tarefa ao final do array
    setNovaTarefa(""); //limpa o campo deixando-o vazio
  }
}


// Manipulador de evento para iniciar o modo de edição para uma tarefa




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