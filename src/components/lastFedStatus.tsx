
// import { useEffect } from "react";
// import { IAnimal } from "../models/IAnimal";

// interface IAnimalProps {
//   animal: IAnimal;
//   updatedAnimalStatus: (updatedAnimal: IAnimal) => void;
//   hoursSinceFed?: number;
//   // setHoursSinceFed: React.Dispatch<React.SetStateAction<number>>;
// }
// // export const LastFedStatus = ({ animal, updatedAnimalStatus, setHoursSinceFed }: IAnimalProps) => {
// export const LastFedStatus = ({ animal, updatedAnimalStatus }: IAnimalProps) => {
//   // const [isFed3HoursAgo, setIsFed3HoursAgo] = useState(false);

//   const checkTimeDifference = () => {
//     const fedTimeAsDateObject = new Date(animal.lastFed);
//     fedTimeAsDateObject.setHours(fedTimeAsDateObject.getHours() - 2)
//     const currentTime = new Date();
//     const timeDifference = currentTime.getTime() - fedTimeAsDateObject.getTime();
//     const hoursSinceFed = timeDifference / (60 * 60 * 1000);

//     let updatedAnimal = { ...animal };

//     if (hoursSinceFed < 3) {
//       console.log(animal.name + ' is fed and happy! ' + fedTimeAsDateObject);
//       // setHoursSinceFed(2);
//     }
//     else if (hoursSinceFed >= 3 && hoursSinceFed <4) {
//       console.log(animal.name + ' is hungry, 3h since Food, enable MATA-btn, remove CSS- isFed');
//       // updatedAnimal = { ...updatedAnimal, isFed: false };
//       // console.log(animal.name + 'isFed' + animal.isFed)
//       updatedAnimalStatus(updatedAnimal)
//       // setHoursSinceFed(3)
//       // setIsFed3HoursAgo(isFed3HoursAgo)

//     }
//     else if (hoursSinceFed >= 4) {
//       console.log(animal.name + ' is starving! 4h since food, add CSS-class isHUNGRY');
//       updatedAnimal = { ...updatedAnimal, isFed: false };
//       console.log(animal.name + 'isFed' + animal.isFed)
//       updatedAnimalStatus(updatedAnimal)
//       // setHoursSinceFed(4)
//       // setIsFed3HoursAgo(isFed3HoursAgo)
//     }
//   }

//   useEffect(() => {
//     checkTimeDifference();
//   }, [])

//   return (null);
// }