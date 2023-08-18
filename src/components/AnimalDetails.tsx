import { IAnimal } from "../models/IAnimal";

interface IAnimalProps {
  animal: IAnimal;
  handleBack: () => void;
  clickToFeed: (animal: IAnimal) => void;
}

export const AnimalDetails = ({ animal, handleBack, clickToFeed }: IAnimalProps) => {
  console.log(animal.isFed)

  const html = (
    <div className='animal-presentation'>
      <div className='animal-presentation-header'>
        <button className='button-back material-symbols-outlined' onClick={handleBack}>arrow_back_ios_new</button>
      </div>
      <span className='animal-name'>{animal?.name}</span>
      <p>Födelseår: {animal?.yearOfBirth}</p>

      <div className='animal-image-container'>
        <img
          src={animal?.imageUrl}
          alt={animal?.name}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = '/img_not_found.png';
          }} />
      </div>
      <div className='animal-text-container animal-short-desc'>
        <span className='animal-about'>OM</span>
        <p>{animal?.latinName}</p>
        <p>{animal?.longDescription}</p>
        <p>Mediciner: {animal?.medicine}</p>
        <p>Senast matad: {animal?.lastFed}</p>
        <button
          className='button-feed'
          onClick={() => clickToFeed(animal)}
          disabled={animal.isFed}
        >MATA</button>
      </div>
    </div>
  )

  return <>
    {html}
  </>
}