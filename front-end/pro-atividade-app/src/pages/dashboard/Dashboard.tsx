import React from 'react'
import TitlePage from '../../components/TitlePage'
import { Card, Row, Col } from 'react-bootstrap';

const Dashboard: React.FC = () => {
  return (
    <>
      <TitlePage title='Dashboard' />
      <div className='mt-3'>
        <Row>
          <Col>
            <Card border='success'>
              <Card.Header>Clientes atuais</Card.Header>
              <Card.Body>
                <Card.Title>
                  <h1 className='text-center'>25</h1>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border='secondary'>
              <Card.Header>Atividades totais</Card.Header>
              <Card.Body>
                <Card.Title>
                  <h1 className='text-center'>256</h1>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border='warning'>
              <Card.Header>Atividades urgentes</Card.Header>
              <Card.Body>
                <Card.Title>
                  <h1 className='text-center'>25</h1>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border='primary'>
              <Card.Header>Atividades atrasadas</Card.Header>
              <Card.Body>
                <Card.Title>
                  <h1 className='text-center'>2</h1>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Dashboard;
