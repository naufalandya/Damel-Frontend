import { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import debounce from 'lodash/debounce'; 
import axios from 'axios';

const MySchedule = () => {
  const calendarRef = useRef(null);
  const [reminders, setReminders] = useState([]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchReminders = async () => {
      try {
        const response = await axios.get('https://damel-backend-production.up.railway.app/api/v1/feature/activity/reminders',         {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response.data); // Log the response data
        if (Array.isArray(response.data)) {
          const formattedReminders = response.data.map(reminder => ({
            title: reminder.title,
            start: reminder.deadline_time,
            end: reminder.deadline_time,
            created_at: reminder.created_at
          }));
          setReminders(formattedReminders);
        } else {
          console.error('Unexpected response data format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching reminders:', error);
      }
    };

    fetchReminders();
  }, []);

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
    <div style={{ width: '100%', padding: '1rem', height: '100%' }}>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        events={reminders}
        eventContent={renderEventContent}
        height='100vh'
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
