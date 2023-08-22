import '../style/animal.scss'
import { useNavigate, useParams } from "react-router-dom"
import { IAnimal } from '../models/IAnimal';
import { AnimalDetails } from './AnimalDetails';
import { useEffect, useState } from 'react';
import { calculateHoursSinceFed } from '../functions/timeCalculation';

export const Animal = () => {
  const [disabled, setDisabled] = useState(false);
  const storedAnimals = sessionStorage.getItem('animals') || '[]';
  console.log(storedAnimals);
  const [animals, setAnimals] = useState<IAnimal[]>(JSON.parse(storedAnimals));

  const { id } = useParams<{ id: string }>();
  const idToNumber: number = Number(id);
  const findAnimal = animals.find((animal) => animal.id === idToNumber)
  const navigate = useNavigate();

  useEffect(() => {
    if (findAnimal){
      const fedTimeAsDateObject = new Date(findAnimal.lastFed);
      fedTimeAsDateObject.setHours(fedTimeAsDateObject.getHours() - 2)
      const hoursSinceFed = calculateHoursSinceFed(new Date(fedTimeAsDateObject));
      // const fedTimeAsDateObject = new Date(findAnimal.lastFed);
      // fedTimeAsDateObject.setHours(fedTimeAsDateObject.getHours() - 2)
      // console.log('testing:', fedTimeAsDateObject)
      // const currentTime = new Date();
      // console.log('currentTime', currentTime)
      // const timeDifference = currentTime.getTime() - fedTimeAsDateObject.getTime();
      // const hoursSinceFed = timeDifference / (60 * 60 * 1000);
      
      if(hoursSinceFed < 3) {
        setDisabled(true)
      }
      else if (hoursSinceFed >= 3 && hoursSinceFed < 4) {
        setDisabled(false)
      }

    }
   
  },[])

  const handleBack = () => {
    navigate('/animals');
  }

  const clickToFeed = (animal: IAnimal) => {
    const updatedAnimals = animals.map((a) =>
      a.id === animal.id ? { ...a, isFed: true } : a
    );

    const updatedAnimalsWithFedTime = setFedTime(animal, updatedAnimals);

    setAnimals(updatedAnimalsWithFedTime);
    sessionStorage.setItem('animals', JSON.stringify(updatedAnimalsWithFedTime));
    console.log(animals);
    setDisabled(true)
  }

  const setFedTime = (animal: IAnimal, animalsArray: IAnimal[]) => {
    const newDate = new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString();
    // const newDate = new Date().toISOString();
    console.log('click to feed ' + animal.name + ' ' + newDate);
    console.log(new Date().toISOString());
    const updatedAnimals = animalsArray.map((a) =>
      a.id === animal.id ? { ...a, lastFed: newDate } : a
    );
    return updatedAnimals;
  }

  return <>
    {findAnimal ? (
      <>
        <AnimalDetails
          animal={findAnimal}
          handleBack={handleBack}
          clickToFeed={clickToFeed}
          disabled={disabled}
        />

        {/* <LastFedStatus key={findAnimal.id} animal={findAnimal} updatedAnimalStatus={updateAnimalStatus}/> */}
      </>
    ) : (
      <p>Laddar sidan...</p>
    )}

  </>
}

