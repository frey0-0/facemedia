import { VStack, HStack, Image } from "@chakra-ui/react";
import { Element } from "react-scroll";
import logo from "../assets/logo.png";
import useMediaQueries from "../hooks/useMediaQuery";
import Links from "../components/Links";
import LandingCTA from "../components/LandingCTA";
import Marquee from "react-fast-marquee";
import image from "../assets/center_graphic.png";
import { useEffect, useState } from "react";

const Landing = () => {
  const { isMobile } = useMediaQueries();
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Element name="home">
      <VStack backgroundColor={"#F1EDE6"} w="100%">
        {isMobile ? (
          <VStack
            alignItems="center"
            w="100%"
            spacing={"1rem"}
            px="1rem"
            pt="1rem"
          >
            <Image
              src={logo}
              alt="logo"
              style={{
                transform: isAtTop ? "translateY(0)" : "translateY(-50%)",
                opacity: isAtTop ? 1 : 0,
                transition:
                  "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
              }}
            />
            <Links isAtTop={isAtTop} />
          </VStack>
        ) : (
          <HStack justifyContent="space-between" w="100%" pl="6rem" pr="9rem">
            <Image src={logo} alt="logo" width="10rem" height="5rem" />
            <Links isAtTop={isAtTop} />
          </HStack>
        )}
        <HStack
          w="100%"
          h="auto"
          mt={!isMobile ? "8rem" : "4rem"}
          justifyContent="space-around"
        >
          <LandingCTA />
          {!isMobile && (
            <Image src={image} alt="center graphic" w="30%" h="auto" />
          )}
        </HStack>
        <Marquee 
        speed={!isMobile ? "100" : "60"}
        style={{ color: "#2c2c2c", fontSize: !isMobile ? "1.5rem" : "1rem" , margin: "1rem"}}
        pauseOnHover={true}
        m="1rem">
        We Talk On Camera So You Don't Have To! Let us handle the spotlight for you. We Talk On Camera So You Don't Have To! Let us handle the spotlight for you. We Talk On Camera So You Don't Have To! Let us handle the spotlight for you.
      </Marquee>
      </VStack>
    </Element>
  );
};

export default Landing;
