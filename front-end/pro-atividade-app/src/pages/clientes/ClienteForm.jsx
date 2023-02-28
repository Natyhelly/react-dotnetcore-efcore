import React from 'react'
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import TitlePage from './../../components/TitlePage';

export default function ClienteForm() {
  const history = useHistory();
  let { id } = useParams();

  // Método Arrow Function para setar uma rota específica no hook useHistory()

  //const voltarListaClientes = () => {
  //history.push('/cliente/lista')
  //}
  return (
    <>
      <TitlePage title={'Cliente Detalhes ' + (id !== undefined ? id : '')}>
        <Button variant='dark' onClick={() => history.goBack()}>
          <i className='fas fa-reply me-2'></i>
          Voltar
        </Button>
      </TitlePage>
      <div></div>
    </>
  )
}
