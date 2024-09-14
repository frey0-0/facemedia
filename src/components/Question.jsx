import { useState, useRef } from 'react';
import { Box, Collapse, Text, VStack, Button } from '@chakra-ui/react';
import useMediaQueries from "../hooks/useMediaQuery";

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useMediaQueries();
  const vstackRef = useRef();

  return (
    <VStack
      ref={vstackRef}
      alignItems="flex-start"
      w="80%"
      borderBottom="2px solid #CFCFCF"
    >
      <Button
        fontSize={isMobile?"sm":"1xl"}
        fontWeight="600"
        onClick={() => setIsOpen(!isOpen)}
        textAlign="left"
        w={vstackRef.current?.offsetWidth}
        px={0}
        rightIcon={isOpen ? "-" : "+"} 
        display="flex"
        justifyContent="space-between"
        variant="ghost"
        _hover={{ bg: "transparent" }}
      >
        {question}
      </Button>
      <Collapse in={isOpen} w={vstackRef.current?.offsetWidth}>
        <Box w="100%">
          <Text color="black" fontSize={isMobile?"sm":"1xl"}>{answer}</Text> 
        </Box>
      </Collapse>
    </VStack>
  );
};

export default Question;