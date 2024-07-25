import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardBody, CardFooter, Flex, Box, Heading, IconButton, Text } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
// import { BiLike, BiChat } from 'react-icons/bi';

const DiaryCard = () => {
  const [diaries, setDiaries] = useState([]);

  useEffect(() => {
    const fetchDiaries = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5901/api/v1/feature/activity/diaries', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response);
        setDiaries(response.data);
      } catch (error) {
        console.error('Error fetching diaries:', error);
      }
    };

    fetchDiaries();
  }, []);

  return (
    <>
      {diaries.map((diary) => (
        <Card key={diary.id} width='100%' marginTop={'1.125rem'}>
          <CardHeader className='bg-neutral-800 text-white' paddingBottom='0.625rem'>
            <Flex spacing='4'>
              <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                <Box backgroundColor='#FCDC94' borderRadius='full' p='4'>
                  {/* You can add an avatar or image here if needed */}
                </Box>
                <Box>
                  <Heading fontSize='1.275rem' fontWeight='500' size='sm'>{diary.title}</Heading>
                </Box>
              </Flex>
              <IconButton
                _hover={{ backgroundColor: '#3b3b3b' }}
                variant='ghost'
                colorScheme='gray'
                aria-label='See menu'
                icon={<BsThreeDotsVertical className='text-white' />}
              />
            </Flex>
          </CardHeader>
          <Flex className='bg-neutral-800' padding='1rem' justifyContent='center' gap='12px' flexDirection='column'>
            <CardBody className='bg-neutral-800 text-white' border='1px solid white'>
              <Text whiteSpace="pre-line">{diary.content}</Text>
            </CardBody>
          </Flex>
          <CardFooter
            className='bg-neutral-800 text-white'
            justify='space-between'
            flexWrap='wrap'
            sx={{
              '& > button': {
                minW: '136px',
              },
            }}
          >
            {/* Uncomment and use the following buttons if you need like/comment functionality */}
            {/* <Button className='text-white' color='white' _hover={{ backgroundColor: '#3b3b3b' }} flex='1' variant='ghost' leftIcon={<BiLike className='text-white' />}>
              Like
            </Button>
            <Button className='text-white' color='white' _hover={{ backgroundColor: '#3b3b3b' }} flex='1' variant='ghost' leftIcon={<BiChat className='text-white' />}>
              Comment
            </Button> */}
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default DiaryCard;
