import { useNavigate } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
// import { useEffect } from "react";
import { calculateHoursSinceFed } from "../functions/timeCalculation";

import '../style/animal.scss'

interface IAnimalProps {
  animals: IAnimal[];
  // setAnimals: React.Dispatch<React.SetStateAction<IAnimal[]>>;
}
// export const AnimalCard = ({ animals, hoursSinceFed }: IAnimalProps) => {
export const AnimalCard = ({ animals }: IAnimalProps) => {

  const navigate = useNavigate();

  // useEffect(() => {
  //   const updatedAnimals = animals.map((animal) => {
  //     if (animal){
  //       const fedTimeAsDateObject = new Date(animal.lastFed);
  //       fedTimeAsDateObject.setHours(fedTimeAsDateObject.getHours() - 2)
  //       const hoursSinceFed = calculateHoursSinceFed(new Date(fedTimeAsDateObject));
        
  //       if (hoursSinceFed < 3) {
  //        console.log(animal.name + ' css-class isFed')
  //       }
  //       else if (hoursSinceFed >= 3 && hoursSinceFed < 4) {
  //         console.log(animal.name + ' css-class gettingHungry')
  //       }
  //       else if (hoursSinceFed >= 4) {
  //         console.log(animal.name + ' css-class isHungry');
  //         return { ...animal, isFed: false };
  //       } 
  //     }
  //     return animal;
  //   })
  //   setAnimals(updatedAnimals);
  //   sessionStorage.setItem('animals', JSON.stringify(updatedAnimals));
  // },[])

  const handleClick = (animal: IAnimal) => {
    console.log('click on: ', animal.id);
    navigate('/animal/'+ animal.id)
  }

  const handleKeyEnter = (e: React.KeyboardEvent, animal:IAnimal) => {
    if (e.key === 'Enter') {
      console.log('Enter pressed on: ', animal.name)
      navigate('/animal/'+ animal.id)
    }
  }

  function getFeedingStatusClass(hoursSinceFed: number) {
    if (hoursSinceFed < 3) {
      return 'isFed';
    } else if (hoursSinceFed >= 3 && hoursSinceFed < 4) {
      return 'gettingHungry';
    } else {
      return 'isHungry';
    }
  }

  function getFeedingStatusText(hoursSinceFed: number) {
    if (hoursSinceFed < 3) {
      return 'har fått mat.';
    } else if (hoursSinceFed >= 3 && hoursSinceFed < 4) {
      return 'börjar bli hungrig.';
    } else {
      return 'behöver bli matad!';
    }
  }

  const html = animals.map((animal) => {
    const fedTimeAsDateObject = new Date(animal.lastFed);
    fedTimeAsDateObject.setHours(fedTimeAsDateObject.getHours() - 2)
    const hoursSinceFed = calculateHoursSinceFed(new Date(fedTimeAsDateObject));
    const feedingStatusClass = getFeedingStatusClass(hoursSinceFed);
    const feedingStatusText = getFeedingStatusText(hoursSinceFed)
    return (
      <div 
      key={animal.id} 
      className={`animal-card-container ${feedingStatusClass}`} 
      role='button'
      onClick={() => handleClick(animal)}
      onKeyDown={(e) => handleKeyEnter(e, animal)}
      tabIndex={0}>
      <span className='animal-name'>{animal.name}</span>
      <div className='animal-isFed-status'>
        <span className='animal-isFed-status span'>{`${feedingStatusText}`}</span>
      </div>
      <div className='animal-image-container'>
        <img
          src={animal.imageUrl}
          alt={animal.name}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = '/img_not_found.png';
            //create global variabel?
          }}
        />
      </div>
      <p className='animal-short-desc'>{animal.shortDescription}</p>
    </div>
    )
  });

  return <>
 <section className='animal-cards-wrapper'>
     {html}
     </section>
  </>
}

//   const html = animals.map((animal) => (
    
//     <div 
//       key={animal.id} 
//       className={'animal-card-container' + (animal.isFed ? ' isFed' : ' isHungry')} 
//       // className={'animal-card-container' + (animal.isFed ? ' isFed' : (hoursSinceFed >= 4 ? ' isHungry' : ' gettingHungry'))} 
//       role='button'
//       onClick={() => handleClick(animal)}
//       onKeyDown={(e) => handleKeyEnter(e, animal)}
//       tabIndex={0}>
//       <span className='animal-name'>{animal.name}</span>
//       <div className='animal-isFed-status'>
//         <span className='animal-isFed-status span'>{animal.isFed ? ' har fått mat.' : ' behöver bli matad!'}</span>
//       </div>
//       <div className='animal-image-container'>
//         <img
//           src={animal.imageUrl}
//           alt={animal.name}
//           onError={({ currentTarget }) => {
//             currentTarget.onerror = null;
//             currentTarget.src = '/img_not_found.png';
//             //create global variabel?
//           }}
//         />
//       </div>
//       <p className='animal-short-desc'>{animal.shortDescription}</p>
//     </div>
//   ))

//   return <>
//     <section className='animal-cards-wrapper'>
//     {html}
//     </section>
//   </>
// }

// //syfte: djurkort info