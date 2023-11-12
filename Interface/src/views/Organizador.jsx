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
  if (novaTarefa.trim() !== "") { // trim para remover espaços da string
    const novaTarefaObj = { tarefa: novaTarefa, status: false }; // para cria um novo objeto representando a nova tarefa com o texto fornecido e o status inicial como falso.
    setTarefas([...tarefas, novaTarefaObj]); // Atualiza o estado das tarefas, adicionando a nova tarefa ao final do array
    setNovaTarefa(""); //limpa o campo deixando-o vazio
  }
}


// Manipulador de evento para iniciar o modo de edição para uma tarefa
const handleEditarClick = (index) => {
  setEditandoIndex(index);
  setMostrarModal(true); //chama o modal tornando-o visível
}

// Manipulador de evento para cancelar a edição de uma tarefa
const handleConfirmarEdicao = (index, novoTexto) => {
  const tarefasAtualizadas = [...tarefas];
  tarefasAtualizadas[index].tarefa = novoTexto;
  setTarefas(tarefasAtualizadas);//atualiza lista de tarefas
  setEditandoIndex(null);
  setMostrarModal(false); //remove modal 
}

// Manipulador de evento para confirmar a edição de uma tarefa
const handleConfirmarEdicao = (index, novoTexto) => {
  const tarefasAtualizadas = [...tarefas];
  tarefasAtualizadas[index].tarefa = novoTexto; //adiciona a nova tarefa conforme sua posição
  setTarefas(tarefasAtualizadas); //atualiza a lista de tarefa após a inserção da nova tarefa.
  setEditandoIndex(null);
  setMostrarModal(false); //remove o modal
}

// Manipulador de evento para iniciar a exclusão de uma tarefa
const handleDeletarClick = (index) => {
  setDeletandoIndex(index);
  setmostrarConfirmarModal(true);
}

// Manipulador de evento para cancelar a exclusão de uma tarefa
const handleCancelarDelecao = () => {
  setDeletandoIndex(null); //cancela o ato de apagar o elemento conforme posição (index)
  setmostrarConfirmarModal(false);

}


// Manipulador de evento para confirmar a exclusão de uma tarefa
const handleConfirmarDelecao = () => {
  const tarefasAtualizadas = tarefas.filter((_e, index) => index !== deletandoIndex);
  setTarefas(tarefasAtualizadas); //retomar as tarefas atualizadas sem a que foi deletada
  setDeletandoIndex(null);
  setMostrarConfirmarModal(false);
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