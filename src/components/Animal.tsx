import '../style/animal.scss'
import { useNavigate, useParams } from "react-router-dom"
import { useAnimalContext } from './AnimalContext';
import { IAnimal } from '../models/IAnimal';



export const Animal = () => {
  const { animals, setAnimals } = useAnimalContext();
  console.log(animals);

  const { id } = useParams();
  const idToNumber = Number(id)

  const findAnimal = animals.find((animal) => animal.id === idToNumber)
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/animals');
  }

  const clickToFeed = (animal: IAnimal) => {

    const date = new Date().toISOString();
    console.log('click to feed '+ animal.name + date);
    //Inga mikrosekunder! kolla upp performance.now !

    //animal.isFed === true
    //timestamp Date.now()
    //MATA-knapp disabled.
    //update state

  }

  return <>
    <div className='animal-presentation'>
      <div className='animal-presentation-header'>
        <button className='button-back material-symbols-outlined' onClick={handleBack}>arrow_back_ios_new</button>
      </div>
      <p>{id}</p>
      <span className='animal-name'>{findAnimal?.name}</span>
      <p>Födelseår: {findAnimal?.yearOfBirth}</p>
      <p>Latinskt namn: {findAnimal?.latinName}</p>
      <div className='animal-image-container'>
        <img
        src={findAnimal?.imageUrl}
        alt={findAnimal?.name}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = '/img_not_found.png';
        }}/>
      </div>
      <div className='animal-text-container animal-short-desc'>
        <span className='animal-about'>OM</span>
        <p>{findAnimal?.longDescription}</p>
        <p>Mediciner: {findAnimal?.medicine}</p>
        <p>Senast matad: {findAnimal?.lastFed}</p>
        <button className='button-back' onClick={() => clickToFeed(findAnimal!)}>MATA</button>
      </div>


    </div>
  </>
}

