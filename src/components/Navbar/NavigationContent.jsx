import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator, Box, Text} from '@chakra-ui/react';
import { FaBrain, FaRocket } from "react-icons/fa";
import { MdOutlineTimeline} from "react-icons/md";
import { HiMiniChatBubbleBottomCenterText } from "react-icons/hi2";
import { FaListCheck } from "react-icons/fa6";
import { BsFillPencilFill } from "react-icons/bs";

// import SpeechFeed from '../Content/Feed/SpeechFeed';
import MyReminder from '../Content/Activity/MyReminder';
import DiaryCard from '../Content/Activity/Diary';
import FeedPost from '../Content/Home/Post';
import FeedPostLearn from './../Content/Home/PostLearn';

const NavigationContent = () => {

  return (
        <Box padding={0} width={'100%'}>
        <Tabs>
        <TabList border={0} width={'100%'}>
            {/* One */}
            <Tab className='hover:bg-neutral-800 active:bg-neutral-800 flex gap-5' flexGrow={1} paddingTop={7} paddingBottom={7} width={'50%'}>
                <Text className='text-white'>
                    <FaRocket size={'2rem'} className='text-white' />
                </Text>
                <Text className='text-white'>
                    Feed
                </Text>
            </Tab>
            <Tab className='hover:bg-neutral-800 active:bg-neutral-800 flex gap-5' flexGrow={1} paddingTop={7} paddingBottom={7} width={'50%'}>
                <Text className='text-white'>
                    <MdOutlineTimeline size={'2.275rem'} className='text-white' />
                </Text>
                <Text className='text-white'>
                    Activity
                </Text>
            </Tab>
            {/* <Tab className='hover:bg-neutral-800 active:bg-neutral-800 flex gap-5' flexGrow={1} paddingTop={7} paddingBottom={7} width={'50%'}>
                <Text className='text-white'>
                    <FaBookOpen size={'2rem'} className='text-white'/>
                </Text>
                <Text className='text-white'>
                    Writings
                </Text>
            </Tab> */}
        </TabList>
        
        <TabIndicator height="2px" bg="blue.500" borderRadius="1px" />
        <TabPanels>

            {/*Content One -> List*/}

            <TabPanel padding={0} margin={0}>
            <Tabs>

                <TabList border={0} width={'100%'}>
                    <Tab className='hover:bg-neutral-800 active:bg-neutral-800 flex gap-5' flexGrow={1} paddingTop={7} paddingBottom={7} width={'50%'}>
                        <FaBrain size={'2rem'} className='text-white'/>
                        <Text className='text-white'>
                            Learn
                        </Text>
                    </Tab>

                    {/* <Tab className='hover:bg-neutral-800 active:bg-neutral-800 flex gap-5' flexGrow={1} paddingTop={7} paddingBottom={7} width={'50%'}>
                        <Text className='text-white'>
                            <CgClapperBoard size={'2rem'} className='text-white'/>
                        </Text>
                    </Tab> */}
                    <Tab className='hover:bg-neutral-800 active:bg-neutral-800 flex gap-5' flexGrow={1} paddingTop={7} paddingBottom={7} width={'50%'}>
                        <Text className='text-white'>
                            <HiMiniChatBubbleBottomCenterText size={'2rem'} className='text-white'/>
                        </Text>
                        <Text className='text-white'>
                            Speech
                        </Text>
                    </Tab>
                </TabList>

                {/* Nested One */}

                <TabIndicator height="2px" bg="blue.500" borderRadius="1px" />
                <TabPanels>
                    <TabPanel width={'100%'} className='flex flex-col justify-center items-center mt-5'>
                        <FeedPostLearn/>
                    </TabPanel>
                    {/* <TabPanel>

                        
                    </TabPanel> */}
                    <TabPanel className='flex flex-col justify-center items-center mt-5'>
                        <FeedPost/>
                    </TabPanel>
                </TabPanels>

            </Tabs>
            </TabPanel>

            {/*Content Two -> List*/}

            <TabPanel padding={0} margin={0}>
            <Tabs>
                <TabList>
                        <Tab className='hover:bg-neutral-800 active:bg-neutral-800 flex gap-5' flexGrow={1} paddingTop={7} paddingBottom={7} width={'50%'}>
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
                                <FaCalendarAlt size={'2rem'} className='text-white'/>
                        </Text>
                        <Text className='text-white'>
                                Schedule
                        </Text>
                        </Tab> */}
                </TabList>

                {/* Nested TWO */}
                <TabPanels>
                    <TabPanel><MyReminder/></TabPanel>
                    <TabPanel><DiaryCard/></TabPanel>
                    {/* <TabPanel>
                        {isOpen && <MySchedule />}
                    </TabPanel>                 */}
                </TabPanels>
            </Tabs>
            </TabPanel>


            {/* Content Three */}
            {/* <TabPanel padding={0} margin={0}>
            <Tabs>
                <TabList>
                        <Tab className='hover:bg-neutral-800 active:bg-neutral-800 flex gap-5' flexGrow={1} paddingTop={7} paddingBottom={7} width={'50%'}>
                            <Text className='text-white'>
                                <HiPaperClip size={'2rem'} className='text-white'/>
                            </Text>
                            <Text className='text-white'>
                                Publication
                            </Text>
                        </Tab>
                        <Tab className='hover:bg-neutral-800 active:bg-neutral-800 flex gap-5' flexGrow={1} paddingTop={7} paddingBottom={7} width={'50%'}>
                        <Text className='text-white'>
                                <PiReadCvLogoFill size={'2rem'} className='text-white'/>
                        </Text>
                        <Text className='text-white'>
                                Articles
                        </Text>
                    </Tab>
                </TabList> */}

                {/* Nested Three */}
                {/* <TabPanels>
                    <TabPanel>hidden 1</TabPanel>
                    <TabPanel>hidden 2</TabPanel>
                </TabPanels>
            </Tabs>
            </TabPanel> */}
        </TabPanels>
        </Tabs>
    </Box>

  )}


  export default NavigationContent;
