import { useEffect, useState } from "react"
import { IAnimal } from "../models/IAnimal"
import '../style/animal.scss'
import { AnimalCard } from "./AnimalCard"
import { getAnimalAPI } from "../service/AnimalService"
import { Loader } from "./Loader"
// import { useLoaderData } from "react-router-dom"
// import { IAnimalLoader } from "../loaders/animalsLoader"

export const Animals = () => {

  // const { animalList } = useLoaderData() as IAnimalLoader
  // console.log(animalList);

  const storedAnimals = sessionStorage.getItem('animals') || '[]';
  const [animals, setAnimals] = useState<IAnimal[]>(JSON.parse(storedAnimals));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAnimalsFromStorage = sessionStorage.getItem('animals');
    if (getAnimalsFromStorage) {
      const getAnimalsFromStorageParsed: IAnimal[] = JSON.parse(getAnimalsFromStorage);
      setAnimals(getAnimalsFromStorageParsed);
      setIsLoading(false)
    }
  }, [])

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
      <Loader></Loader>
    ) : (
      <>
        <h1>Våra Djur</h1>
        <AnimalCard animals={animals} ></AnimalCard>
      </>
    )}
  </>
}
