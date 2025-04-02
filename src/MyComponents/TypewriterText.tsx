import { useState, useEffect } from "react";
import { motion, Variants } from "motion/react";
import { useInView } from "react-intersection-observer";

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

const TypewriterText = ({ text, className, speed = 50 }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]); // Append next letter
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout); // Cleanup timeout on re-render
    }
  }, [inView, currentIndex, text, speed]);

  const cursorVariants: Variants = {
    blinking: {
      opacity: [0, 1, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
      },
    },
  };

  return (
    <div ref={ref} className="relative">
      <p className={className}>
        {displayText}
        <motion.span
          variants={cursorVariants}
          animate="blinking"
          className="inline-block w-0.5 h-5 bg-white ml-0.5"
        />
      </p>
    </div>
  );
};

export default TypewriterText;