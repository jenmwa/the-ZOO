import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";

interface IAnimalProps {
  animal: IAnimal;
  updatedAnimalStatus: (updatedAnimal:IAnimal) => void;
}

export const LastFedStatus = ({animal, updatedAnimalStatus}: IAnimalProps) => {

  const [isFed3HoursAgo, setIsFed3HoursAgo] = useState(false);

  const checkTimeDifference = () => {
    const fedTimeAsDateObject = new Date(animal.lastFed);
    fedTimeAsDateObject.setHours(fedTimeAsDateObject.getHours()-2)
    console.log('fedTimeAsDateObject:', fedTimeAsDateObject)
    const currentTime = new Date();
    console.log('currentTime', currentTime)
    const timeDifference = currentTime.getTime() - fedTimeAsDateObject.getTime();
    const hoursSinceFed = timeDifference / (60 * 60 * 1000);

    if (hoursSinceFed < 3) {
      console.log(animal.name + ' is fed and happy! ' + fedTimeAsDateObject)
    }
    if (hoursSinceFed >= 3) {
      console.log(animal.name + ' is hungry, 3h since Food, enable MATA-btn, remove CSS- isFed');
      const updatedAnimal = { ...animal, isFed: false };
      updatedAnimalStatus(updatedAnimal) 
      setIsFed3HoursAgo(isFed3HoursAgo)

    }
    if (hoursSinceFed >= 4) {
      console.log(animal.name + ' is starving! 4h since food, add CSS-class isHUNGRY');
       const updatedAnimal = { ...animal, isFed: false };
      updatedAnimalStatus(updatedAnimal) 
      setIsFed3HoursAgo(isFed3HoursAgo)
    }
  }

  useEffect(() => {
    checkTimeDifference();
  },[])

  return null;
}