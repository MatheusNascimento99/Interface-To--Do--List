import { useState } from "react";
import { todoList } from "../componentes/data";
import Modal from "../componentes/Modal";
import ConfirmarModal from "../componentes/ConfirmarModal";
import "./Organizador.scss"
import lixo from "../image/lixo.svg";
import caneta from "../image/caneta.svg";

function Tarefas() {
  // Variáveis de estado usando o hook 'useState' para gerenciar o estado do componente
  const [tarefas, setTarefas] = useState(todoList);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [editandoIndex, setEditandoIndex] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [deletandoIndex, setDeletandoIndex] = useState(null);
  const [mostrarConfirmarModal, setMostrarConfirmarModal] = useState(false);

  // Manipulador de evento para alternar o status de uma tarefa (checkbox)
  const handleCheckboxChange = (index) => {
    const tarefasAtualizadas = [...tarefas];
    tarefasAtualizadas[index].status = !tarefasAtualizadas[index].status;
    setTarefas(tarefasAtualizadas);
  }

  // Manipulador de evento para adicionar uma nova tarefa à lista
  const adicionarTarefa = () => {
    //trim() remove espaços da string. Tanto do final quanto do inicio.
    if (novaTarefa.trim() !== "") {
      // Cria um novo objeto representando a nova tarefa com o texto fornecido e o status inicial como falso
      const novaTarefaObj = { tarefa: novaTarefa, status: false };

      // Atualiza o estado das tarefas, adicionando a nova tarefa ao final do array
      setTarefas([...tarefas, novaTarefaObj]);

      // Limpa o campo de entrada da nova tarefa, tornando-o vazio para a próxima entrada
      setNovaTarefa("");
    }
  }

  // Manipulador de evento para iniciar o modo de edição para uma tarefa
  const handleEditarClick = (index) => {
    setEditandoIndex(index);
    setMostrarModal(true);
  }

  // Manipulador de evento para cancelar a edição de uma tarefa


  // Manipulador de evento para confirmar a edição de uma tarefa
  const handleConfirmarEdicao = (index, novoTexto) => {
    const tarefasAtualizadas = [...tarefas];
    tarefasAtualizadas[index].tarefa = novoTexto;
    setTarefas(tarefasAtualizadas);
    setEditandoIndex(null);
    setMostrarModal(false);
  }

  const handleCancelarEdicao = () => {
    setEditandoIndex(null);
    setMostrarModal(false);
    setNovaTarefa("");
  }

  // Manipulador de evento para iniciar a exclusão de uma tarefa
  const handleDeletarClick = (index) => {
    setDeletandoIndex(index);
    setMostrarConfirmarModal(true);
  }

  // Manipulador de evento para cancelar a exclusão de uma tarefa
  const handleCancelarDelecao = () => {
    setDeletandoIndex(null);
    setMostrarConfirmarModal(false);
  }

  // Manipulador de evento para confirmar a exclusão de uma tarefa
  const handleConfirmarDelecao = () => {
    const tarefasAtualizadas = tarefas.filter((_e, index) => index !== deletandoIndex);
    setTarefas(tarefasAtualizadas);
    setDeletandoIndex(null);
    setMostrarConfirmarModal(false);
  }

  // Renderizando a interface do componente
  return (
    <>
      <div className="topo">
        <h2>Organização</h2>
        <label><h3>Tarefa</h3></label>

      </div>
      <div className="sprincipal">
        <h2>Otimize seu tempo e se organize com o nosso planejador diário</h2>
        <section>
          <h3>Tarefa</h3>
          <h3>Status</h3>
          <h3>Opções</h3>
        </section>
        <hr />

        {/* Mapeando as tarefas para exibi-las */}
        {tarefas.map((e, index) => (
          <div key={e.tarefa} className="usuario">
            <label id="label" htmlFor="">
              {/* Renderização condicional para o modo de edição */}
              {editandoIndex === index ? (
                <div className="txtIn">
                  <input 
                    type="text"
                    value={e.tarefa}
                    onChange={(event) => handleConfirmarEdicao(index, event.target.value)}
                  />
                  <button onClick={handleCancelarEdicao}>Cancelar</button>
                  <button onClick={() => handleConfirmarEdicao(index, e.tarefa)}>Confirmar</button>
                </div>
              ) : (
                <>
                  {e.tarefa}

                  {/* Checkbox para o status da tarefa */}


                </>
              )}<div className="uni">
                <input className="check"
                  type="checkbox"
                  name=""
                  id="CK"
                  checked={e.status}
                  onChange={() => handleCheckboxChange(index)}
                />

                {/* Botões para editar e excluir tarefas */}
                <div className="icons">
                  <button onClick={() => handleEditarClick(index)}><img className="img" src={caneta} /></button>
                  <button onClick={() => handleDeletarClick(index)}><img className="img" src={lixo} /></button>
                </div>
              </div>
            </label>
          </div>
        ))}

        {/* Entrada e botão para adicionar uma nova tarefa */}
        <div className="txtIn">
          <input id="txtIn"
            type="text"
            placeholder="Nova tarefa..."
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
          />
          <button onClick={adicionarTarefa}> + </button>
        </div>

        {/* Modal para editar tarefas */}
        <Modal
          mostrar={mostrarModal}
          handleClose={() => setMostrarModal(false)}
          handleConfirmar={(novoNome) => handleConfirmarEdicao(editandoIndex, novoNome)}
        />

        {/* Modal para confirmar a exclusão de tarefas */}
        <ConfirmarModal
          mostrar={mostrarConfirmarModal}
          handleClose={handleCancelarDelecao}
          handleConfirmar={handleConfirmarDelecao}
        />
      </div>
    </>

  )
}

// Exportando o componente para uso em outras partes da aplicação
export default Tarefas;
