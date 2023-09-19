export const calculateTimeLeft = () => {
    // Set the target date and time in Malaysia timezone (UTC+8)
    const targetDate = new Date('2023-09-16T18:00:00+08:00');
    const currentDate = new Date();
  
    const difference = targetDate - currentDate;
  
    // Ensure the countdown doesn't go negative
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
  
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };
  