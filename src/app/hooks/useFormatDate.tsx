import { useEffect, useState } from 'react';

const useFormatDate = (timestamp: number) => {
  const [formattedDate, setFormattedDate] = useState<string | null>(null);

  useEffect(() => {
    const formatTimestamp = (timestamp: number) => {
      const date = new Date(timestamp);
      const formatted = date.toLocaleDateString('en-GB'); // Adjust the locale as needed
      return formatted;
    };

    if (timestamp) {
      const formatted = formatTimestamp(timestamp);
      setFormattedDate(formatted);
    }
  }, [timestamp]);

  return formattedDate;
};

export default useFormatDate;
