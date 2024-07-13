import React from 'react';
import { Box, Flex, Heading, Text, IconButton, Card, CardHeader, CardBody, CardFooter, Button } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiLike, BiChat } from 'react-icons/bi';

const MyReminder = () => {
    return (
        <>
                <Card style={ { backgroundColor: '#1E1C1C', marginTop: '1.125rem'}} width={'100%'}>
                    <CardHeader className='bg-neutral-800 text-white' paddingBottom={'0.625rem'}>
                        <Flex spacing='4'>
                            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                <Box backgroundColor={'#E8C5E5'} borderRadius='full' p='4'>
                                    {/* <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' size='md' /> */}
                                </Box>
                                <Box>
                                    <Heading fontSize={'1.275rem'} fontWeight={'500'} size='sm'>Reminders</Heading>
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
                                My Report
                            </div>
                            <Text>
                                Don't forget to finish the report by tomorrow. Also, pick up the dry cleaning on the way home. 
                                These small reminders help keep everything on track. Staying organized means less stress and 
                                more productivity throughout the day.
                            </Text>
                            <Flex justify={'space-between'} marginTop={'1rem'}>
                                <div>
                                    Status : ☑
                                </div>
                                <div>
                                    📅 Friday, 26 July 2024. 🕕 Not mentioned
                                </div>
                            </Flex>
                        </CardBody>

                        <CardBody className='bg-neutral-800 text-white' border={'1px solid white'}>
                            <Text>
                                Remember to water the plants in the office every Friday. Keeping the plants healthy adds a 
                                touch of nature and tranquility to the workspace. It’s a small task, but it makes a big difference.
                            </Text>
                            <Flex justify={'space-between'} marginTop={'1rem'}>
                                <div>
                                    Status : ❎
                                </div>
                                <div>
                                    📅 Friday, 26 July 2024. 🕕 19.00 AM
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
        </>
    )
}

export default MyReminder;
