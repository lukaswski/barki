import React, { useState, useContext } from 'react';
import FullCalendar from '@fullcalendar/react';
import { BarkContext } from '../../../contexts/BarkContext';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Container } from 'react-bootstrap';

export default () => {
  const [date, setDate] = useState();
  const [ bark, setBark ] = useContext(BarkContext)
  const select = (info) => {
    setBark({
      startDate: info.startStr,
      endDate: info.endStr,
    });
    console.log(bark)
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
