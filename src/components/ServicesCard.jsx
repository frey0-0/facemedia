import { Image, Text, Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import useMediaQueries from "../hooks/useMediaQuery";

const ServicesCard = ({ image, title, subtitle, description }) => {
  const { isMobile, isTablet } = useMediaQueries();
  return (
    <Box
      bgGradient="linear(to-b, #FFFFFF, #F1EDE6)"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      width="100%"
    >
      <Box
        px="4"
        pt="4"
        borderRadius="0.25rem"
        width="100%"
        height={!isMobile ? "50%" : "50%%"}
      >
        <Image
          mx="auto"
          height="100%"
          maxH="20rem"
          overflow="hidden"
          src={image}
          alt={title}
          style={{ borderRadius: "inherit" }}
        />
      </Box>
      <Box p="4">
        <Box d="flex" alignItems="baseline">
          <Text
            color="#FE5708"
            fontWeight="semibold"
            letterSpacing="wide"
            wordBreak="break-all"
            fontSize={isMobile ? "sm" : isTablet ? "md" : "xl"}
          >
            {subtitle}
          </Text>
        </Box>
        <Box
          mt="1"
          mb="3"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          <Text
            color="#2D2D2D"
            fontSize={isMobile ? "md" : isTablet ? "2xl" : "3xl"}
            wordBreak="break-all"
          >
            {title}
          </Text>
        </Box>
        <Box>
          <Text
            color="#2D2D2D"
            fontSize={!isMobile ? "l" : "xs"}
            textAlign="justify"
          >
            {description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

ServicesCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServicesCard;
