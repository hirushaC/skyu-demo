import { useEffect, useRef } from "react";

function Video({ title, width, height = "auto", src, ...rest }) {
  const vidRef = useRef(null);

  useEffect(() => {
    if (vidRef && vidRef.current) {
      vidRef.current.play()
    }
  }, [vidRef])

  return (
    <video
      className="overflow-hidden rounded-xl"
      width={width}
      height={height}
      ref={ vidRef }
      autoPlay
      loop
      muted
      {...rest}
    >
      <source
        src={src}
        type="video/mp4"
      />
      {title}
    </video>
  );
}

export default Video;
