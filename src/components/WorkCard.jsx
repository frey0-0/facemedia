import { Text, Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import useMediaQueries from "../hooks/useMediaQuery";

const WorkCard = ({ link, title, subtitle, description }) => {
  const { isMobile } = useMediaQueries();
  return (
    <Box
      bgGradient="linear(to-b, #F1EDE6, #FFFFFF)"
      borderWidth="1px"
      borderRadius="1rem"
      boxShadow="sm"
      overflow="hidden"
      w="100%"
      height="auto"
    >
      <Box px="2" pt="4" w="100%">
        <iframe
          width="100%"
          src={`https://www.youtube.com/embed/${link}`}
          style={{
            aspectRatio: "16/9",
            borderRadius: "0.75rem",
            width: "100%",
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Box>
      <Box p="4" d="flex" alignItems="baseline">
        <Text
          color="#FE5708"
          letterSpacing="wide"
          fontSize={!isMobile ? "md" : "sm"}
          textTransform="uppercase"
        >
          {subtitle}
        </Text>
        <Text
          color="#2D2D2D"
          fontWeight="semibold"
          fontSize={!isMobile ? "2xl" : "md"}
        >
          {title}
        </Text>
        <Text
          color="#2D2D2D"
          fontSize={!isMobile ? "sm" : "xs"}
          fontWeight="hairline"
          mt="3"
        >
          {description}
        </Text>
      </Box>
    </Box>
  );
};

WorkCard.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default WorkCard;
