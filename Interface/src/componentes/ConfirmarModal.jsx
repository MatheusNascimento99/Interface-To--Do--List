import PropTypes from "prop-types";

function ConfirmarModal({ mostrar, handleClose, handleConfirmar }) {
    const estiloModal = {
        display: mostrar ? 'block' : 'none',
        position: 'fixed',
        zIndex: 1,
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        overflow: 'auto',
        backgroundColor: 'rgba(0,0,0,0.4)',
        padding: '50px'
    };

    const estiloConteudo = {
        backgroundColor: '#fefefe',
        margin: '15% auto',
        padding: '20px',
        border: '1px solid #888',
        width: '80%'
    };

    return (
        <div style={estiloModal}>
            <div style={estiloConteudo}>
                <h2>Deseja mesmo excluir esse item?</h2>
                <button onClick={handleClose}>Não</button>
                <button onClick={handleConfirmar}>Sim</button>
            </div>
        </div>
    );
}

ConfirmarModal.propTypes = {
    mostrar: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleConfirmar: PropTypes.func.isRequired,
};

export default ConfirmarModal;
