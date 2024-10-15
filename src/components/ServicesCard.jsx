import { Image, Text, Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import useMediaQueries from "../hooks/useMediaQuery";

const ServicesCard = ({ image, title, subtitle, description }) => {
  const { isMobile } = useMediaQueries();
  return (
    <Box
      bgGradient="linear(to-b, #FFFFFF, #F1EDE6)"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      width="100%"
      height="auto"
    >
      <Box
        px="4"
        pt="4"
        borderRadius="0.25rem"
        width="100%"
        height={!isMobile ? "50%" : "50%%"}
      >
        <Image
          width="100%"
          height="100%"
          objectFit="cover"
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
            fontSize={!isMobile ? "xl" : "sm"}
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
            fontSize={!isMobile ? "3xl" : "md"}
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
