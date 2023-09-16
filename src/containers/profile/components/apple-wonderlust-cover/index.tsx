/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";

export const AppleWonderlustCover: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black">
      <video
        autoPlay
        loop
        muted
        preload="auto"
        playsInline
        src="/images/apple-wonderlust.mp4"
        className="h-[64%]"
        poster="/images/apple-wonderlust.jpeg"
      />
    </div>
  );
};
