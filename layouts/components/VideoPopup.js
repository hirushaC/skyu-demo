import { useEffect, useRef, useState } from "react";
import { LiteYoutubeEmbed } from "../../node_modules/react-lite-yt-embed/dist/index";
import ImageFallback from "./ImageFallback";
import Cards from "./Cards";

function VideoPopup({ id, thumbnail, width = 700, height = 394 }) {
  const [brightness, setBrightness] = useState(50);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);
  const circleRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const image = imageRef.current;
      const rect = image.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;

      const distance = Math.sqrt((percentX - 50) ** 2 + (percentY - 50) ** 2);

      const brightnessValue = 50 + (distance);
      setBrightness(brightnessValue);

      setCursorPosition({ x, y });
    };

    const handleMouseOut = () => {
      setBrightness(100);
    };

    const image = imageRef.current;
    if (image) {
      image.addEventListener("mousemove", handleMouseMove);
      image.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      if (image) {
        image.removeEventListener("mousemove", handleMouseMove);
        image.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, []);

  useEffect(() => {
    const circle = circleRef.current;
    if (circle) {
      circle.style.left = `${cursorPosition.x}px`;
      circle.style.top = `${cursorPosition.y}px`;
      circle.style.filter = `brightness(100%)`;
    }
  }, [cursorPosition]);

  return (
    <div className="animate relative flex overflow-hidden rounded-2xl">
      {showPopup ? (
        <div>
          <LiteYoutubeEmbed id={id} defaultPlay={true} />
        </div>
      ) : (
        <div className="relative inline-block w-full">
          <div
            style={{ filter: `brightness(${brightness}%)` }}
            className="hover:brightness-50"
            ref={imageRef}
          >
            {/* <Cards className="w-full"/> */}
            {/* <ImageFallback
              className="w-full"
              src={thumbnail}
              width={width}
              height={height}
              alt=""
              id={`videoPopup-${id}`}
            /> */}
          </div>
          <div
            className="absolute h-10 w-10 rounded-full bg-black opacity-50"
            ref={circleRef}
          ></div>
        </div>
      )}
    </div>
  );
}

export default VideoPopup;
