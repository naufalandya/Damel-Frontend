import { Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Heading, IconButton, Box, Text, Image, Button } from '@chakra-ui/react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { BiShare, BiChat, BiLike } from 'react-icons/bi'
const TagFeed = () => {
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
            <IconButton _hover={{backgroundColor : '#3b3b3b'}}
                variant='ghost'
                colorScheme='gray'
                aria-label='See menu'
                icon={<BsThreeDotsVertical className='text-white' />}
            />
            </Flex>
        </CardHeader>
        <CardBody className='bg-neutral-800 text-white'>
            <Text>
            With Chakra UI, I wanted to sync the speed of development with the speed
            of design. I wanted the developer to be just as excited as the designer to
            create a screen.
            </Text>
        </CardBody>
        <div className='flex overflow-x-auto whitespace-nowrap bg-neutral-800'>
                <Image
                    objectFit='cover'
                    src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Chakra UI'
                    className='flex-shrink-0'
                />
                <Image
                    objectFit='cover'
                    src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Chakra UI'
                    className='flex-shrink-0'
                />
            </div>

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
            {/* <Button className='text-white'  color={'white'} _hover={{backgroundColor : '#3b3b3b'}} flex='1' variant='ghost' leftIcon={<BiLike className='text-white'/>}>
            Like
            </Button>
            <Button className='text-white' color={'white'} _hover={{backgroundColor : '#3b3b3b'}} flex='1' variant='ghost' leftIcon={<BiChat className='text-white' />}>
            Comment
            </Button>
            <Button className='text-white'  color={'white'} _hover={{backgroundColor : '#3b3b3b'}} flex='1' variant='ghost' leftIcon={<BiShare className='text-white'/>}>
            Share
            </Button> */}
        </CardFooter>
        </Card>
    )
}

export default TagFeed