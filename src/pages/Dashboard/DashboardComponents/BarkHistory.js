import React from 'react';
import { Col, Table, Button } from 'react-bootstrap';

export default () => (
  <>
  <Col md={12}>
    <hr />
    <h3>Dzienna historia</h3>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Ilość szczeknięć</th>
          <th>Interwencja</th>
          <th>Godzina</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  </Col>
  <Col md={{ span: 0, offset: 10 }}><Button varint="outline-primary">Cała historia</Button></Col>
  </>
);