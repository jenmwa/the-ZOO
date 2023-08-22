
export const calculateHoursSinceFed = (lastFedTime: Date) => {
  const currentTime = new Date();
  const timeDifference = currentTime.getTime() - lastFedTime.getTime();
  return timeDifference / (60 * 60 * 1000);
}