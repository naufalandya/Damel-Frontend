import{ useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import debounce from 'lodash/debounce'; 

const events = [
  { title: 'Meeting', start: '2024-07-11T10:00:00', end: '2024-07-11T12:00:00' },
  { title: 'Conference', start: '2024-07-12T09:00:00', end: '2024-07-12T10:30:00' },
  { title: 'Lunch', start: '2024-07-13T12:00:00', end: '2024-07-13T13:00:00' },
  { title: 'Workshop', start: '2024-07-14T14:00:00', end: '2024-07-14T16:00:00' },
  { title: 'Webinar', start: '2024-07-15T17:00:00', end: '2024-07-15T18:30:00' },
  { title: 'Team Meeting', start: '2024-07-16', end: '2024-07-16' },
  { title: 'Project Deadline', start: '2024-07-16', end: '2024-07-17' },
  { title: 'Client Call', start: '2024-07-18T15:00:00', end: '2024-07-18T15:30:00' },
  { title: 'Review', start: '2024-07-19T13:00:00', end: '2024-07-19T14:00:00' },
  { title: 'Planning Session', start: '2024-07-20T11:00:00', end: '2024-07-20T12:00:00' },
  { title: 'Planning Session', start: '2024-07-20T11:00:00', end: '2024-07-20T12:00:00' },
  { title: 'Planning Session', start: '2024-07-20T11:00:00', end: '2024-07-20T12:00:00' }
];

function MySchedule() {
  const calendarRef = useRef(null);

  useEffect(() => {
    const resizeCalendar = debounce(() => {
      if (calendarRef.current) {
        calendarRef.current.getApi().updateSize();
      }
    }, 100);

    resizeCalendar();

    window.addEventListener('resize', resizeCalendar);

    return () => {
      window.removeEventListener('resize', resizeCalendar);
    };
  }, []);

  return (
    <div style={{ width: '100%', padding: '1rem', height : '100%' }}>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={'dayGridMonth'}
        events={events}
        eventContent={renderEventContent}
        height={'100vh'}
      />
    </div>
  );
}

function renderEventContent(eventInfo) {
  const eventStart = new Date(eventInfo.event.start);
  const formattedTime = `${eventStart.getHours()}:${eventStart.getMinutes().toString().padStart(2, '0')}`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <div>
        <b>{formattedTime}</b>
      </div>
      <div>
        <i>{eventInfo.event.title}</i>
      </div>
      <div style={{ fontSize: '0.8em', color: 'gray' }}>
        {eventStart.toLocaleDateString()} {formattedTime}
      </div>
    </div>
  );
}

export default MySchedule;
