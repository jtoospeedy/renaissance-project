'use client';

import { useEffect, useRef, useState } from "react";

export default function TrailerVideo() {
  const videoRef = useRef(null);
  const [showPoster, setShowPoster] = useState(true);

  const handlePlay = () => {
    setShowPoster(false);
    videoRef.current?.play().catch(() => {});
  };

  // Persist playback position
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const KEY = "rp_trailer_pos";

    const onLoaded = () => {
      // Safe window/localStorage guard for Next.js hydration
      if (typeof window !== "undefined") {
        const t = parseFloat(localStorage.getItem(KEY) || "0");
        if (!isNaN(t) && t > 0 && video.duration && t < video.duration - 1) {
          video.currentTime = t;
        }
      }
    };
    
    const onTimeUpdate = () => {
      if (typeof window !== "undefined") {
        localStorage.setItem(KEY, video.currentTime.toString());
      }
    };
    
    const onPlay = () => setShowPoster(false);
    const onPause = () => { if (video.currentTime === 0) setShowPoster(true); };

    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    
    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  return (
    <div className="trailer-frame">
      <div className="trailer-video-wrap">
        <video ref={videoRef} controls preload="metadata" playsInline poster="">
          <source src="/0505(1).mp4" type="video/mp4" />
        </video>
        <div
          className={`trailer-poster${showPoster ? "" : " is-hidden"}`}
          onClick={handlePlay}
        >
          <div>
            <div className="play-btn"><div className="triangle" /></div>
            <div className="trailer-poster-cap">{"Watch Video"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}