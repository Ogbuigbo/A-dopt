'use client';

import React, { useEffect, useRef, useState } from 'react';

function SnakeLine() {
  const lineRef = useRef<HTMLDivElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const line = lineRef.current;
    if (line) {
      // Trigger the animation after the component mounts
      setTimeout(() => {
        setIsLoaded(true); // Set animation to complete
      }, 0); // Start the animation immediately
    }
  }, []);

  return (
    <div
      ref={lineRef}
      className={`snake-line bg-[#fff] h-[4px] mx-auto`}
      style={{
        width: isLoaded ? '50%' : '0%', // Start at 0%, animate to 50%
        transition: 'width 2s ease-in-out', // Smooth animation
      }}
    ></div>
  );
}

export default SnakeLine;
