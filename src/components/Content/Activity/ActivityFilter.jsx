import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator, Box } from '@chakra-ui/react';
import MyActivity from './MyActivity';
import FollowingActivity from './FollowingActivity';
import RandomActivity from './RandomActivity';

const ActivityFilter = () => {
  return (
    <Tabs defaultIndex={0} position="relative" variant="unstyled" >
      <Box display="flex" justifyContent="center">
        <TabList sx={{ width: '100%' }}>
          <Tab width={'33%'} paddingTop={7} paddingBottom={7} className='hover:bg-neutral-800 active:bg-neutral-800' flexGrow={1}>Me</Tab>
          <Tab width={'33%'} paddingTop={7} paddingBottom={7} className='hover:bg-neutral-800 active:bg-neutral-800' flexGrow={1}>Following</Tab>
          <Tab width={'33%'} paddingTop={7} paddingBottom={7} className='hover:bg-neutral-800 active:bg-neutral-800' flexGrow={1}>Random</Tab>
        </TabList>
      </Box>
      <TabIndicator height="2px" bg="blue.500" borderRadius="1px" />
      <TabPanels >
        <TabPanel marginTop={'1rem'} display={'flex'} justifyContent={'center'}>
          <MyActivity />
        </TabPanel>
        <TabPanel marginTop={'1rem'} display={'flex'} justifyContent={'center'}>
          <FollowingActivity />
        </TabPanel>
        <TabPanel marginTop={'1rem'} display={'flex'} justifyContent={'center'}>
          <RandomActivity />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ActivityFilter;
