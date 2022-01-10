import { useEffect, useState } from 'react';

const UseWidth = initialWidth => {
  const [width, setWidth] = useState(initialWidth);
  const resize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', resize);
    initialWidth ? setWidth(initialWidth) : resize();
    return () => window.removeEventListener('resize', resize);
  }, [initialWidth, width]);

  return { width, setWidth };
};

export default UseWidth;
