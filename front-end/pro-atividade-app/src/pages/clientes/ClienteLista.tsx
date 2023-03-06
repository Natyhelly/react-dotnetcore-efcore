import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import TitlePage from './../../components/TitlePage';

const clientes = [
  {
    id: 1,
    nome: 'Microsoft',
    responsavel: 'Romario',
    contato: '12345678',
    situacao: 'Ativo'
  },
  {
    id: 2,
    nome: 'Google',
    responsavel: 'Lisa',
    contato: '15985236',
    situacao: 'Desativado'
  },
  {
    id: 3,
    nome: 'Facebook',
    responsavel: 'Mike',
    contato: '14785296',
    situacao: 'Em Análise'
  },
  {
    id: 4,
    nome: 'Amazon',
    responsavel: 'Otto',
    contato: '11559977',
    situacao: 'Ativo'
  },
  {
    id: 5,
    nome: 'Spotify',
    responsavel: 'Maria',
    contato: '44556633',
    situacao: 'Ativo'
  }
]

const ClienteLista: React.FC = () => {
  const navigate = useNavigate();
  const [termoBusca, setTermoBusca] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermoBusca(e.target.value);
  };
  const clientesFiltrados = clientes.filter((cliente) => {
    return Object.values(cliente).join(' ').toLowerCase().includes(termoBusca.toLowerCase())
  });
  const novoCliente = () => {
    navigate('/cliente/detalhes')
  }

  return (
    <>
      <TitlePage title='Clientes'>
        <Button variant='outline-dark' onClick={novoCliente}>
          <i className='fas fa-plus me-2'></i>
          Novo Cliente
        </Button>
      </TitlePage>
      <InputGroup className="mt-3 mb-3">
        <InputGroup.Text>
          Buscar
        </InputGroup.Text>
        <FormControl onChange={handleInputChange} placeholder='Buscar por nome' />
      </InputGroup>
      <table className='table table-hover'>
        <thead>
          <tr className='table-dark mt-3'>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Responsável</th>
            <th scope="col">Contato</th>
            <th scope="col">Situação</th>
            <th scope="col">Opções</th>
          </tr>
        </thead>
        <tbody>
          {clientesFiltrados.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nome}</td>
              <td>{cliente.responsavel}</td>
              <td>{cliente.contato}</td>
              <td>{cliente.situacao}</td>
              <td>
                <div>
                  <button className='btn btn-outline-dark btn-sm me-2' onClick={() => navigate(`/cliente/detalhes/${cliente.id}`)}>
                    <i className='fas fa-user-edit me-2'></i>
                    Editar
                  </button>
                  <button className='btn btn-light btn-sm me-2'>
                    <i className='fas fa-user-times me-2'></i>
                    Desativar
                  </button>
                </div>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </>
  )
}

export default ClienteLista;