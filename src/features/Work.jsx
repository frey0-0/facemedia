import { Element } from "react-scroll";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import WorkCard from "../components/WorkCard";
import useMediaQueries from "../hooks/useMediaQuery";

const Work = () => {
  const { isMobile, isTablet } = useMediaQueries();
  console.log(isMobile, isTablet);

  const videos = [
    {
      link: "zQjGN8Dkgd0",
      title: "Storytelling",
      subtitle: "On-Camera Content Creation",
      description: "Description 1",
    },
    {
      link: "zQjGN8Dkgd0",
      title: "Storytelling",
      subtitle: "On-Camera Content Creation",
      description: "Description 1",
    },
    {
      link: "zQjGN8Dkgd0",
      title: "Storytelling",
      subtitle: "On-Camera Content Creation",
      description: "Description 1",
    },
    {
      link: "zQjGN8Dkgd0",
      title: "Storytelling",
      subtitle: "On-Camera Content Creation",
      description: "Description 1",
    },
    {
      link: "zQjGN8Dkgd0",
      title: "Storytelling",
      subtitle: "On-Camera Content Creation",
      description: "Description 1",
    },
    {
      link: "zQjGN8Dkgd0",
      title: "Storytelling",
      subtitle: "On-Camera Content Creation",
      description: "Description 1",
    },
  ];

  return (
    <Element name="work">
      <Box h="auto" w="auto" backgroundColor={"#F1EDE6"} mt="1.5rem">
        <Text
          fontSize={!isMobile ? "3rem" : "2rem"}
          textAlign="center"
          fontWeight="700"
          pt="2rem"
        >
          Our Work
        </Text>
        <SimpleGrid
          width="100%"
          columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
          mx="auto"
          spacing="1rem"
          justifyItems="center"
          p={5}
          px={isMobile ? "1rem" : isTablet ? "2rem" : "6rem"}
        >
          {videos.map((video, index) => (
            <Box key={index} w="100%">
              <WorkCard {...video} />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Element>
  );
};

export default Work;
