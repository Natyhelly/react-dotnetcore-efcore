import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {
    const navigate = useNavigate();

    return (
        <>
            <div className='mt-5 text-center'>
                <h2>Ops... Página não encontrada.</h2>
                <br />
                <h5>404 Not Found</h5>
                <button className='btn btn-dark mt-5' onClick={() => navigate.goBack()}>
                    <i className='fas fa-reply me-2'></i>
                    Voltar
                </button>
            </div>
        </>
    )
}
