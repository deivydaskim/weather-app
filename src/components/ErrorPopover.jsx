import { useRef, useEffect } from 'react';

const ErrorPopover = ({ children, time = 2000, clearError }) => {
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(clearError, time);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [time, clearError]);

  return (
    <div className="body-1 absolute top-11 text-gray-900 bg-red-100 rounded-lg px-4 py-2 w-full z-20">
      {children}
    </div>
  );
};

export default ErrorPopover;
