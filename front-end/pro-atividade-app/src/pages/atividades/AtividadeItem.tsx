import React from 'react'
import { Prioridade } from '../../model/atividade';
import { AtividadeItemProps } from './../../model/atividadesProps';

const AtividadeItem: React.FC<AtividadeItemProps> = ({ ativ, pegarAtividade, handleConfirmModal }: AtividadeItemProps) => {
  function prioridadeLabel(param: string) {
    switch(param) {
      case Prioridade.Baixa:
      case Prioridade.Normal:
      case Prioridade.Alta:
        return param;
      default:
        return 'Não definido';
    }
  }
  
  function prioridadeStyle(param: string, icone: boolean) {
    switch(param) {
      case Prioridade.Baixa:
        return icone ? 'grin-beam' : 'success';
      case Prioridade.Normal:
        return icone ? 'grin-alt' : 'info';
      case Prioridade.Alta:
        return icone ? 'grimace' : 'danger';
      default:
        return 'Não definido';
    }
  }
  return (
    <div className={'card mb-2 shadow-sm border-' + prioridadeStyle(ativ.prioridade, false)}>
            <div className='card-body'>
              <div className='d-flex justify-content-between'>
                <h6 className='card-title'>
                <span className='badge text-bg-secondary me-1'>{ativ.id}</span>
                   - {ativ.titulo}
                </h6>
                <h6>
                  Prioridade:
                  <span className={'ms-1 text-' + prioridadeStyle(ativ.prioridade, false)}>
                    <i className={'me-1 far fa-' + prioridadeStyle(ativ.prioridade, true)}></i>
                    {prioridadeLabel(ativ.prioridade)}
                  </span> 
                </h6>
              </div>
              <p className='card-text'> {ativ.descricao}</p>
              <div className='d-flex justify-content-end pt-2 border-top'>
                <button className='btn btn-sm btn-outline-dark me-2' onClick={() => pegarAtividade(ativ.id)}>
                  <i className='fas fa-pen me-2'></i>
                  Editar
                </button>
                <button className='btn btn-sm btn-light' onClick={() => handleConfirmModal(ativ.id)}>
                  <i className='fas fa-trash me-2'></i>
                  Deletar
                </button>
              </div>
            </div>
          </div>
  )
}

export default AtividadeItem;