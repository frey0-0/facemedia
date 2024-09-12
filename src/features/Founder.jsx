import { VStack, HStack, Image, Text } from "@chakra-ui/react";
import useMediaQueries from "../hooks/useMediaQuery";
import image from "../assets/founder.png";

const Founder = () => {
  const { isMobile } = useMediaQueries();

  return (
    <VStack backgroundColor="#F1EDE6" w="100%">
      <Text fontSize="3xl" textAlign="center" mt="2rem" fontWeight="700">
        Meet The Founder
      </Text>
      {isMobile ? (
        <VStack p="1rem" spacing={4}>
          <Text fontSize="sm" color="#2D2D2D" textAlign="justify">
            I&lsquo;m Aryan Bhalla, and I&lsquo;ve been creating and editing
            YouTube videos since 2017. It&lsquo;s something I love, and
            I&lsquo;ve worked hard to get better at filming, editing, and
            telling stories through video.
          </Text>
          <Text fontSize="sm" color="#2D2D2D" textAlign="justify">
            While studying Electrical Engineering at IIT Roorkee, I had an idea:
            why not use my on-camera speaking skills to help brands? That&apos;s
            how FaceMedia was born. With the experience and knowledge I&apos;ve
            gained over the years, I&apos;m here to help brands create great
            content, so they don&apos;t have to worry about being on camera
            themselves.
          </Text>
          <Image src={image} alt="FounderImage" borderRadius={15} />
          <Text fontSize="2xl" fontWeight="700" color="#FE5708">
            Aryan Bhalla
          </Text>
          <Text fontSize="2xs" color="#2D2D2D" mt="-1.25rem">
            Founder & CEO , FaceMedia
          </Text>
        </VStack>
      ) : (
        <HStack
          px="4rem"
          spacing="4rem"
          alignItems="stretch"
          height="24rem"
          mt="1rem"
          mb="2rem"
        >
          <VStack spacing="1rem" height="full" w="70%">
            <Text fontSize="xl" color="#2D2D2D" textAlign="justify">
              I&lsquo;m Aryan Bhalla, and I&lsquo;ve been creating and editing
              YouTube videos since 2017. It&lsquo;s something I love, and
              I&lsquo;ve worked hard to get better at filming, editing, and
              telling stories through video.
            </Text>
            <Text fontSize="xl" color="#2D2D2D" textAlign="justify">
              While studying Electrical Engineering at IIT Roorkee, I had an
              idea: why not use my on-camera speaking skills to help brands?
              That&apos;s how FaceMedia was born. With the experience and
              knowledge I&apos;ve gained over the years, I&apos;m here to help
              brands create great content, so they don&apos;t have to worry
              about being on camera themselves
            </Text>
            <VStack align="end" spacing="0.5rem" width="56rem" mt="4rem">
              <Text
                fontSize="3xl"
                fontWeight="700"
                textAlign="right"
                color="#FE5708"
              >
                Aryan Bhalla
              </Text>
              <Text
                fontSize="xs"
                textAlign="right"
                color="#2D2D2D"
                mt="-0.75rem"
              >
                Founder & CEO , FaceMedia
              </Text>
            </VStack>
          </VStack>
          <Image
            src={image}
            alt="FounderImage"
            height="25rem"
            width="20rem"
            borderRadius={15}
            />
        </HStack>
      )}
    </VStack>
  );
};

export default Founder;
