import { HStack, Text } from "@chakra-ui/react";
import { Link } from "react-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import PropTypes from "prop-types";

const Links = ({ isAtTop }) => {
  const { isMobile } = useMediaQuery();

  return (
    <HStack
      spacing={isMobile ? "" : "3rem"}
      fontSize="1rem"
      alignItems="center"
      justifyContent={isMobile ? "space-between" : ""}
      w={isMobile ? "100%" : "auto"}
      position={!isAtTop && isMobile ? "fixed" : ""}
      top={0}
      px={isMobile && !isAtTop ? "1rem" : ""}
      py={isMobile && !isAtTop ? "1rem" : ""}
      backgroundColor={"#F1EDE6"}
      zIndex={23}
    >
      <Link to="home" smooth={true} duration={500} offset={-70}>
        <Text>Home</Text>
      </Link>
      <Link to="services" smooth={true} duration={500} offset={-70}>
        <Text>Services</Text>
      </Link>
      <Link to="work" smooth={true} duration={500} offset={-70}>
        <Text>Work</Text>
      </Link>
      <Link to="about" smooth={true} duration={500} offset={-70}>
        <Text>About</Text>
      </Link>
      <Link to="contact" smooth={true} duration={500} offset={-70}>
        <Text>Contact</Text>
      </Link>
    </HStack>
  );
};

Links.propTypes = {
  isAtTop: PropTypes.bool.isRequired,
};

export default Links;
