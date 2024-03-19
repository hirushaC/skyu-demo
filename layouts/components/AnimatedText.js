import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import DOMPurify from "dompurify";

const AnimatedText = ({ text }) => {
  const [showText, setShowText] = useState(false);
  const [animatedText, setAnimatedText] = useState(getRandomText(text));

  const props = useSpring({
    opacity: showText ? 1 : 0,
    transform: showText ? "translateY(0)" : "translateY(-20px)",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedText(getRandomText(text));
      setShowText(true);
      setTimeout(() => {
        setShowText(false);
      }, 2000);
    }, 3000); // Change the interval as needed

    return () => clearInterval(interval);
  }, [text]);

  const sanitizedText = DOMPurify.sanitize(showText ? text : animatedText);

  return (
    <animated.div style={props}>
      <div dangerouslySetInnerHTML={{ __html: sanitizedText }} />
    </animated.div>
  );
};

const getRandomText = (text) => {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomText = "";
  for (let i = 0; i < text.length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomText += characters[randomIndex];
  }
  return randomText;
};

export default AnimatedText;
