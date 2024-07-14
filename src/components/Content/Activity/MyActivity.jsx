import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Flex, Avatar, Heading, Text, IconButton, Card, CardHeader, CardBody, CardFooter, Button } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiLike, BiChat, BiShare } from 'react-icons/bi';

const MyActivity = () => {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5901/api/v1/feature/post', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }

    fetchPosts();
  }, []);

  const renderAvatar = (avatarLink) => {
    return (
      <Avatar name={username} src={avatarLink || ''} />
    );
  };

  return (
    <>
      {posts.map((post) => (
        <Card key={post.id} width='full' className='mb-4'>
          <CardHeader className='bg-neutral-800 text-white'>
            <Flex justify='space-between' alignItems='center'>
              <Flex gap='4' alignItems='center'>
                {renderAvatar(post.avatar_link)}
                <Box>
                  <Heading size='sm'>{username}</Heading>
                  <Text>Creator, Chakra UI</Text>
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
          <CardBody className='bg-neutral-800 text-white'>
            <Text>{post.text}</Text>
          </CardBody>
          {post.image_link_post.map((image, index) => (
            image.image_link && image.image_link.startsWith('https') && (
                <CardBody key={index} className='bg-neutral-800 text-white'>
                <img src={image.image_link} alt={`Image ${index}`} className='max-w-full' />
                </CardBody>
            )
            ))}


          <CardFooter className='bg-neutral-800 text-white' justify='space-between' flexWrap='wrap'>
            <Button className='text-white' color='white' _hover={{ backgroundColor: '#3b3b3b' }} flex='1' variant='ghost' leftIcon={<BiLike className='text-white' />}>
              Like
            </Button>
            <Button className='text-white' color='white' _hover={{ backgroundColor: '#3b3b3b' }} flex='1' variant='ghost' leftIcon={<BiChat className='text-white' />}>
              Comment
            </Button>
            <Button className='text-white' color='white' _hover={{ backgroundColor: '#3b3b3b' }} flex='1' variant='ghost' leftIcon={<BiShare className='text-white' />}>
              Share
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default MyActivity;
