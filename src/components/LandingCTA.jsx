import { Text, Button, Box, VStack } from "@chakra-ui/react";
import useMediaQueries from "../hooks/useMediaQuery";

const LandingCTA = () => {
  const { isMobile } = useMediaQueries();
  return (
    <Box pl={isMobile ? "0.5rem" : ""}>
      <VStack justifyContent="flex-start" alignItems="flex-start" w="auto">
        <Text
          fontSize={!isMobile ? "4rem" : "2rem"}
          color="black"
          fontWeight="100"
          textAlign="left"
        >
          We Talk On Camera
        </Text>
        <Text
          fontSize={!isMobile ? "4rem" : "2rem"}
          fontWeight="700"
          color="#FE5708"
          mt="-1rem"
          textAlign="left"
        >
          So You Don&apos;t Have To!
        </Text>
        <Text
          fontSize={!isMobile ? "1rem" : "1rem"}
          color="black"
          textAlign="left"
        >
          Let us handle the spotlight for you.
        </Text>
        <Button
          mt={isMobile ? "0.75rem" : "1.5rem"}
          backgroundColor={"#FE5708"}
          width={!isMobile ? "10rem" : "6rem"}
          height={!isMobile ? "3rem" : "2rem"}
          color="white"
          fontSize={!isMobile ? "1rem" : "1rem"}
        >
          Book Now
        </Button>
      </VStack>
    </Box>
  );
};

export default LandingCTA;
