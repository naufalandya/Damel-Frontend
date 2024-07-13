import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Avatar, Heading, Text, Stack, Flex } from '@chakra-ui/react';
import ReminderPost from './../components/Input/ReminderPost';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    username: '',
    bio: '',
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5901/api/v1/feature/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response)

        if (response.data && response.data.data) {
          setProfileData({
            name: response.data.data.name,
            username: response.data.data.username,
            bio: response.data.data.bio || '',
          });
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <>
    <Flex width={'100%'} flexDirection={'column'}>
    <Box
        height={'max-content'}
        width="100%"
        borderBottom="2px solid #ffffff"
        overflow="hidden"
        color="white"
        p={5}
        py={'3rem'}
      >
        <Stack direction="row" spacing={4} align="center">
          <Avatar name={profileData.name} size="xl" src={profileData.avatar_link} />
          <Box>
            <Heading fontSize="xl">{profileData.name}</Heading>
            <Text fontSize="md" color="gray.400">@{profileData.username}</Text>
          </Box>
        </Stack>
        <Box mt={4}>
          <Text>{profileData.bio}</Text>
        </Box>
      </Box>
      <ReminderPost/>
    </Flex>
    </>

  );
};

export default Profile;
