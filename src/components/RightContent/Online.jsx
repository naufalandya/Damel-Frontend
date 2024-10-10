import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import './styles/scrollbar.css';

// Fungsi komponen Online
const Online = () => {
    // State untuk menyimpan data pengguna online
    const [onlineUsers, setOnlineUsers] = useState([]);

    // Fungsi untuk fetch data pengguna online
    const fetchOnlineUsers = async () => {
        try {
            const response = await fetch('/api/get-all-user-online'); // Sesuaikan endpoint dengan rute API Anda
            const data = await response.json();
            setOnlineUsers(data); // Simpan hasil fetch ke dalam state
        } catch (error) {
            console.error('Error fetching online users:', error);
        }
    };

    // useEffect untuk memanggil fetchOnlineUsers saat komponen di-mount
    useEffect(() => {
        fetchOnlineUsers();
    }, []);

    return (
        <div style={{ backgroundColor: '#1D1D1D' }} className="online-status-container p-1 border-b-2 scrollbar">
            <div className="flex justify-between p-4">
                <h3 className="status-title text-white pt-1 pb-2 text-left">
                    Online
                </h3>
                <a href="/">
                    <p>👀</p>
                </a>
            </div>

            <div className="list-online-friend-avatar-profile-card flex pb-2 overflow-x-auto">
                <div className="inline-flex items-center ml-4 mb-4 min-w-max">
                    {onlineUsers.length > 0 ? (
                        onlineUsers.map((user, index) => (
                            <Avatar
                                style={{ marginRight: '1.05rem' }}
                                key={index}
                                src={user.meta_profile_link} // Asumsi: API mengembalikan properti ini
                                alt={`User ${index + 1}`}
                                sx={{ width: 47, height: 47 }}
                                className="w-12 h-12 rounded-full"
                            />
                        ))
                    ) : (
                        <p className="text-white">No users online.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Online;
