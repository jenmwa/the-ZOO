import { useNavigate } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import '../style/animal.scss'

interface IAnimalProps {
  animals: IAnimal[]
}

export const AnimalCard = ({ animals }: IAnimalProps) => {

  const navigate = useNavigate();

  const handleClick = (id: number) => {
    console.log('click on: ', id);
    navigate('/animal/' + id)
  }

  const html = animals.map((animal) => (
    <div key={animal.id} className='animal-card-container' onClick={() => handleClick(animal.id)}>
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

    <p>AnimalCard create show cards!</p>
    <p>HUngry/ soon-to-be? eaten?</p>
    {html}


  </>
}
//syfte: djurkort info