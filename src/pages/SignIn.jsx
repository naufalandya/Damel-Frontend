import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  ChakraProvider,
  useToast,
  Link
} from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function SignInCard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Added loading state
  const toast = useToast();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    setLoading(true); // Set loading state to true
    try {
      const response = await axios.post('http://103.127.137.138:5901/api/v1/auth/login', {
        email,
        password,
      });

      console.log(response.data.data)

      if (response.data && response.request.status === 201 && response.data.data.token) {
        toast({
          title: "Sign in successful.",
          description: "You have been signed in successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        localStorage.setItem('token', response.data.data.token);
        localStorage.setItem('name', response.data.data.name);
        localStorage.setItem('username', response.data.data.username);

        setTimeout(() => {
          navigate("/");
        }, 1000);

      } else {
        toast({
          title: "Sign in failed.",
          description: `${response.data.message}`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      if (error.response) {
        toast({
          title: "Sign in failed.",
          description: `${error.response.data.message}`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else if (error.request) {
        toast({
          title: "Sign in failed.",
          description: "No response from the server. Please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Sign in failed.",
          description: "An unexpected error occurred. Please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  return (
    <ChakraProvider>
      <Flex
        minH={'100vh'}
        height={'100%'}
        align={'center'}
        justify={'center'}
        className='bg-neutral-800'
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading color={'#ececec'} fontSize={'4xl'} textAlign={'center'}>
              Sign in
            </Heading>
            <Text fontSize={'lg'} color={'#c7c7c7'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            backgroundColor={'#333333'}
            color={'white'}
            boxShadow={'lg'}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Text color={'blue.400'}>
                    <Link href='/signup'>Don't have an account?</Link>
                  </Text>
                </Stack>
                <Button
                  bg={'blue.600'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleSignIn}
                  isLoading={loading} // Added isLoading prop
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </ChakraProvider>
  );
}
