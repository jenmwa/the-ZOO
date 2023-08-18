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


  const { id } = useParams();
  const idToNumber = Number(id);

  const findAnimal = animals.find((animal) => animal.id === idToNumber)
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/animals');
  }

  const clickToFeed = (animal: IAnimal) => {
    console.log(animal.name + ' isFed ' + animal.isFed)
    const updatedAnimals = animals.map((a) =>
      a.id === animal.id ? { ...a, isFed: true } : a
    );

    setAnimals(updatedAnimals);
    sessionStorage.setItem('animals', JSON.stringify(updatedAnimals));
    console.log(animals);
    setFedTime(animal);
  }

  const setFedTime = (animal: IAnimal) => {
    const date = new Date();
    console.log(date)

    const newDate = new Date(new Date().toString().split('GMT')[0] + ' UTC').toISOString();
    console.log('click to feed ' + animal.name + ' ' + newDate);
    animal.isFed = true;
    console.log(animal.isFed)
  }


  // const html = (
  //   <div className='animal-presentation'>
  //     <div className='animal-presentation-header'>
  //       <button className='button-back material-symbols-outlined' onClick={handleBack}>arrow_back_ios_new</button>
  //     </div>
  //     <p>{id}</p>
  //     <span className='animal-name'>{findAnimal?.name}</span>
  //     <p><span className='text-bold'>Födelseår:</span> {findAnimal?.yearOfBirth}</p>

  //     <div className='animal-image-container'>
  //       <img
  //         src={findAnimal?.imageUrl}
  //         alt={findAnimal?.name}
  //         onError={({ currentTarget }) => {
  //           currentTarget.onerror = null;
  //           currentTarget.src = '/img_not_found.png';
  //         }} />
  //     </div>
  //     <div className='animal-text-container animal-short-desc'>
  //       <span className='animal-about'>OM</span>
  //       <p>{findAnimal?.latinName}</p>
  //       <p>{findAnimal?.longDescription}</p>
  //       <p><span className='text-bold'>Mediciner:</span> {findAnimal?.medicine}</p>
  //       <p><span className='text-bold'>Senast matad:</span> {findAnimal?.lastFed}</p>
  //       <button className='button-back' onClick={() => clickToFeed(findAnimal!)}>MATA</button>
  //     </div>
  //   </div>
  // )

  return <>
    {/* {html} */}
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

