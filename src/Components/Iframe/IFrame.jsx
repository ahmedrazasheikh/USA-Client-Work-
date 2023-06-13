import React from "react";

const VideoComponent = () => {
  return (
    // style={{ backgroundImage: "url(https://meetcody.ai/wp-content/uploads/2023/05/home-section_1-bg.png?id=261)", backgroundSize: "cover", backgroundPosition: "center" //}}
    <div className="w-9/10 h-auto mx-auto rounded-lg bg-gray-900    " >
      <div style={{ paddingBottom: "50.25%" }} className="relative">
        <iframe
          src="https://player.vimeo.com/video/795360336?autoplay=1&muted=1"
          title="Vimeo Video"
          className="absolute top-0 left-0 w-full h-5/6 rounded-lg pt-10"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoComponent;
