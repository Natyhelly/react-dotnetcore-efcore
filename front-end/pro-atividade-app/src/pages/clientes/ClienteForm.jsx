import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import TitlePage from './../../components/TitlePage';

export default function ClienteForm() {
  const navigate = useNavigate();
  let { id } = useParams();

  // Método Arrow Function para setar uma rota específica no hook useNavigate()

  //const voltarListaClientes = () => {
  //navigate.push('/cliente/lista')
  //}
  return (
    <>
      <TitlePage title={'Cliente Detalhes ' + (id !== undefined ? id : '')}>
        <Button variant='dark' onClick={() => navigate('/clientes/lista')}>
          <i className='fas fa-reply me-2'></i>
          Voltar
        </Button>
      </TitlePage>
      <div></div>
    </>
  )
}
