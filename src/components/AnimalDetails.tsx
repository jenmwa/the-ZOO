import { IAnimal } from "../models/IAnimal";

interface IAnimalProps {
  animal: IAnimal;
  handleBack: () => void;
  clickToFeed: (animal: IAnimal) => void;
  disabled: boolean,
}

export const AnimalDetails = ({ animal, handleBack, clickToFeed, disabled }: IAnimalProps) => {
  const fallbackImg = '/img_not_found.png'

  const html = (
    <div className='animal-presentation' >
      <div className='animal-presentation-header'>
        <button 
          className='button-back material-symbols-outlined' 
          onClick={handleBack}>arrow_back_ios_new</button>
      </div>
      <span className='animal-name'>{animal?.name}</span>
      <p><span className='text-bold'>Födelseår:</span> {animal?.yearOfBirth}</p>

      <div className='animal-image-container'>
        <img
          src={animal?.imageUrl}
          alt={animal?.name}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = fallbackImg;
          }} />
      </div>
      <div className='animal-text-container animal-short-desc'>
        <span className='animal-about'>OM</span>
        <p><span className='text-bold'>Latinskt namn: </span>{animal?.latinName}</p>
        <p>{animal?.longDescription}</p>
        <p><span className='text-bold'>Mediciner:</span> {animal?.medicine}</p>
        <p><span className='text-bold'>Senast matad:</span> {animal?.lastFed}</p>
        <button
          className='button-feed'
          onClick={() => clickToFeed(animal)}
          disabled={disabled}
        >MATA</button>
      </div>
      <div 
        className='animal-presentation-footer' 
        onClick={handleBack}>
        <button 
          className='button-back material-symbols-outlined' 
          onClick={handleBack}>arrow_back_ios_new </button>
      </div>
    </div>
  )

  return <>
    {html}
  </>
}