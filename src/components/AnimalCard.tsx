import '../style/animal.scss'
import { useNavigate } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import { calculateHoursSinceFed } from "../functions/timeCalculation";

interface IAnimalProps {
  animals: IAnimal[];
}

export const AnimalCard = ({ animals }: IAnimalProps) => {

  const navigate = useNavigate();
  const fallbackImg = '/img_not_found.png'

  const handleClick = (animal: IAnimal) => {
    navigate('/animal/'+ animal.id)
  }

  const handleKeyEnter = (e: React.KeyboardEvent, animal:IAnimal) => {
    if (e.key === 'Enter') {
      navigate('/animal/'+ animal.id)
    }
  }

  function getFeedingStatusClass(hoursSinceFed: number) {
    if (hoursSinceFed < 3) {
      return 'isFed';
    } else if (hoursSinceFed >= 3 && hoursSinceFed < 4) {
      return 'gettingHungry';
    } else {
      return 'isHungry';
    }
  }

  function getFeedingStatusText(hoursSinceFed: number) {
    if (hoursSinceFed < 3) {
      return 'har fått mat.';
    } else if (hoursSinceFed >= 3 && hoursSinceFed < 4) {
      return 'börjar bli hungrig.';
    } else {
      return 'behöver bli matad!';
    }
  }

  const html = animals.map((animal) => {
    const fedTimeAsDateObject = new Date(animal.lastFed);
    const hoursSinceFed = calculateHoursSinceFed(new Date(fedTimeAsDateObject));
    const feedingStatusClass = getFeedingStatusClass(hoursSinceFed);
    const feedingStatusText = getFeedingStatusText(hoursSinceFed)
    return (
      <div 
      key={animal.id} 
      className={`animal-card-container ${feedingStatusClass}`} 
      role='button'
      onClick={() => handleClick(animal)}
      onKeyDown={(e) => handleKeyEnter(e, animal)}
      tabIndex={0}>
      <span className='animal-name'>{animal.name}</span>
      <div className='animal-isFed-status'>
        <span className='animal-isFed-status span'>{`${feedingStatusText}`}</span>
      </div>
      <div className='animal-image-container'>
        <img
          src={animal.imageUrl}
          alt={animal.name}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = fallbackImg;
          }}
        />
      </div>
      <p className='animal-short-desc'>{animal.shortDescription}</p>
    </div>
    )
  });

  return <>
 <section className='animal-cards-wrapper'>
     {html}
     </section>
  </>
}