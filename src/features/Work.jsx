import { Element } from "react-scroll";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import WorkCard from "../components/WorkCard";

const Work = () => {
  const videos = [
    {
      link: "https://www.youtube.com/watch?v=5qap5aO4i9A",
      title: "Video 1",
      subtitle: "Subtitle 1",
      description: "Description 1",
    },
    {
      link: "https://www.youtube.com/watch?v=5qap5aO4i9A",
      title: "Video 2",
      subtitle: "Subtitle 2",
      description: "Description 2",
    },
    {
      link: "https://www.youtube.com/watch?v=5qap5aO4i9A",
      title: "Video 3",
      subtitle: "Subtitle 3",
      description: "Description 3",
    },
    {
      link: "https://www.youtube.com/watch?v=5qap5aO4i9A",
      title: "Video 4",
      subtitle: "Subtitle 4",
      description: "Description 4",
    },
    {
      link: "https://www.youtube.com/watch?v=5qap5aO4i9A",
      title: "Video 5",
      subtitle: "Subtitle 5",
      description: "Description 5",
    },
    {
      link: "https://www.youtube.com/watch?v=5qap5aO4i9A",
      title: "Video 6",
      subtitle: "Subtitle 6",
      description: "Description 6",
    }
  ];

  return (
    <Element name="work">
      <Box h="auto" w="auto" backgroundColor={"#F1EDE6"} pt="2.5rem">
        <Text fontSize="3rem" textAlign="center" fontWeight="700">
          Our Work
        </Text>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
          spacing="1rem"
          justifyItems="center"
          mt="1rem"
          p={5}
        >
          {videos.map((video, index) => (
            <Box key={index} w="100%" maxW={{ base: "100%", md: "45%" }}>
              <WorkCard {...video} />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Element>
  );
};

export default Work;
