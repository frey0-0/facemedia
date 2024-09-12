import useMediaQueries from "../hooks/useMediaQuery";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";

const ShortVideo = ({ fileName }) => {
  const { isTablet, isMobile } = useMediaQueries();
  console.log("isTablet", isTablet);
  console.log("isMobile", isMobile);
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
    <Box w="100%" h="auto">
      {videoUrl && (
        <video
          src={videoUrl}
          autoPlay
          muted
          loop
          controls
          style={{ width: "100%", height: "auto" }}
        />
      )}
    </Box>
  );
};

ShortVideo.propTypes = {
  fileName: PropTypes.string.isRequired,
};

export default ShortVideo;
