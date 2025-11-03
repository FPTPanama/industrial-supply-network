import React, { useState, useEffect } from 'react';

const Counter = ({ value, className, startCount }) => {
  const [counter, setCounter] = useState(0);
  const velocity = 20; // Se ajusta la velocidad a 20ms según lo solicitado

  useEffect(() => {
    setCounter(0); // Asegura que el contador inicie correctamente

    const increment = () => {
      setCounter((prev) => {
        if (prev < value) {
          return Math.min(prev + Math.max(1, value / 500), value); 
        }
        return prev;
      });
    };

    if (startCount) {
      const intervalId = setInterval(increment, velocity);
      return () => clearInterval(intervalId);
    }
  }, [startCount, value]);

  const formatValue = (val) => {
    if (val >= 1_000_000) {
      return `${(val / 1_000_000).toFixed(1)}M`;
    } else if (val >= 1_000) {
      return `${(val / 1_000).toFixed(0)}K`;
    }
    return Math.floor(val);
  };

  return <p className={className}>{formatValue(counter)}</p>;
};

export default Counter;
