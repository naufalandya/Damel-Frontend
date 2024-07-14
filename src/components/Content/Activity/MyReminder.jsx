import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Flex, Heading, IconButton, Card, CardHeader, CardBody, CardFooter, Button } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiLike, BiChat } from 'react-icons/bi';

const MyReminders = () => {
    const [reminders, setReminders] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReminders = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5901/api/v1/feature/reminders', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (Array.isArray(response.data)) {
                    setReminders(response.data);                    
                } else {
                    throw new Error('Response is not an array');
                }
            } catch (error) {
                console.error('There was an error fetching the reminders!', error);
                setError('There was an error fetching the reminders!');
            }
        };

        fetchReminders();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            {reminders.map(reminder => (
                <Card key={reminder.id} style={{ backgroundColor: '#1E1C1C', marginTop: '1.125rem' }} width={'100%'}>
                    <CardHeader className='bg-neutral-800 text-white' paddingBottom={'0.625rem'}>
                        <Flex spacing='4'>
                            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                <Box>
                                    <Heading fontSize={'1.275rem'} fontWeight={'500'} size='sm'>{reminder.title}</Heading>
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
                    <Flex className='bg-neutral-800' padding={'1rem'} justifyContent={'center'} gap={'12px'} flexDirection={'column'}>
                        <CardBody className='bg-neutral-800 text-white' border={'1px solid white'}>
                            <div className='mb-2'>
                                {reminder.content}
                            </div>
                            <Flex justify={'space-between'} marginTop={'1rem'}>
                                <div>
                                    Status : {reminder.is_finished ? '☑' : '❎'}
                                </div>
                                <div>
                                    📅 {new Date(reminder.deadline_time).toLocaleDateString()}. 🕕 {new Date(reminder.deadline_time).toLocaleTimeString()}
                                </div>
                            </Flex>
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
                        <Button className='text-white' color={'white'} _hover={{ backgroundColor: '#3b3b3b' }} flex='1' variant='ghost' leftIcon={<BiLike className='text-white' />}>
                            Like
                        </Button>
                        <Button className='text-white' color={'white'} _hover={{ backgroundColor: '#3b3b3b' }} flex='1' variant='ghost' leftIcon={<BiChat className='text-white' />}>
                            Comment
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </>
    );
}

export default MyReminders;
