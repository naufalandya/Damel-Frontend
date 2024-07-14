import Online from './Online';
import Advertisement from "./Advertisement";
import RandomQuote from './RandomQuote';
import RandomTips from './RandomTips';
import { ChakraProvider } from '@chakra-ui/react';
import { darkTheme } from '../../chakra';

const RightFeature = () => {
    return (
        <>
            <div className="right-feature-container h-full" style={{ height : '100%'}}>
                <ChakraProvider theme={darkTheme}>
                    <Online/>
                </ChakraProvider>
                <div className="right-feature-content">
                    <RandomQuote />
                    <Advertisement />
                    <RandomTips />
                </div>
            </div>
        </>
    )
}

export default RightFeature