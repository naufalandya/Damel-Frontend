import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  useToast,
  ChakraProvider
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

export default function SignUpCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const handleSignUp = async () => {
    // Validate all required fields
    if (!email || !password || !name || !username) {
      toast({
        title: "Validation Error",
        description: "All fields are required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await axios.post('https://damel-backend-production.up.railway.app/api/v1/auth/register', {
        email,
        password,
        name,
        username,
      });

      if (response.data && response.data.status === true) {
        toast({
          title: "Sign up successful.",
          description: "You have successfully signed up.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        setTimeout(() => {
          navigate("/signin");
        }, 1000);

      } else {
        toast({
          title: "Sign up failed.",
          description: "Please try again later.",
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
    }
  };

  return (
    <ChakraProvider>
      <Flex
        minH={'100vh'}
        minW={'300px'}
        height={'100%'}
        align={'center'}
        justify={'center'}
        className='bg-neutral-800'
      >
        <Stack spacing={8} py={12} px={6}>
          <Stack align={'center'}>
            <Heading color={'#ececec'} fontSize={'4xl'} textAlign={'center'}>
              Sign up
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
            minW={'375px'}
          >
            <Stack spacing={4}>
              <HStack>
                <Box width={'100%'}>
                  <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <HStack>
                <Box width={'100%'}>
                  <FormControl id="username" isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input 
                      type="text" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <HStack>
                <Box width={'100%'}>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input 
                    type={showPassword ? 'text' : 'password'} 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    bg="transparent"
                    color="white"
                  />
                  <InputRightElement>
                    <Button 
                      color="white"
                      variant="ghost"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.600'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleSignUp}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link as={RouterLink} to='/signin' color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </ChakraProvider>
  );
}
