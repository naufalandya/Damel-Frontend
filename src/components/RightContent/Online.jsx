import './styles/scrollbar.css';
import Avatar from '@mui/material/Avatar';

const avatars = [
    { src: 'https://randomuser.me/api/portraits/men/1.jpg', alt: 'Avatar 1' },
    { src: 'https://randomuser.me/api/portraits/women/1.jpg', alt: 'Avatar 2' },
    { src: 'https://randomuser.me/api/portraits/men/2.jpg', alt: 'Avatar 3' },
    { src: 'https://randomuser.me/api/portraits/women/2.jpg', alt: 'Avatar 4' },
    { src: 'https://randomuser.me/api/portraits/men/3.jpg', alt: 'Avatar 5' },
    { src: 'https://randomuser.me/api/portraits/women/3.jpg', alt: 'Avatar 6' },
    { src: 'https://randomuser.me/api/portraits/men/4.jpg', alt: 'Avatar 7' },
    { src: 'https://randomuser.me/api/portraits/women/4.jpg', alt: 'Avatar 8' },
    { src: 'https://randomuser.me/api/portraits/men/5.jpg', alt: 'Avatar 9' },
];

const Online = () => {
    return (
        <>
            <div style={{ backgroundColor: '#1D1D1D' }} className="online-status-container p-1 border-b-2 scrollbar">
                <div className="flex justify-between p-4">
                    <h3 className="status-title text-white pt-1 pb-2 text-left">
                        Online
                    </h3>
                    <a href="/">
                        <p>
                            👀
                        </p>
                    </a>
                </div>
                <div className="list-online-friend-avatar-profile-card flex pb-2 overflow-x-auto">
                    <div className="inline-flex items-center ml-4 mb-4 min-w-max">
                        {avatars.map((avatar, index) => (
                            <Avatar
                                style={ { marginRight : '1.05rem'}}
                                key={index}
                                src={avatar.src}
                                alt={avatar.alt}
                                sx={{ width: 47, height: 47 }} 
                                className="w-12 h-12 rounded-full"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Online;
