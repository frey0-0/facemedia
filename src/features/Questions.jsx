import { Text, VStack } from "@chakra-ui/react";
import Question from "../components/Question";
import useMediaQueries from "../hooks/useMediaQuery";

const Questions = () => {
  const { isMobile } = useMediaQueries();

  const questions = [
    {
      question: "Who is the target audience for FaceMedia?",
      answer:
        "FaceMedia is designed for brands looking for content creators to produce engaging videos for their social media. We provide a skilled creator who can handle everything from filming to writing and editing, helping brands grow their online presence effectively.",
    },
    {
      question: "How does the process work?",
      answer: "Once you reach out to us, we will engage in a detailed discussion to understand your needs and the specific services you require. After finalizing the details, we will schedule the filming, and our team will take care of everything else, including editing and delivering the final videos.",
    },
    {
      question: "What are your prices?",
      answer: "Our pricing is determined by the scope of the project, including factors such as the duration of filming and the complexity of editing. We provide customized quotes tailored to your specific requirements. Please contact us for a detailed estimate.",
    },
    {
      question: "Do you provide scripts, or do I need to supply my own?",
      answer: "We can create scripts customized to your needs, or you are welcome to provide your own. Our team will collaborate with you to ensure that the script aligns with your brand message and objectives.",
    },
    {
      question: "How do I get started?",
      answer: "Getting started with FaceMedia is simple! Just contact us through our website or social media channels, and we will arrange a consultation to discuss your needs and explore how we can assist you.",
    },
  ];

  return (
    <VStack spacing={4} p={4} w="full">
      <Text
        fontSize={!isMobile ? "3rem" : "2rem"}
        textAlign="center"
        mt="2rem"
        fontWeight="700"
      >
        Have Questions?
      </Text>
      {questions.map((q, index) => (
        <Question key={index} question={q.question} answer={q.answer} />
      ))}
    </VStack>
  );
};

export default Questions;
