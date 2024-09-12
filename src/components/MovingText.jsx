import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

const MovingText = () => {
  const text = " We Talk On Camera So You Don't Have To!, Let us handle the spotlight for you, We Talk On Camera So You Don't Have To!, Let us handle the spotlight for you, We Talk On Camera So You Don't Have To!, Let us handle the spotlight for you, We Talk On Camera So You Don't Have To!, Let us handle the spotlight for you, We Talk On Camera So You Don't Have To!, Let us handle the spotlight for you, We Talk On Camera So You Don't Have To!, Let us handle the spotlight for you, We Talk On Camera So You Don't Have To!, Let us handle the spotlight for you, We Talk On Camera So You Don't Have To!, Let us handle the spotlight for you, We Talk On Camera So You Don't Have To!, Let us handle the spotlight for you, We Talk On Camera So You Don't Have To!, Let us handle the spotlight for you, We Talk On Camera So You Don't Have To!, Let us handle the spotlight for you, We Talk On Camera So You Don't Have To!, Let us handle the spotlight for you, We Talk On Camera So You Don't Have To!, Let us handle the spotlight for you, We Talk On Camera So You Don't Have To!, Let us handle the spotlight for you";
  
  return (
    <Box
      width="100%"
      height="60px" // Adjust height as needed
      position="relative"
      overflow="hidden"
    >
      <Flex
        alignItems="center"
        position="absolute"
        top={0}
        left={0}
        whiteSpace="nowrap"
        height="100%"
        className="scrolling-text"
      >
        <Box as="span" display="inline-block" paddingRight="100%">
          {text}
        </Box>
        <Box as="span" display="inline-block" paddingRight="100%">
          {text}
        </Box>
      </Flex>
      <style jsx>{`
        .scrolling-text {
          display: flex;
          animation: scroll 15s linear infinite; /* Adjust speed as needed */
        }

        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </Box>
  );
};

export default MovingText;