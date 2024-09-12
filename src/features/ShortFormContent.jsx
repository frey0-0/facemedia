import { Grid, Text, VStack } from "@chakra-ui/react";

const ShortFormContent = () => {
  const shortUrls = [
    "basic.mp4",
    "basic.mp4",
    "basic.mp4",
    "basic.mp4",
  ];

  return (
    <VStack backgroundColor="white" w="100%" h="auto">
      <Text fontSize="3rem" textAlign="center" mt="3rem" fontWeight="700">
        Short Form Content
      </Text>
      <Grid
        templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
        gap={10}
        w="100%"
        p={4}
      >
        {shortUrls.map((url, index) => (
          <ShortFormContent key={index} fileName={url} />
        ))}
      </Grid>
    </VStack>
  )
}

export default ShortFormContent;