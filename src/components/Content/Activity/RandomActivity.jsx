import { Box, Flex, Avatar, Heading, Text, IconButton, Card, CardHeader, CardBody, CardFooter, Button } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiLike, BiChat, BiShare } from 'react-icons/bi';

const RandomActivity = () => {
    return (
        <Card maxW='md' width={'100%'}>
            <CardHeader className='bg-neutral-800 text-white'>
                <Flex spacing='4'>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

                        <Box>
                            <Heading size='sm'>Segun Adebayo</Heading>
                            <Text>Creator, Chakra UI</Text>
                        </Box>
                    </Flex>
                    <IconButton
                        _hover={{backgroundColor : '#3b3b3b'}}
                        variant='ghost'
                        colorScheme='gray'
                        aria-label='See menu'
                        icon={<BsThreeDotsVertical className='text-white' />}
                    />
                </Flex>
            </CardHeader>
            <CardBody className='bg-neutral-800 text-white' border={'1px solid white'}>
                <Text>
                    With Chakra UI, I wanted to sync the speed of development with the speed
                    of design. I wanted the developer to be just as excited as the designer to
                    create a screen.
                </Text>
            </CardBody>

            <CardBody className='bg-neutral-800 text-white' border={'1px solid white'}>
                <Text>
                    With Chakra UI, I wanted to sync the speed of development with the speed
                    of design. I wanted the developer to be just as excited as the designer to
                    create a screen.
                </Text>
            </CardBody>

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
                <Button className='text-white' color={'white'} _hover={{backgroundColor : '#3b3b3b'}} flex='1' variant='ghost' leftIcon={<BiLike className='text-white'/>}>
                    Like
                </Button>
                <Button className='text-white' color={'white'} _hover={{backgroundColor : '#3b3b3b'}} flex='1' variant='ghost' leftIcon={<BiChat className='text-white' />}>
                    Comment
                </Button>
                <Button className='text-white' color={'white'} _hover={{backgroundColor : '#3b3b3b'}} flex='1' variant='ghost' leftIcon={<BiShare className='text-white'/>}>
                    Share
                </Button>
            </CardFooter>
        </Card>
    )
}

export default RandomActivity;
