import { Grid, Text, VStack, Box } from "@chakra-ui/react";
import ShortVideo from "../components/ShortVideo";
import useMediaQueries from "../hooks/useMediaQuery";

const ShortFormContent = () => {
  const { isMobile } = useMediaQueries();
  const fileNames = ["basic.mp4", "basic.mp4", "basic.mp4", "basic.mp4"];

  return (
    <VStack backgroundColor="white" w="100%" h="auto" spacing={4} py="3rem">
      <Text
        fontSize={!isMobile ? "3rem" : "2rem"}
        textAlign="center"
        fontWeight="700"
      >
        Short Form Content
      </Text>
      <Box>
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={2}
          w="100%"
          height="auto"
          p="2rem"
          justifyContent="space-between"
          alignItems="center"
        >
          {fileNames.map((file, index) => (
            <ShortVideo key={index} fileName={file} />
          ))}
        </Grid>
      </Box>
    </VStack>
  );
};

export default ShortFormContent;
