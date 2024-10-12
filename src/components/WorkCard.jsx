import { Image, Text, Box } from "@chakra-ui/react";
import PropTypes from "prop-types";


const WorkCard = ({ link, title, subtitle, description }) => {
  return (
    <Box 
    bgGradient="linear(to-b, #F1EDE6, #FFFFFF)" 
    borderWidth="1px" 
    borderRadius="1rem" 
    boxShadow="sm"
    overflow="hidden"
    width={{ base: "16rem", sm: "22rem", md: "24rem", lg: "26rem" }}
    height={{ base: "14rem", sm: "18rem", md: "20rem", lg: "22rem" }}
    >
      <Box 
        px="6"
        pt="6"
        width="100%"
        height="62%"
      >
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${link}`}
          style={{ borderRadius: '0.75rem' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Box>
      <Box p="6" d="flex" alignItems="baseline">
        <Text
          color="#FE5708"
          letterSpacing="wide"
          fontSize="md"
          textTransform="uppercase"
        >
          {subtitle}
        </Text>
        <Text
        color="#2D2D2D"
        fontWeight="semibold"
        fontSize="xl"
        >
        {title}
        </Text>
        <Text color="#2D2D2D" fontSize="sm" fontWeight="hairline" mt="3">
          {description}
        </Text>
      </Box>
    </Box>
  );
}


WorkCard.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default WorkCard;