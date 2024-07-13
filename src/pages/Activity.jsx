import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Text } from '@chakra-ui/react';
import MyReminder from '../components/Content/Activity/MyReminder';
import DiaryCard from '../components/Content/Activity/Diary';
// import { HiPaperClip } from 'react-icons/hi';

// import { FaCalendarAlt } from "react-icons/fa";

import { FaListCheck } from "react-icons/fa6";
import { BsFillPencilFill} from "react-icons/bs";

const Activity = () => {
    return (
        <>
                <Box padding={0} width={'100%'}>
            <Tabs>
                <TabList>
                        <Tab className='hover:bg-neutral-800 active:bg-neutral-800 flex gap-5
                        ' flexGrow={1} paddingTop={7} paddingBottom={7} width={'50%'}>
                            <FaListCheck size={'2rem'} className='text-white'/>
                            <Text className='text-white'>
                                Productivity
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
                    <TabPanel><MyReminder/></TabPanel>
                    <TabPanel><DiaryCard/></TabPanel>
                    <TabPanel>hidden 3</TabPanel>
                </TabPanels>
            </Tabs>
            </Box>
        </>
    )
}

export default Activity