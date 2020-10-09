import React from 'react';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';

export default () => {
  const handleDateClick = (arg) => {
    alert(arg.dateStr);
  };
  const select = (info) => {
    alert(`selected ${info.startStr} to ${info.endStr}`);
  };

  return (
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
      dateClick={handleDateClick}
      select={select}
    />
  );
};
