import { useState } from "react";
import { Box, Collapse, Text, VStack, Button } from "@chakra-ui/react";
import useMediaQueries from "../hooks/useMediaQuery";
import PropTypes from "prop-types";

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useMediaQueries();

  return (
    <VStack
      alignItems="flex-start"
      w="90%"
      maxWidth="1500px"
      borderBottom="0.5px solid #CFCFCF"
      pb={4}
    >
      <Button
        fontSize={isMobile ? "sm" : "2xl"}
        fontWeight="700"
        onClick={() => setIsOpen(!isOpen)}
        textAlign="left"
        px={0}
        rightIcon={isOpen ? "-" : "+"}
        display="flex"
        justifyContent="space-between"
        variant="ghost"
        _hover={{ bg: "transparent" }}
        whiteSpace="normal"
        height="auto"
        blockSize="auto"
        w="100%"
      >
        {question}
      </Button>
      <Collapse in={isOpen}>
        <Box w="100%">
          <Text
            color="black"
            fontSize={isMobile ? "sm" : "lg"}
            overflowWrap="break-word"
            wordBreak="break-word"
          >
            {answer}
          </Text>
        </Box>
      </Collapse>
    </VStack>
  );
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Question;
