
export const calculateHoursSinceFed = (lastFedTime: Date) => {
  const currentTime = new Date();
  console.log(lastFedTime)
  console.log(currentTime)
  const timeDifference = currentTime.getTime() - lastFedTime.getTime();
  console.log(timeDifference)
  return timeDifference / (60 * 60 * 1000);
}