import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { BarkContext } from '../../../contexts/BarkContext';

const StyleWrapper = styled.div`
  .fc-daygrid-day-number {
    color: gray;
    text-decoration: none;
    user-select: none; /* Chrome, Opera and Firefox */
  }
  .fc-col-header-cell-cushion {
    color: black;
    text-decoration: none;
    user-select: none;
  }
  `;

export default ({ allBarks }) => {
  const [date, setDate] = useState();
  const [bark, setBark] = useContext(BarkContext);

  useEffect(() => {
    setBark(new Date().toJSON().slice(0, 10));
  }, []);

  const select = (info) => {
    setBark(info.startStr);
  };

  return (
    <Container className="mt-5" fluid>
      <StyleWrapper>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          themeSystem="bootstrap"
          height={350}
          locale="pl"
          selectable="true"
          navLinks={false}
          unselectAuto="true"
          headerToolbar={{
            left: 'prev',
            right: 'today',
          }}
          select={select}
        />
      </StyleWrapper>
    </Container>
  );
};
