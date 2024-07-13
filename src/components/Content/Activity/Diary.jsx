/* eslint-disable react/no-unescaped-entities */
import { Card, CardHeader, CardBody, CardFooter, Flex, Box, Heading, IconButton, Button, Text } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiLike, BiChat } from 'react-icons/bi';

const DiaryCard = () => {
  return (
    <Card width='100%' marginTop={'1.125rem'}>
      <CardHeader className='bg-neutral-800 text-white' paddingBottom='0.625rem'>
        <Flex spacing='4'>
          <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Box backgroundColor='#FCDC94' borderRadius='full' p='4'>
              {/* <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' size='md' /> */}
            </Box>
            <Box>
              <Heading fontSize='1.275rem' fontWeight='500' size='sm'>Diary</Heading>
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
            <Text>
            Today was a day of reflection and growth. I started my morning with a walk through the park, the fresh air 
            invigorating my senses. As I strolled, I couldn't help but think about the progress I've made over the past 
            few months. It hasn't always been easy, but the small victories along the way have kept me going.
            
            In the afternoon, I caught up with an old friend over coffee. We reminisced about our college days and laughed 
            about our youthful adventures. It's amazing how time flies, yet some things remain constant. Our friendship 
            is one of those constants, and I'm grateful for it.
            
            The evening was spent in quiet contemplation. I sat by my window, watching the sunset, and thought about my 
            goals for the future. There's so much I want to achieve, and while the path ahead may be challenging, I'm 
            determined to stay the course.
            
            As the day comes to a close, I feel a sense of calm and purpose. Life is a journey, and every step, no matter 
            how small, is a step towards growth and fulfillment.
            </Text>
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
        <Button className='text-white' color='white' _hover={{ backgroundColor: '#3b3b3b' }} flex='1' variant='ghost' leftIcon={<BiLike className='text-white' />}>
          Like
        </Button>
        <Button className='text-white' color='white' _hover={{ backgroundColor: '#3b3b3b' }} flex='1' variant='ghost' leftIcon={<BiChat className='text-white' />}>
          Comment
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DiaryCard;
