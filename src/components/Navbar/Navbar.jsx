import PropTypes from 'prop-types';
import {
  Box,
  Flex,
  Icon,
  Text,
} from '@chakra-ui/react';
import { FiHome } from 'react-icons/fi';
import { BsLightningChargeFill } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
// import { RiNotification2Line } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
// import { AiOutlineMessage } from "react-icons/ai";
// import { BiSearch } from "react-icons/bi";
import { IoSettingsOutline, IoStatsChartSharp  } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
// import { RiGalleryView2 } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";


const LinkItems = [
  { name: 'Home', icon: FiHome, path: '/' },
  { name: 'Activity', icon: IoStatsChartSharp, path: '/activity' },
  { name: 'Shedule', icon: FaCalendarAlt, path: '/schedule' },
  // { name: 'Gallery', icon: RiGalleryView2, path: '/gallery' },
  // { name: 'Search', icon: BiSearch, path: '/search' },
  { name: 'Profile', icon: RxAvatar, path: '/profile' },
  // { name: 'Messages', icon: AiOutlineMessage, path: '/messages' },
  // { name: 'Notifications', icon: RiNotification2Line, path: '/notifications' },
  // { name: 'Bookmark', icon: IoBookmarkOutline, path: '/bookmark' },
  { name: 'Settings', icon: IoSettingsOutline, path: '/settings' },
  { name: 'Logout', icon: MdLogout, path: '/signin' },
];

function NavItem({ icon, link, ...rest }) {
  return (
    <Link to={link.path} style={{ width: '100%', textDecoration: 'none' }}>
      <Flex
        align="center"
        p="0"
        px="16px"
        my="0"
        py="1rem"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        fontSize={'1.125rem'}
        _hover={{
          backgroundColor: '#2a2a2b',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            color={'white'}
            mr="1.375rem"
            fontSize="1.375rem"
            as={icon}
          />
        )}
        <Text width={'100%'} className='m-0 p-0' padding={0} margin={0} color="white">{link.name}</Text>
      </Flex>
    </Link>
  );
}

NavItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  link: PropTypes.object.isRequired,
};

export default function SimpleSidebar() {
  return (
    <ThemeProvider>
      <Box
        minH="100%"
        position="fixed"
        padding={'1.125rem'}
        width="20%"
        backgroundColor="#1b1b1b"
        borderRight="2px solid white"
      >
        <Flex className='overflow-y-visible' padding={'0.825rem'} marginBottom={'0.5rem'} marginTop={'0.5rem'} h="20" alignItems="center" mx="0" justifyContent="space-between">
          <Text className='flex' fontSize="2xl" fontFamily="monospace" fontWeight="bold" color="white">
            <BsLightningChargeFill size={'2rem'}/>
          </Text>
        </Flex>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon} link={link} />
        ))}
      </Box>
    </ThemeProvider>
  );
}
