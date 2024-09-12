import { Image, Text, Box } from "@chakra-ui/react";
import PropTypes from "prop-types";

const ServicesCard = ({ image, title, subtitle, description }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={image} alt={title} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Text
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            {subtitle}
          </Text>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {title}
        </Box>

        <Box>
          <Text color="gray.500" fontSize="sm">
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
