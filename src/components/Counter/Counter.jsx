import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const AnimatedCounter = ({ targetNumber, duration = 2 }) => {
  const [count, setCount] = useState(0); // Start from 0
  const ref = useRef(null); // Reference for the element
  const isInView = useInView(ref, { once: true }); // Trigger once when in view

  useEffect(() => {
    if (isInView) {
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = (currentTime - startTime) / 1000; // Elapsed time in seconds
        const progress = Math.min(elapsed / duration, 1); // Progress (0 to 1)
        const easedProgress = 1 - Math.pow(1 - progress, 4); // Ease-out effect

        const currentValue = Math.floor(1 + easedProgress * (targetNumber - 1));
        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate); // Continue animation
        }
      };

      requestAnimationFrame(animate); // Start animation
    }
  }, [isInView, targetNumber, duration]);

  return <span ref={ref}>{count}</span>;
};

export default AnimatedCounter;
