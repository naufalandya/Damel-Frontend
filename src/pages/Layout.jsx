import { Outlet } from 'react-router-dom';
import SimpleSidebar from '../components/Navbar/Navbar';
import { ChakraProvider, useToast } from '@chakra-ui/react';
import { ThemeProvider } from '../components/Navbar/ThemeContext';
import RightFeature from '../components/RightContent/RightFeatureLayout';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Layout = () => {
  const toast = useToast();
  const [reminders, setReminders] = useState([]);
  const [notifiedIds, setNotifiedIds] = useState(new Set()); // Menyimpan ID pengingat yang sudah diberi notifikasi

  const showNotification = (title, status) => {
    toast({
      title,
      status,
      duration: 5000,
      isClosable: true,
      position: 'top-right',
    });
  };

  const fetchReminders = async () => {
    try {
      const token = localStorage.getItem('token'); // Ambil token dari localStorage
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/feature/activity/reminders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (Array.isArray(response.data)) {
        const formattedReminders = response.data.map((reminder) => ({
          id: reminder.id,
          title: reminder.title,
          created_at: new Date(reminder.created_at),
          deadline: new Date(reminder.deadline_time),
        }));

        setReminders(formattedReminders);
      }
    } catch (error) {
      console.error('Error fetching reminders:', error);
    }
  };

  useEffect(() => {
    fetchReminders();

    const notifyReminders = () => {
      const now = new Date();

      reminders.forEach(reminder => {
        const isDeadlineReached = reminder.deadline <= now;

        // Cek apakah deadline sudah tercapai dan notifikasi belum ditampilkan
        if (isDeadlineReached && !notifiedIds.has(reminder.id)) {
          showNotification(`Reminder: ${reminder.title} has reached its deadline!`, 'success');
          setNotifiedIds(prev => new Set(prev).add(reminder.id)); // Tambah ID ke set notifiedIds
        }
      });
    };

    // Initial notification check
    notifyReminders();

    // Interval untuk memeriksa pengingat setiap 10 detik
    const intervalId = setInterval(() => {
      notifyReminders();
    }, 10000);

    return () => clearInterval(intervalId); // Bersihkan interval saat unmount
  }, [reminders, notifiedIds, toast]);

  return (
    <ChakraProvider>
      <div style={{ display: 'grid', gridTemplateColumns: '20% 55% 25%', width: '100%', height: '100%' }}>
        {/* Sidebar */}
        <div style={{ width: '20%' }}>
          <SimpleSidebar />
        </div>
        
        {/* Main Content */}
        <div id='content' style={{ height: '100%', borderRight: '2px solid white', display: 'flex' }}>
          <Outlet />
        </div>
        
        {/* Right Feature */}
        <div style={{ height: '100%', width: '' }}>
          <ThemeProvider>
            <RightFeature />
          </ThemeProvider>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default Layout;
