import { Image, Text, Box } from "@chakra-ui/react";
import PropTypes from "prop-types";

const ServicesCard = ({ image, title, subtitle, description }) => {
  return (
    <Box 
      backgroundColor={"#F1EDE6"} 
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden"
      width="24rem" 
      height="20rem" >
      <Image 
        src={image} 
        alt={title}/>
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Text
            color="#FE5708"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="sm"
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
          isTruncated>
          <Text color="#2D2D2D" fontSize="md">
            {title}
          </Text>
        </Box>
        <Box>
          <Text color="#2D2D2D" fontSize="xs" textAlign="justify">
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
