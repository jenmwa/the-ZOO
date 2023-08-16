import { useEffect, useState } from "react"
import { IAnimal } from "../models/IAnimal"
import axios from "axios"
import '../style/animal.scss'

export const Animals = () => {

  const [animals, setAnimals] = useState<IAnimal[]>([])

  //flytta till servicefil
  //FÖRST CHECKA sessionStorage
  //OM sessionSTorage = true, rendera lista
  //annars hämta API
  //lägg i sessionStorage
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://animals.azurewebsites.net/api/animals')
        console.log(response.data)
        setAnimals(response.data)
        sessionStorage.setItem('animals', JSON.stringify(response.data))
      } catch (error) {
        console.error('error', error)
      }
    }
    if(animals.length === 0) {
      getData();
    }
  })

  const html = animals.map((animal) => (
    <div key={animal.id}>
      <p>{animal.name}</p>
      <div className='image-container'>
      <img 
        src={animal.imageUrl}
        alt={animal.name}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src='public/img_not_found.png';
        }}
      />
      </div>
    </div>
  ))

  return <>
    <p>Animalspresentation</p>
    <p>Render all AnimalCard</p>
    <>


    {html}
    
    </>

  </>
}