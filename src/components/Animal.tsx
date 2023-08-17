import '../style/animal.scss'
import { useNavigate, useParams } from "react-router-dom"
import { useAnimalContext } from './AnimalContext';



export const Animal = () => {
  const { animals, setAnimals } = useAnimalContext();
  console.log(animals);

  const {id} = useParams();
  const idToNumber = Number(id)


  const findAnimal = animals.find((x) => x.id === idToNumber)
  const navigate = useNavigate();
 
  const handleBack = () => {
    navigate('/animals');
  }

    return <>
      <p>AnimalInfo {id}</p>
      <button className='button-back' onClick={handleBack}>BACK</button>
      <p>{findAnimal?.name}</p>
    </>
  }

