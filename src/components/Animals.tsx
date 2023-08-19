import { useEffect, useState } from "react"
import { IAnimal } from "../models/IAnimal"
import '../style/animal.scss'
import { AnimalCard } from "./AnimalCard"
import { getAnimalAPI } from "../service/AnimalService"
// import { useAnimalContext } from "./AnimalContext"

export const Animals = () => {

  // const { animals, setAnimals } = useAnimalContext();
  const storedAnimals = sessionStorage.getItem('animals') || '[]';
  console.log(storedAnimals);
  const [animals, setAnimals] = useState<IAnimal[]>(JSON.parse(storedAnimals));
  const [isLoading, setIsLoading] = useState(true);

  //flytta till servicefil 
  useEffect(() => {
    const getAnimalsFromStorage = sessionStorage.getItem('animals');
    if (getAnimalsFromStorage) {
      const getAnimalsFromStorageParsed: IAnimal[] = JSON.parse(getAnimalsFromStorage);
      setAnimals(getAnimalsFromStorageParsed);
      setIsLoading(false)
    }
  }, [])
  //få bort denna dependency array med villkor

useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAnimalAPI();
        if (response) {
          sessionStorage.setItem('animals', JSON.stringify(response));
          setAnimals(response)
          setIsLoading(false)
        } else {
          setIsLoading(false)
        }
      } catch (error) {
        console.error('error', error);
        setIsLoading(false);
      }
    }
    if (animals.length === 0) {
      getData();
    }
  })

  return <>
    {isLoading ? (
      <p>Laddar sidan...</p>
    ) : (
      <AnimalCard animals={animals}></AnimalCard>
    )}
  </>
}

//syfte: rendera ut lista samlingssida djuren!  Hämta data ska ske på knapptrycket VÅRA DJUR