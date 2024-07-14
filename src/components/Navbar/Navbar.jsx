import { useState } from 'react';
import { FiHome } from 'react-icons/fi';
import { BsLightningChargeFill } from 'react-icons/bs';
import { RxAvatar } from 'react-icons/rx';
import { MdLogout } from 'react-icons/md';
import { IoSettingsOutline, IoStatsChartSharp } from 'react-icons/io5';
import { FaCalendarAlt } from 'react-icons/fa';
import NavItem from './NavItem';
import ConfirmationModal from './ConfirmationModal';
import { useNavigate } from 'react-router-dom';

const LinkItems = [
  { name: 'Home', icon: FiHome, path: '/' },
  { name: 'Activity', icon: IoStatsChartSharp, path: '/activity' },
  { name: 'Schedule', icon: FaCalendarAlt, path: '/schedule' },
  { name: 'Profile', icon: RxAvatar, path: '/profile' },
  { name: 'Settings', icon: IoSettingsOutline, path: '/settings' },
  { name: 'Logout', icon: MdLogout, path: '/signin' },
];

export default function SimpleSidebar() {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleConfirmLogout = () => {
    setModalOpen(false);
    // Implement the actual logout logic here
      navigate("/signin"); };

  return (
    <div className="fixed h-screen p-4 w-1/5 bg-neutral-900 border-r-2 border-white">
      <div className="flex overflow-y-visible p-3 mb-2 mt-2 h-20 items-center justify-between">
        <span className="flex text-2xl font-monospace font-bold text-white">
          <BsLightningChargeFill size={'2rem'} />
        </span>
      </div>
      {LinkItems.map((link) => (
        <NavItem 
          key={link.name} 
          icon={link.icon} 
          link={link} 
          onLogoutClick={link.name === 'Logout' ? handleLogoutClick : null} 
        />
      ))}
      <ConfirmationModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onConfirm={handleConfirmLogout} 
      />
    </div>
  );
}
