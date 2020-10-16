import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Container } from 'react-bootstrap';

export default () => {
  const [date, setDate] = useState({});
  const select = (info) => {
    setDate({
      startDate: info.startStr,
      endDate: info.endStr,
    });
  };
  console.log(date);
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
