import { Box, AspectRatio } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useMediaQueries from "../hooks/useMediaQuery";

const ShortVideo = ({ fileName }) => {
  const { isTablet, isMobile } = useMediaQueries();
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const loadVideo = async () => {
      const video = await fetch(fileName);
      const videoBlob = await video.blob();
      const videoUrl = URL.createObjectURL(videoBlob);
      setVideoUrl(videoUrl);
    };

    loadVideo();
  }, [fileName]);

  return (
    <Box w={isMobile ? "80vw" : isTablet ? "40vw" : "20vw"} h="auto">
      {videoUrl && (
        <AspectRatio ratio={9 / 16}>
          <video
            src={videoUrl}
            autoPlay
            muted
            loop
            controls
            style={{ width: "100%", height: "100%", borderRadius: "1.25rem" }}
          />
        </AspectRatio>
      )}
    </Box>
  );
};

ShortVideo.propTypes = {
  fileName: PropTypes.string.isRequired,
};

export default ShortVideo;