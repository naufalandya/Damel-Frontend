import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Flex, Avatar, Heading, Text, IconButton, Card, CardHeader, CardBody, CardFooter, Button, useToast } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiLike, BiChat, BiShare } from 'react-icons/bi'; // Uncomment the necessary icons

const colors = [
  '#29536b', '#38684e', '#684a38', '#423868', '#603868', '#683854', 
  '#68383c', '#683868', '#386864', '#384d68',  
  '#636838', '#684a38', '#475470', '#8e8f42', '#aa524c', '#aa524c', '#1f8842', '#886f1f', '#881f76'
];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const FeedPost = () => {
  const [posts, setPosts] = useState([]);
  // const [currentUserId, setCurrentUserId] = useState(null); // Add this state
  // const toast = useToast();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://103.127.137.138:5901/api/v1/feature/feed/post-speech', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setPosts(response.data.posts);

        // Assuming you have a way to get the current user ID
        // const userResponse = await axios.get('http://103.127.137.138:5901/api/v1/user/current', {
        //   headers: {
        //     Authorization: `Bearer ${token}`
        //   }
        // });
        // setCurrentUserId(userResponse.data.id);
        
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  // const handleLike = async (postId) => {
  //   try {
  //     const token = localStorage.getItem('token');
  //     await axios.post('http://103.127.137.138:5901/api/v1/feature/like', { postId }, {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     });
  //     setPosts(posts.map(post => post.id === postId 
  //       ? { 
  //           ...post, 
  //           likedByCurrentUser: true, 
  //           _count: { 
  //             ...post._count, 
  //             likes: post._count.likes + 1 
  //           } 
  //         } 
  //       : post
  //     ));
  //   } catch (error) {
  //     toast({
  //       title: "Like action failed.",
  //       description: `${error.response.data.message}`,
  //       status: "error",
  //       duration: 1000,
  //       isClosable: true,
  //     });    
  //   }
  // };

  // const handleUnlike = async (postId) => {
  //   try {
  //     const token = localStorage.getItem('token');
  //     await axios.post('http://103.127.137.138:5901/api/v1/feature/unlike', { postId }, {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     });
  //     setPosts(posts.map(post => post.id === postId 
  //       ? { 
  //           ...post, 
  //           likedByCurrentUser: false, 
  //           _count: { 
  //             ...post._count, 
  //             likes: post._count.likes - 1 
  //           } 
  //         } 
  //       : post
  //     ));
  //   } catch (error) {
  //     toast({
  //       title: "Unlike action failed.",
  //       description: `${error.response.data.message}`,
  //       status: "error",
  //       duration: 1000,
  //       isClosable: true,
  //     });
  //   }
  // };

  const renderAvatar = (avatarLink) => {
    return (
      <Avatar name={avatarLink} src={avatarLink || ''} />
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
                  <Heading size='sm'>{post.users.username}</Heading>
                  <Text>{new Date(post.created_at).toLocaleDateString()}</Text>
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
          {post.tags.map((tag, index) => (
            <CardBody key={index} className='bg-neutral-800' my={0} py={0}>
              <Box 
                width='max-content' 
                bg={getRandomColor()} 
                my={0}
                p='2' 
                borderRadius='md'>
                <Box className='text-white'>
                  <Text className='text-white' style={{ fontWeight: '500' }}>{tag}</Text>
                </Box>
              </Box>
            </CardBody>
          ))}
          {post.image_link_post.map((image, index) => (
            image.image_link && image.image_link.startsWith('https') && (
              <CardBody key={index} className='bg-neutral-800 text-white'>
                <img src={image.image_link} alt={`Image ${index}`} className='max-w-full' />
              </CardBody>
            )
          ))}

          {/* <CardBody className='bg-neutral-800 text-white flex' style={{ justifyContent: 'flex-end' }}>
            <Text className='text-white' color='white' mx='4'>
              {post._count.likes} {post._count.likes === 1 ? 'Like' : 'Likes'}
            </Text>
          </CardBody> */}
          <CardFooter className='bg-neutral-800 text-white' justify='space-between' flexWrap='wrap'>
            {/* <Button
              className='text-white'
              color='white'
              _hover={{ backgroundColor: '#3b3b3b' }}
              flex='1'
              variant='ghost'
              leftIcon={<BiLike className='text-white' />}
              onClick={() => post.likedByCurrentUser ? handleUnlike(post.id) : handleLike(post.id)}
            >
              {post.likedByCurrentUser ? 'Unlike' : 'Like'}
            </Button> */}
            {/* <Button className='text-white' color='white' _hover={{ backgroundColor: '#3b3b3b' }} flex='1' variant='ghost' leftIcon={<BiChat className='text-white' />}>
              Comment
            </Button>
            <Button className='text-white' color='white' _hover={{ backgroundColor: '#3b3b3b' }} flex='1' variant='ghost' leftIcon={<BiShare className='text-white' />}>
              Share
            </Button> */}
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default FeedPost;
