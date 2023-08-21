import { useEffect, useState } from "react";

export const LastFedStatus = () => {

  const [isFed3HoursAgo, setIsFed3HoursAgo] = useState(false);
  const fedTime = '2023-08-21T05:38:00.010Z';
  //tänk den här tiden +2h för att kolla status

  const checkTimeDifference = (time: string) => {
    const fedTimeAsDateObject = new Date(time);
    console.log(fedTimeAsDateObject)
    const currentTime = new Date();
    console.log(currentTime)
    const timeDifference = currentTime.getTime() - fedTimeAsDateObject.getTime();
    const hoursSinceFed = timeDifference / (60 * 60 * 1000);

    if (hoursSinceFed >= 3) {
      console.log('3h since Food, enable MATA-btn, add CSS- gettingHUNGRY');
      setIsFed3HoursAgo(isFed3HoursAgo)
    }
    if (hoursSinceFed >= 4) {
      console.log('4h since food, add CSS-class isHUNGRY');
      setIsFed3HoursAgo(isFed3HoursAgo)
    }

  }

  useEffect(() => {
    checkTimeDifference(fedTime);
  },[])
  console.log(isFed3HoursAgo);

  return null;
    // //göra om mitt string-datum till vanligt datum
    // const fedTimeAsDateObject = new Date(fedTime);

    // console.log(fedTimeAsDateObject)
    // //hämta i-detta-nu-datum i samma format som ovan
    // const currentTime = new Date();
    // // currentTime.setHours(currentTime.getHours() + 2); 
    // console.log(currentTime)
    // //samma format, räkna ut skillnaden
    // const timeDifference = currentTime.getTime() - fedTimeAsDateObject.getTime();
    // console.log(timeDifference);
    // //villkorlet, är det inom 3h (sant) eller inte (falskt)
    // //https://www.tutorialspoint.com/How-to-add-2-hours-to-a-JavaScript-Date-object
    // const isWithin3Hours = timeDifference <= 3 * 60 * 60 * 1000;

    // setIsFed3HoursAgo(isWithin3Hours)

    
  //   console.log(isFed3HoursAgo ? 'isFedWithin3Hour: sant' : ' isFedWithin3Hour: falskt')
   
  // },[fedTime, isFed3HoursAgo]
  // console.log(isFed3HoursAgo);
  // console.log(isFed3HoursAgo ? 'sant' : 'falskt')

  // // Return JSX here if needed
  // return null;
// }

// if (hoursSinceFed >= 3) {
//   console.log('3h since Food, enable MATA-btn');
// }
// if (hoursSinceFed >= 4) {
//   console.log('4h since food, add CSS-class isHUNGRY');
}