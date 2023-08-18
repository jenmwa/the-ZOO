import { useNavigate } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
// import '../style/animal.scss'

interface IAnimalProps {
  animals: IAnimal[]
}

export const AnimalCard = ({ animals }: IAnimalProps) => {

  const navigate = useNavigate();

  const handleClick = (animal: IAnimal) => {
    console.log('click on: ', animal.id);
    navigate('/animal/'+ animal.id)
  }

  const handleKeyEnter = (e: React.KeyboardEvent, animal:IAnimal) => {
    if (e.key === 'Enter') {
      console.log('Enter pressed on: ', animal.name)
      navigate('/animal/'+ animal.id)
    }
  }

  const html = animals.map((animal) => (
    <div 
      key={animal.id} 
      className='animal-card-container' 
      onClick={() => handleClick(animal)}
      onKeyDown={(e) => handleKeyEnter(e, animal)}
      tabIndex={0}>
      <span className='animal-name'>{animal.name}</span>
      <div className='animal-image-container'>
        <img
          src={animal.imageUrl}
          alt={animal.name}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = '/img_not_found.png';
          }}
        />
      </div>
      <p className='animal-short-desc'>{animal.shortDescription}</p>
    </div>
  ))

  return <>

    <h1>Våra Djur</h1>
    <p>HUngry/ soon-to-be? eaten?</p>
    {html}
  </>
}
//syfte: djurkort info