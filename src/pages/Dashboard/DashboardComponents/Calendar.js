import React, { useState, useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { BarkContext } from '../../../contexts/BarkContext';

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
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        themeSystem="bootstrap"
        height={350}
        locale="pl"
        selectable="true"
        unselectAuto="true"
        headerToolbar={{
          left: 'prev',
          center: 'title',
          right: 'today',
        }}
        select={select}
      />
    </Container>
  );
};
