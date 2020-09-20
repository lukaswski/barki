import React from 'react';
import {
  Col, Button, Container, Badge,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { StyledTable } from '../../../styled/styledDashboard';

export default ( { url }) => (
  <>
    <Col md={12}>
      <Container>
        <hr />
        <h5>Dzienne zdarzenia:</h5>
        <StyledTable striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Interwencja</th>
              <th>Godzina</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <Badge variant="danger">Szczekanie</Badge>
              </td>
              <td>15.30</td>
            </tr>
            <tr>
              <td>2</td>
              <td><Badge variant="danger">Szczekanie</Badge></td>
              <td>16:30</td>
            </tr>
          </tbody>
        </StyledTable>
      </Container>
    </Col>
    <Col md={{ span: 0, offset: 10 }}><Link to={`${url}/all-history`}><Button variant="outline-secondary">cała historia</Button></Link></Col>
  </>
);
