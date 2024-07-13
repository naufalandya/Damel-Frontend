import React, { useState } from 'react';
import { Box, Switch, FormControl, FormLabel, Button, useToast, Heading } from '@chakra-ui/react';

const Settings = () => {
    const [isPublic, setIsPublic] = useState(false);
    const toast = useToast();

    const handleSave = async () => {
        const payload = { isPublic };

        try {
            const response = await fetch('YOUR_API_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                toast({
                    title: 'Settings saved.',
                    description: "Your settings have been successfully saved.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
            } else {
                throw new Error('Failed to save settings');
            }
        } catch (error) {
            toast({
                title: 'Error saving settings.',
                description: "There was an error saving your settings. Please try again.",
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Box
            width="100%"
            overflow="hidden"
            color="white"
            p={4}
        >
            <Heading fontSize={'2rem'} mb={9}>Settings</Heading>
            <FormControl display="flex" alignItems="center" mb={4}>
                <FormLabel htmlFor="public-switch" mb="0">
                    Public Profile
                </FormLabel>
                <Switch
                    id="public-switch"
                    isChecked={isPublic}
                    onChange={(e) => setIsPublic(e.target.checked)}
                    colorScheme="teal"
                />
            </FormControl>
            <Button colorScheme="teal" onClick={handleSave}>
                Save
            </Button>
        </Box>
    );
};

export default Settings;
