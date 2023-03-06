import React from 'react'
import AtividadeItem from './AtividadeItem'
import { AtividadeListaProps } from '../../model/atividadesProps';

const AtividadeLista: React.FC<AtividadeListaProps> = ({ atividades, pegarAtividade, handleConfirmModal }: AtividadeListaProps) => {
  return (
    <div className="mt-3">
        {atividades.map((ativ) => (
          <AtividadeItem
            key={ativ.id}
            handleConfirmModal={handleConfirmModal}
            pegarAtividade={pegarAtividade}
            ativ={ativ}
          />  
        ))}
    </div>
  )
}

export default AtividadeLista;