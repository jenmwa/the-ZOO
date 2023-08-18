import '../style/animal.scss'
import { useNavigate, useParams } from "react-router-dom"
// import { useAnimalContext } from './AnimalContext';
import { IAnimal } from '../models/IAnimal';
// import { AnimalDetails } from './AnimalDetails';
import { useState } from 'react';


export const Animal = () => {
  // const { animals, setAnimals } = useAnimalContext();
  // console.log(animals);

  const storedAnimals = sessionStorage.getItem('animals') || '[]';
  console.log(storedAnimals);
  const [animals, setAnimals] = useState<IAnimal[]>(JSON.parse(storedAnimals)); // Declare the state variable


  const { id } = useParams();
  const idToNumber = Number(id)

  const findAnimal = animals.find((animal) => animal.id === idToNumber)
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/animals');
  }

  const clickToFeed = (animal: IAnimal) => {
    console.log(animal.name + ' isFed ' + animal.isFed)
    const updateFedAnimal = animals.find((a) => a.id === animal.id);
  
    if (updateFedAnimal) { // Check if updateFedAnimal is defined
      updateFedAnimal.isFed = true;
      sessionStorage.setItem('animals', JSON.stringify(animals));
      setAnimals([...animals]); // Update the state with the updated animals array
    }
  
    console.log(animals);

    const date = new Date();
    console.log(date)

    const newDate = new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString();
    console.log('click to feed ' + animal.name + ' ' + newDate);
    animal.isFed = true;
    console.log(animal.isFed)



    // formatDateTime(date)

    // Det ovan - Inga mikrosekunder! performance.now:
    // const now = new Date();
    // const microseconds = Math.floor(performance.now() * 1000) % 10000;
    // const formattedTimestamp = `${now.toISOString().replace('Z', '')}${microseconds.toString().padStart(4, '0')}`;
    // console.log('Timestamp with 4 microseconds:', formattedTimestamp);
    // rätt antal siffror gentemot API men vet ej om det behövs?


    //animal.isFed === true
    //timestamp Date.now()
    //MATA-knapp disabled.
    //update state
  }

  // function formatDateTime(date: Date) {

  //   const year = date.getFullYear();
  //   const month = String(date.getMonth() + 1).padStart(2, '0');
  //   const day = String(date.getDate()).padStart(2, '0');
  //   const hours = String(date.getHours()).padStart(2, '0');
  //   const minutes = String(date.getMinutes()).padStart(2, '0');
  //   const seconds = String(date.getSeconds()).padStart(2, '0');
  //   const milliseconds = String(date.getMilliseconds()).padStart(7, '0');
  //   const time = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}`;
  //    console.log(time) 
  //   return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}`;
  // }

  const html = (
    <div className='animal-presentation'>
      <div className='animal-presentation-header'>
        <button className='button-back material-symbols-outlined' onClick={handleBack}>arrow_back_ios_new</button>
      </div>
      <p>{id}</p>
      <span className='animal-name'>{findAnimal?.name}</span>
      <p>Födelseår: {findAnimal?.yearOfBirth}</p>

      <div className='animal-image-container'>
        <img
          src={findAnimal?.imageUrl}
          alt={findAnimal?.name}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = '/img_not_found.png';
          }} />
      </div>
      <div className='animal-text-container animal-short-desc'>
        <span className='animal-about'>OM</span>
        <p>{findAnimal?.latinName}</p>
        <p>{findAnimal?.longDescription}</p>
        <p>Mediciner: {findAnimal?.medicine}</p>
        <p>Senast matad: {findAnimal?.lastFed}</p>
        <button className='button-back' onClick={() => clickToFeed(findAnimal!)}>MATA</button>
      </div>
    </div>
  )

  return <>
 {/* {findAnimal ? (
      <AnimalDetails
        findAnimal={findAnimal}
        handleBack={handleBack}
        // clickToFeed={clickToFeed}
        id={idToNumber.toString()}
      />
    ) : (
      <p>Loading or not found</p>
    )} */}
    {html}
  </>
}

