import { Button, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-scroll";
import useMediaQueries from "../hooks/useMediaQuery";
import PropTypes from "prop-types";

const Links = ({ isAtTop }) => {
  const { isMobile, isTablet } = useMediaQueries();

  return (
    <HStack
      spacing={isMobile ? "" : isTablet ? "2rem" : "4rem"}
      fontSize="1rem"
      alignItems="center"
      justifyContent={isMobile ? "space-between" : ""}
      w={isMobile ? "100%" : "auto"}
      position={!isAtTop && isMobile ? "fixed" : ""}
      top={0}
      px={(isMobile && !isAtTop) || isTablet ? "1rem" : ""}
      py={isMobile && !isAtTop ? "1rem" : ""}
      backgroundColor={"#F1EDE6"}
      zIndex={23}
    >
      <Link to="home" smooth={true} duration={500} offset={-70}>
        <Button backgroundColor="transparent" variant="plain" width="20px">
          <Text fontWeight="400">Home</Text>
        </Button>
      </Link>
      <Link to="services" smooth={true} duration={500} offset={-70}>
        <Button backgroundColor="transparent" variant="plain" width="20px">
          <Text fontWeight="400">Services</Text>
        </Button>
      </Link>
      <Link to="work" smooth={true} duration={500} offset={-70}>
        <Button backgroundColor="transparent" variant="plain" width="20px">
          <Text fontWeight="400">Work</Text>
        </Button>
      </Link>
      <Link to="about" smooth={true} duration={500} offset={-70}>
        <Button backgroundColor="transparent" variant="plain" width="20px">
          <Text fontWeight="400">About</Text>
        </Button>
      </Link>
      <Link to="contact" smooth={true} duration={500} offset={-70}>
        <Button backgroundColor="transparent" variant="plain" width="20px">
          <Text fontWeight="400">Contact</Text>
        </Button>
      </Link>
    </HStack>
  );
};

Links.propTypes = {
  isAtTop: PropTypes.bool.isRequired,
};

export default Links;
