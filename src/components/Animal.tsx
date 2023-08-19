import '../style/animal.scss'
import { useNavigate, useParams } from "react-router-dom"
// import { useAnimalContext } from './AnimalContext';
import { IAnimal } from '../models/IAnimal';
import { useState } from 'react';
import { AnimalDetails } from './AnimalDetails';


export const Animal = () => {
  const storedAnimals = sessionStorage.getItem('animals') || '[]';
  console.log(storedAnimals);
  const [animals, setAnimals] = useState<IAnimal[]>(JSON.parse(storedAnimals));


  const { id } = useParams<{ id: string }>();
  const idToNumber: number = Number(id);

  const findAnimal = animals.find((animal) => animal.id === idToNumber)
  const navigate = useNavigate();

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

  }

  const setFedTime = (animal: IAnimal, animalsArray: IAnimal[]) => {
    const date = new Date();
    console.log(date)

    const newDate = new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString();
    console.log('click to feed ' + animal.name + ' ' + newDate);

    const updatedAnimals = animalsArray.map((a) =>
      a.id === animal.id ? { ...a, lastFed: newDate } : a
    );
    return updatedAnimals;
  }

  return <>
    {findAnimal ? (
      <AnimalDetails
        animal={findAnimal}
        handleBack={handleBack}
        clickToFeed={clickToFeed}
      />
    ) : (
      <p>Laddar sidan...</p>
    )}
  </>
}

