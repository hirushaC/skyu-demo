import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

const DynamicTextAnimation = ({text}) => {
    const [animatedText, setAnimatedText] = useState([]);
  
    useEffect(() => {
      const targetText = text.split('');
      // Initialize an array to keep track of the current animated text
      let currentText = Array(targetText.length).fill(' ');
      let timeouts = [];
  
      targetText.forEach((char, index) => {
        const timeout = setTimeout(() => {
          currentText[index] = char;
          setAnimatedText([...currentText]);
        }, 200 * index);
  
        timeouts.push(timeout);
      });
  
      return () => {
        timeouts.forEach(clearTimeout);
      };
    }, [text]);

  return (
    <div style={{ display: 'inline-block', whiteSpace: 'pre' }}>
      {animatedText.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.2 * index }}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  )
}

export default DynamicTextAnimation