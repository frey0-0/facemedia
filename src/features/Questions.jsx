import { Text, VStack } from '@chakra-ui/react';
import Question from '../components/Question'

const Questions = () => {
  const questions = [
    {
      question: "Who is the target audience for FaceMedia?",
      answer: "abc",
    },
    {
      question: "How does the process work?",
      answer: "abcccccccccccccccccccccccccccccccccccccccccccccccccccccc",
    },
    {
      question: "What are your prices?",
      answer: "abc",
    },
    {
      question: "Do you provide scripts, or do I need to supply my own?",
      answer: "abc",
    },
    {
      question: "How do I get started?",
      answer: "abc",
    },
  ];

  return (
    <VStack spacing={4} p={4} w="full">
    <Text fontSize="3rem" textAlign="center" mt="2rem" fontWeight="700">
    Have Questions?
    </Text>
      {questions.map((q, index) => (
        <Question key={index} question={q.question} answer={q.answer} />
      ))}
    </VStack>
  );
};

export default Questions;
