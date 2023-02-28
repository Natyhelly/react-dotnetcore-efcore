import { useEffect, useState } from 'react';
import { Button, Modal, ModalFooter } from 'react-bootstrap';
import api from '../../api/atividade';
import TitlePage from './../../components/TitlePage';
import AtividadeLista from './AtividadeLista';
import AtividadeForm from './AtividadeForm';

export default function Atividade() {
  const [showAtividadeModal, setShowAtividadeModal] = useState(false);
  const [smShowConfirmModal, setSmShowConfirmModal] = useState(false);
  const [atividades, setAtividades] = useState([])
  const [atividade, setAtividade] = useState({id: 0})
  
  const handleAtividadeModal = () => 
    setShowAtividadeModal(!showAtividadeModal);
    
  const handleConfirmModal = (id) => {
    if (id !== 0 && id !== undefined) {
      const atividade = atividades.filter(atividade => atividade.id === id);
      setAtividade(atividade[0]);
    }
    else {
      setAtividade({id:0})
    }
    setSmShowConfirmModal(!smShowConfirmModal);
  }

  const pegaTodasAtividades = async () => {
    const response = await api.get('atividade'); //continuação da URL definida no Axios
    return response.data;
  }
  useEffect(() => {
    //atividades.length <= 0 ? setIndex(1) : setIndex(Math.max.apply(Math,atividades.map((item) => item.id)) + 1)

    const getAtividades = async () => {
      const todasAtividades = await pegaTodasAtividades();
      if (todasAtividades) setAtividades(todasAtividades);
    };
    getAtividades()
  }, []);

  const addAtividade = async (ativ) => {
    handleAtividadeModal();
    const response = await api.post('atividade', ativ);
    setAtividades([...atividades, response.data]);
  };

  const novaAtividade = () => {
    setAtividade({id: 0});
    handleAtividadeModal();
  };

  const cancelarAtividade = () => {
    setAtividade({id: 0});
    handleAtividadeModal();
  };

  const atualizarAtividade = async (ativ) => {
    handleAtividadeModal();
    const response = await api.put(`atividade/${ativ.id}`, ativ);
    const { id } = response.data;
    setAtividades(atividades.map(item => item.id === id ? response.data : item));
    setAtividade({id: 0});
  };

  const deletarAtividade = async (id) => {
    handleConfirmModal(0);
    if (await api.delete(`atividade/${id}`)) {
      const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id);
      setAtividades([...atividadesFiltradas]);
    }
  };

  const pegarAtividade = (id) => {
    const atividade = atividades.filter(atividade => atividade.id === id);
    setAtividade(atividade[0]);
    handleAtividadeModal();
  };

  return (
    <>
      <TitlePage title={'Atividade ' + (atividade.id !== 0 ? atividade.id : '')}>
        <Button variant="btn btn-info" onClick={novaAtividade}>
          <i className="fas fa-plus me-2"></i>
          Nova Atividade
        </Button>
      </TitlePage>

      <AtividadeLista
        atividades={atividades}
        handleConfirmModal={handleConfirmModal}
        pegarAtividade={pegarAtividade}
      />

      <Modal show={showAtividadeModal} onHide={handleAtividadeModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            Atividade {atividade.id !== 0 ? atividade.id : ''}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AtividadeForm
            addAtividade={addAtividade}
            cancelarAtividade={cancelarAtividade}
            atualizarAtividade={atualizarAtividade}
            ativSelecionada={atividade}
            atividades={atividades}
          />
        </Modal.Body>
      </Modal>

      <Modal show={smShowConfirmModal} onHide={handleConfirmModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            Excluindo Atividade
           {/*  {' '} {atividade.id !== 0 ? atividade.id : ''} */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza que deseja excluir a atividade {atividade.id}?
        </Modal.Body>
        <ModalFooter>
          <button className="btn btn-outline-dark me-2" onClick={() => deletarAtividade(atividade.id)}>
            <i className="fas fa-check me-2"></i>
            Sim
          </button>
          <button className="btn btn-light me-2" onClick={() => handleConfirmModal(0)}>
            <i className="fas fa-times me-2"></i>
            Não
          </button>
        </ModalFooter>
      </Modal>
    </>
  )
}