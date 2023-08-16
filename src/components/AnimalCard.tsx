import { IAnimal } from "../models/IAnimal";
import '../style/animal.scss'

interface IAnimalProps {
  animals: IAnimal[]
}

export const AnimalCard = ({animals}:IAnimalProps) => {

  const html = animals.map((animal) => (
    <div key={animal.id} className='animal-card-container'>
      <span className='animal-name'>{animal.name}</span>
      <div className='animal-image-container'>
        <img
          src={animal.imageUrl}
          alt={animal.name}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = 'public/img_not_found.png';
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