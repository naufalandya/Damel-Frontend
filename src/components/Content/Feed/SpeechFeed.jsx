import { useRef } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Avatar,
  Heading,
  IconButton,
  Box,
  Text,
  Image,
  Button,
} from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiShare, BiChat, BiLike } from 'react-icons/bi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

const NextArrow = ({ onClick }) => {
  return (
    <IconButton
      aria-label="Next slide"
      icon={<ArrowForwardIcon />}
      position="absolute"
      top="50%"
      right="10px"
      transform="translate(0, -50%)"
      backgroundColor="rgba(207, 207, 207, 0.432)"
      borderRadius="full"
      zIndex={2}
      onClick={onClick}
      _hover={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      size="sm"
    />
  );
};

NextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const PrevArrow = ({ onClick }) => {
  return (
    <IconButton
      aria-label="Previous slide"
      icon={<ArrowBackIcon />}
      position="absolute"
      top="50%"
      left="10px"
      transform="translate(0, -50%)"
      backgroundColor="rgba(207, 207, 207, 0.432)"
      borderRadius="full"
      zIndex={2}
      onClick={onClick}
      _hover={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      size="sm"
    />
  );
};

PrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const SpeechFeed = () => {
  const sliderRef = useRef(null);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow onClick={nextSlide} />,
    prevArrow: <PrevArrow onClick={prevSlide} />,
  };

  return (
    <Card padding={'0px'} margin={0} width={'100%'} flexDirection={'column'}>
      <CardHeader className='bg-neutral-800 text-white m-0 p-0'>
        <Flex spacing='4'>
          <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' boxSize='2.575rem' />
            <Box>
              <Heading fontSize={'0.875rem'} size='sm'>Segun Adebayo</Heading>
              <Text fontSize={'0.875rem'}>Creator, Chakra UI</Text>
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
      <CardBody className='bg-neutral-800 p-0 m-0 text-white' pt={2} pb={6}>
        <Text className='p-0' fontSize={'0.925rem'}>
          With Chakra UI, I wanted to sync the speed of development with the speed
          of design. I wanted the developer to be just as excited as the designer to
          create a screen.
        </Text>
      </CardBody>

      <CardBody className='bg-neutral-800 p-0 m-0' pt={0} pb={6}>
        <Button
          marginRight={'8px'}
          color={'white'}
          backgroundColor={'#444477'}
          _hover={false}
          cursor={'default'}
          _active={false}
          flex='1'
          variant='ghost'
        >
          Technology
        </Button>

        <Button
          marginRight={'8px'}
          color={'white'}
          backgroundColor={'#b85252'}
          _hover={false}
          cursor={'default'}
          _active={false}
          flex='1'
          variant='ghost'
        >
          Robotic
        </Button>
      </CardBody>

      <Box className="bg-neutral-800" padding="1.125rem" width="100%">
        <Slider ref={sliderRef} {...settings}>
          <Box>
            <Image
              objectFit="cover"
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Chakra UI"
              height="auto"
              width="100%"
            />
          </Box>
          <Box>
            <Image
              objectFit="cover"
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Chakra UI"
              height="auto"
              width="100%"
            />
          </Box>
          <Box>
            <Image
              objectFit="cover"
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Chakra UI"
              height="auto"
              width="100%"
            />
          </Box>
        </Slider>
      </Box>

      <CardFooter
        className='bg-neutral-800 text-white'
        justify='space-between'
        flexWrap='wrap'
        sx={{
          '& > button': {
            minW: '100px',
          },
        }}
      >
        {/* <Button
          className='text-white'
          color={'white'}
          _hover={{ backgroundColor: '#3b3b3b' }}
          flex='1'
          variant='ghost'
          leftIcon={<BiLike className='text-white' />}
        >
          Like
        </Button>
        <Button
          className='text-white'
          color={'white'}
          _hover={{ backgroundColor: '#3b3b3b' }}
          flex='1'
          variant='ghost'
          leftIcon={<BiChat className='text-white' />}
        >
          Comment
        </Button>
        <Button
          className='text-white'
          color={'white'}
          _hover={{ backgroundColor: '#3b3b3b' }}
          flex='1'
          variant='ghost'
          leftIcon={<BiShare className='text-white' />}
        >
          Share
        </Button> */}
      </CardFooter>
    </Card>
  );
};

export default SpeechFeed;