//     // <Tabs defaultIndex={0} position="relative" variant="unstyled">
//     //     <TabList sx={{ width: '100%' }}>
//     //       <Tab width={'33%'} paddingTop={7} paddingBottom={7} className='hover:bg-neutral-800 active:bg-neutral-800' flexGrow={1}>Feed</Tab>
//     //       <Tab width={'33%'} paddingTop={7} paddingBottom={7} className='hover:bg-neutral-800 active:bg-neutral-800' flexGrow={1}>Activity</Tab>
//     //       <Tab width={'33%'} paddingTop={7} paddingBottom={7} className='hover:bg-neutral-800 active:bg-neutral-800' flexGrow={1}>Schedule</Tab>
//     //     </TabList>

//     //   {/* <TabIndicator height="2px" bg="blue.500" borderRadius="1px" /> */}
//     //   <TabPanels>
//     //         {/* nested one */}
//     //         <TabPanel padding={0}>
//     //             <Tabs defaultIndex={0} position="relative" variant="unstyled">
//     //                 <Box display="flex" justifyContent="center">
//     //                     <TabList sx={{ width: '100%'}}>
//     //                         <Tab  paddingTop={7} paddingBottom={7} width={'33%'} className='hover:bg-neutral-800 active:bg-neutral-800' flexGrow={1}>Me</Tab>
//     //                         <Tab  paddingTop={7} paddingBottom={7} width={'33%'} className='hover:bg-neutral-800 active:bg-neutral-800' flexGrow={1}>Following</Tab>
//     //                         <Tab  paddingTop={7} paddingBottom={7} width={'33%'} className='hover:bg-neutral-800 active:bg-neutral-800' flexGrow={1}>Random</Tab>
//     //                     </TabList>
//     //                 </Box>
//     //                 <TabIndicator height="2px" bg="blue.500" borderRadius="1px" />
//     //             </Tabs>
//     //         </TabPanel>

//     //         <TabPanel padding={0}>
//     //             <Tabs defaultIndex={0} position="relative" variant="unstyled">
//     //                 <Box display="flex" justifyContent="center">
//     //                     <TabList sx={{ width: '100%'}}>
//     //                         <Tab  paddingTop={7} paddingBottom={7} width={'33%'} className='hover:bg-neutral-800 active:bg-neutral-800' flexGrow={1}>Me</Tab>
//     //                         <Tab  paddingTop={7} paddingBottom={7} width={'33%'} className='hover:bg-neutral-800 active:bg-neutral-800' flexGrow={1}>Following</Tab>
//     //                         <Tab  paddingTop={7} paddingBottom={7} width={'33%'} className='hover:bg-neutral-800 active:bg-neutral-800' flexGrow={1}>Random</Tab>
//     //                     </TabList>
//     //                 </Box>
//     //                 <TabIndicator height="2px" bg="blue.500" borderRadius="1px" />
//     //             </Tabs>
//     //         </TabPanel>
//     //   </TabPanels>
      
//       /* <TabPanels marginTop={'1rem'}>
//         <TabPanel padding={0}>
//           <FeedLayout />
//         </TabPanel>
//         <TabPanel padding={0}>
//           <ActivityLayout />
//         </TabPanel>
//         <TabPanel padding={0}>
//             <Box display="flex" justifyContent="center">
//                 <TabList sx={{ width: '100%'}}>
//                     <Tab width={'33%'} paddingTop={7} paddingBottom={7} className='hover:bg-neutral-800 active:bg-neutral-800' flexGrow={1}>Focus</Tab>
//                     <Tab width={'33%'} paddingTop={7} paddingBottom={7} className='hover:bg-neutral-800 active:bg-neutral-800' flexGrow={1}>Following</Tab>
//                     <Tab width={'33%'} paddingTop={7} paddingBottom={7} className='hover:bg-neutral-800 active:bg-neutral-800' flexGrow={1}>Random</Tab>
//                 </TabList>
//             </Box>
//             <TabIndicator height="2px" bg="blue.500" borderRadius="1px" />
//             <TabPanels>
//                     <TabPanel marginTop={'1rem'} display={'flex'} justifyContent={'center'}>
//                         <MySchedule/>
//                     </TabPanel>
//                     <TabPanel marginTop={'1rem'} display={'flex'} justifyContent={'center'}>
//                         <p>LOL</p>
//                     </TabPanel>
//                     <TabPanel marginTop={'1rem'} display={'flex'} justifyContent={'center'}>
//                         <p>LOL</p>
//                     </TabPanel>
//                 </TabPanels>        
//             </TabPanel>
// //     //   </TabPanels> *
// //     // </Tabs>
// //   );
//   );
// };

