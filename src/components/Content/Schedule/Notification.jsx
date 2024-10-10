import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from '@chakra-ui/react';

const Reminders = ({ token }) => {
  const [reminders, setReminders] = useState([]);

  // Menyimpan pengingat yang sudah di-alert
  const alertedReminders = {};

  const setAlertedReminder = (id, type) => {
    alertedReminders[id] = {
      ...(alertedReminders[id] || {}),
      [type]: true,
    };
  };

  const getAlertedReminders = () => alertedReminders;

  // Fungsi untuk mengambil pengingat dari API
  const fetchReminders = useCallback(async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/feature/activity/reminders`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('API Response:', response.data);

      if (Array.isArray(response.data)) {
        const alertedReminders = getAlertedReminders();
        const now = new Date();

        const formattedReminders = response.data
          .map((reminder) => {
            const start = new Date(reminder.start_time);
            const deadline = new Date(reminder.deadline_time);

            const alertedStart = alertedReminders[reminder.id]?.alertedStart || false;
            const alertedDeadline = alertedReminders[reminder.id]?.alertedDeadline || false;

            // Jika deadline sudah lewat dan belum di-alert, tandai sebagai sudah di-alert
            if (deadline < now && !alertedDeadline) {
              setAlertedReminder(reminder.id, 'alertedDeadline');
              return {
                id: reminder.id,
                title: reminder.title,
                start,
                deadline,
                alertedStart: alertedStart,
                alertedDeadline: true,
              };
            }

            return {
              id: reminder.id,
              title: reminder.title,
              start,
              deadline,
              alertedStart,
              alertedDeadline,
            };
          })
          .filter(reminder => reminder.deadline >= now);

        console.log('Formatted Reminders:', formattedReminders);
        setReminders(formattedReminders);
      } else {
        console.error('Unexpected response data format:', response.data);
      }
    } catch (error) {
      console.error('Error fetching reminders:', error);
    }
  }, [token]);

  // Fungsi untuk memeriksa pengingat
  const checkReminders = useCallback(() => {
    const now = new Date();
    console.log('Checking reminders at:', now.toLocaleTimeString());

    reminders.forEach((reminder) => {
      // Cek Start Time
      if (!reminder.alertedStart && now >= reminder.start) {
        console.log(`Triggering Start Alert for: ${reminder.title}`);
        toast({
          title: `Reminder: ${reminder.title} is starting now!`,
          status: 'info',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });

        setReminders((prevReminders) =>
          prevReminders.map((r) =>
            r.id === reminder.id ? { ...r, alertedStart: true } : r
          )
        );

        setAlertedReminder(reminder.id, 'alertedStart');
        console.log('Start Alert Triggered:', reminder.title);
      }

      // Cek Deadline Time
      if (!reminder.alertedDeadline && now >= reminder.deadline) {
        console.log(`Triggering Deadline Alert for: ${reminder.title}`);
        toast({
          title: `Reminder: ${reminder.title} has reached its deadline!`,
          status: 'warning',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });

        setReminders((prevReminders) =>
          prevReminders.map((r) =>
            r.id === reminder.id ? { ...r, alertedDeadline: true } : r
          )
        );

        setAlertedReminder(reminder.id, 'alertedDeadline');
        console.log('Deadline Alert Triggered:', reminder.title);
      }
    });
  }, [reminders, toast]);

  useEffect(() => {
    console.log('Fetching reminders...');
    fetchReminders();
  }, [fetchReminders]);

  // Interval untuk memeriksa pengingat setiap 10 detik
  useEffect(() => {
    const intervalId = setInterval(() => {
      checkReminders();
    }, 10000); // Setiap 10 detik

    return () => clearInterval(intervalId); // Bersihkan interval saat unmount
  }, [checkReminders]);

  return (
    <div>
      <h1>Reminders</h1>
      {reminders.map(reminder => (
        <div key={reminder.id}>
          <h2>{reminder.title}</h2>
          <p>Start: {reminder.start.toLocaleString()}</p>
          <p>Deadline: {reminder.deadline.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Reminders;
