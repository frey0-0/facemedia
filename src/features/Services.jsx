import ServicesCard from "../components/ServicesCard";
import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import { Element } from "react-scroll";
const Services = () => {
  const services = [
    {
      image: "https://via.placeholder.com/150",
      title: "On-Camera Content Creation",
      subtitle: "Instagram, LinkedIn and more",
      description: "We create high-quality on-camera content, so you don't need to hire an in-house content creator. With over 300 videos recorded, our experienced team ensures your brand's message is clear, engaging, and creative, helping your brand stand out in the digital space.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Video Editing Services",
      subtitle: "Instagram, LinkedIn and more",
      description: "In addition to recording, we provide professional video editing. Whether it's the videos we create or your existing footage, we'll deliver a polished product. With over 300 videos edited and lakhs of views, we know how to keep your audience engaged.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Content Writing Services",
      subtitle: "Instagram, LinkedIn and more",
      description: "We offer content writing for social media, including video scripts that connect your brand with your audience. Let us handle your content while you focus on your business.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Service Content Strategy",
      subtitle: "Instagram, LinkedIn and more",
      description: "We develop content strategies to improve your views and engagement. We'll work with you to understand your goals and create a plan to grow your audience.",
    },
  ];

  return (
    <Element name="services">
      <Text fontSize="3rem" textAlign="center" mt="2rem" fontWeight="700">
        Our Services
      </Text>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing="2rem" 
        p="2rem"
        maxW="72rem"
        mx="auto"
        justifyItems="center"
      >
        {services.map((service, index) => (
          <Box key={index} w="100%" maxW={{ base: "100%", md: "45%" }}>
            <ServicesCard {...service} />
          </Box>
        ))}
      </SimpleGrid>
    </Element>
  );
};

export default Services;
