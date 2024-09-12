import ServicesCard from "../components/ServicesCard";
import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import { Element } from "react-scroll";
const Services = () => {
  const services = [
    {
      image: "https://via.placeholder.com/150",
      title: "Service 1",
      subtitle: "Subtitle 1",
      description: "Description 1",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Service 2",
      subtitle: "Subtitle 2",
      description: "Description 2",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Service 3",
      subtitle: "Subtitle 3",
      description: "Description 3",
    },
  ];

  return (
    <Element name="services">
      <Text fontSize="3xl" textAlign="center" mt="2rem" fontWeight="700">
        Our Services
      </Text>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing="1rem"
        justifyItems="center"
      >
        {services.map((service, index) => (
          <Box key={index} w="100%" maxW={{ base: '100%', md: '45%' }}>
            <ServicesCard {...service} />
          </Box>
        ))}
      </SimpleGrid>
    </Element>
  );
}

export default Services;