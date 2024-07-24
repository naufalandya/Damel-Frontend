import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Avatar, Heading, Text, Stack, Flex, Tabs, TabList, TabPanels, Tab, TabPanel  } from '@chakra-ui/react';
import ReminderPost from './../components/Input/ReminderPost';
import DiaryPost from './../components/Input/DiaryPost';
import IdeaPost from './../components/Input/IdeaPost';

import { FaListCheck } from "react-icons/fa6";
import { BsFillPencilFill } from "react-icons/bs";
import { RiText } from "react-icons/ri";

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
        const response = await axios.get('http://103.127.137.138:5901/api/v1/feature/user', {
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
      <Box padding={0} width={'100%'}>
            <Tabs>
                <TabList>
                        <Tab className='hover:bg-neutral-800 active:bg-neutral-800 flex gap-5
                        ' flexGrow={1} paddingTop={7} paddingBottom={7} width={'50%'}>
                            <RiText size={'2rem'} className='text-white'/>
                            <Text className='text-white'>
                               Learn & Speech
                            </Text>
                        </Tab>
                        <Tab className='hover:bg-neutral-800 active:bg-neutral-800 flex gap-5
                        ' flexGrow={1} paddingTop={7} paddingBottom={7} width={'50%'}>
                            <FaListCheck size={'2rem'} className='text-white'/>
                            <Text className='text-white'>
                                Reminder
                            </Text>
                        </Tab>
                        <Tab className='hover:bg-neutral-800 active:bg-neutral-800 flex gap-5' flexGrow={1} paddingTop={7} paddingBottom={7} width={'50%'}>
                            <Text className='text-white'>
                                <BsFillPencilFill size={'2rem'} className='text-white'/>
                            </Text>
                            <Text className='text-white'>
                                Diary
                            </Text>
                        </Tab>
                        {/* <Tab className='hover:bg-neutral-800 active:bg-neutral-800 flex gap-5' flexGrow={1} paddingTop={7} paddingBottom={7} width={'50%'}>
                        <Text className='text-white'>
                                <HiPaperClip size={'2rem'} className='text-white'/>
                            </Text>
                        <Text className='text-white'>
                                Publication
                        </Text>
                    </Tab> */}
                </TabList>

                {/* Nested TWO */}
                <TabPanels>
                  <TabPanel p={0}>
                    <IdeaPost/>                    
                  </TabPanel>
                    <TabPanel p={0}>      
                      <ReminderPost/>                    
                    </TabPanel>
                    <TabPanel p={0}>
                      <DiaryPost/>                    
                    </TabPanel>
                </TabPanels>
            </Tabs>
            </Box>
    </Flex>
    
 
    </>

  );
};

export default Profile;
