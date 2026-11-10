import { useState } from "react";

// Uses the highest quality thumbnail available, falls back to a guaranteed one.
export default function YouTubeThumb({ id, alt = "", className = "" }) {
  const [src, setSrc] = useState(`https://img.youtube.com/vi/${id}/maxresdefault.jpg`);
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={(e) => {
        // maxres returns a 120px-wide placeholder when it doesn't exist.
        if (e.currentTarget.naturalWidth <= 120) setSrc(`https://img.youtube.com/vi/${id}/hqdefault.jpg`);
      }}
      onError={() => setSrc(`https://img.youtube.com/vi/${id}/hqdefault.jpg`)}
    />
  );
}
