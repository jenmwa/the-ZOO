import { useEffect, useState } from "react"
import { IAnimal } from "../models/IAnimal"
import axios from "axios"
import '../style/animal.scss'
import { AnimalCard } from "./AnimalCard"

export const Animals = () => {

  const [animals, setAnimals] = useState<IAnimal[]>([])

  //flytta till servicefil båda
  useEffect(() => {
    const getAnimalsFromStorage = sessionStorage.getItem('animals');
    if (getAnimalsFromStorage) {
      const getAnimalsFromStorageParsed: IAnimal[] = JSON.parse(getAnimalsFromStorage);
      setAnimals(getAnimalsFromStorageParsed)
    }
  }, [])


  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://animals.azurewebsites.net/api/animals')
        console.log(response.data)
        sessionStorage.setItem('animals', JSON.stringify(response.data))
      } catch (error) {
        console.error('error', error)
      }
    }
    if(animals.length === 0) {
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
    <AnimalCard animals={animals}></AnimalCard>
    {/* <>
      {html}
    </> */}

  </>
}