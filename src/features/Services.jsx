import ServicesCard from "../components/ServicesCard";
import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import { Element } from "react-scroll";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service4 from "../assets/service3.png";
import service3 from "../assets/service4.png";
import useMediaQueries from "../hooks/useMediaQuery";

const Services = () => {
  const { isMobile, isTablet } = useMediaQueries();

  const services = [
    {
      image: service1,
      title: "On-Camera Content Creation",
      subtitle: "Instagram, YouTube and more",
      description:
        "We create high-quality on-camera content, so you don’t need to hire an in-house content creator. With over 300 videos recorded, our experienced team ensures your brand’s message is clear, engaging, and creative, helping your brand stand out in the digital space.",
    },
    {
      image: service4,
      title: "Video Editing Services",
      subtitle: "Instagram, YouTube and more",
      description:
        "In addition to recording, we provide professional video editing. Whether it's the videos we create or your existing footage, we’ll deliver a polished product. With over 300 videos edited and lakhs of views, we know how to keep your audience engaged.",
    },
    {
      image: service3,
      title: "Content Writing Services",
      subtitle: "Instagram, YouTube and more",
      description:
        "We offer content writing for social media, including video scripts that connect your brand with your audience. Let us handle your content while you focus on your business.",
    },
    {
      image: service2,
      title: "Content Strategy",
      subtitle: "Instagram, YouTube and more",
      description:
        "We develop content strategies to improve your views and engagement. We'll work with you to understand your goals and create a plan to grow your audience.",
    },
  ];

  return (
    <Element name="services">
      <Text
        fontSize={!isMobile ? "3rem" : "2rem"}
        textAlign="center"
        mt="2rem"
        fontWeight="700"
      >
        Our Services
      </Text>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing="2rem"
        py="2rem"
        px={isMobile ? "1rem" : isTablet ? "3rem" : "8rem"}
        w="100%"
        justifyItems="center"
      >
        {services.map((service, index) => (
          <Box
            key={index}
            w="100%"
            maxW={!(isMobile || isTablet) ? "36vw" : "90vw"}
          >
            <ServicesCard {...service} />
          </Box>
        ))}
      </SimpleGrid>
    </Element>
  );
};

export default Services;
