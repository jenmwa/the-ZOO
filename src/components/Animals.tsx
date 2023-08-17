import { useEffect, useState } from "react"
import { IAnimal } from "../models/IAnimal"
import axios from "axios"
import '../style/animal.scss'
import { AnimalCard } from "./AnimalCard"
import { useAnimalContext } from "./AnimalContext"

export const Animals = () => {

  const { animals, setAnimals } = useAnimalContext();
  const [isLoading, setIsLoading] = useState(true);

  //flytta till servicefil 
  //Hämta på knapptrycken "VÅRA DJUR"? 
  // ha kvar hämta sessionStorage här men flytta api till parent
  useEffect(() => {
    const getAnimalsFromStorage = sessionStorage.getItem('animals');
    if (getAnimalsFromStorage) {
      const getAnimalsFromStorageParsed: IAnimal[] = JSON.parse(getAnimalsFromStorage);
      setAnimals(getAnimalsFromStorageParsed);
      setIsLoading(false)
    }
  }, [])
  //få bort denna dependency array med villkor

  //flytta till servicefil 
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://animals.azurewebsites.net/api/animals')
        console.log(response.data)
        sessionStorage.setItem('animals', JSON.stringify(response.data));
        setAnimals(response.data)
        setIsLoading(false)
      } catch (error) {
        console.error('error', error);
        setIsLoading(false);
      }
    }
    if (animals.length === 0) {
      getData();
    }
  })

  // const html = animals.map((animal) => (
  //   <div key={animal.id}>
  //     <p>{animal.name}</p>
  //     <div className='image-container'>
  //       <img
  //         src={animal.imageUrl}
  //         alt={animal.name}
  //         onError={({ currentTarget }) => {
  //           currentTarget.onerror = null;
  //           currentTarget.src = 'public/img_not_found.png';
  //         }}
  //       />
  //     </div>
  //   </div>
  // ))

  return <>
    <p>Render all AnimalCard in Animals</p>
    {isLoading ? (
      <p>Laddar sidan...</p>
    ) : (
      <AnimalCard animals={animals}></AnimalCard>
    )}
    {/* <>
      {html}
    </> */}

  </>
}

//syfte: rendera ut lista samlingssida djuren!  Hämta data ska ske på knapptrycket VÅRA DJUR