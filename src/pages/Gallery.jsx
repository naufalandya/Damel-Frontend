import { useEffect, useState } from 'react';
import { Box, Image, SimpleGrid, Text, Center } from '@chakra-ui/react';

const Gallery = () => {
    const [imageLinks, setImageLinks] = useState([]);

    useEffect(() => {
        const fetchImageLinks = async () => {
            try {
                const response = await fetch('YOUR_API_ENDPOINT');
                const data = await response.json();
                setImageLinks(data.links); 
            } catch (error) {
                console.error('Error fetching image links:', error);
            }
        };

        fetchImageLinks();
    }, []);

    return (
        <Box p={4} width={'100%'}>
            {imageLinks.length === 0 ? (
                <Center height="80vh">
                    <Text className="text-white">No content available</Text>
                </Center>
            ) : (
                <SimpleGrid columns={[1, 2]} spacing={4}>
                    {imageLinks.map((link, index) => (
                        <Box key={index} border="1px solid white" borderRadius="md" overflow="hidden">
                            <Image src={link} alt={`Gallery Image ${index + 1}`} width="100%" />
                        </Box>
                    ))}
                </SimpleGrid>
            )}
        </Box>
    );
}

export default Gallery;
