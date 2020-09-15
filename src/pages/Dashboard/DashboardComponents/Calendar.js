import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default () => (
  <FullCalendar
    plugins={[dayGridPlugin]}
    initialView="dayGridMonth"
    themeSystem="bootstrap"
    height={350}
    locale="pl"
    headerToolbar={{
      left: 'prev',
      center: 'title',
      right: 'today',
    }}
  />
);
