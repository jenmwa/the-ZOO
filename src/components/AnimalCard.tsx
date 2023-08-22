import { useNavigate } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";
import { useEffect } from "react";

// import '../style/animal.scss'

interface IAnimalProps {
  animals: IAnimal[];
  setAnimals: React.Dispatch<React.SetStateAction<IAnimal[]>>;
}
// export const AnimalCard = ({ animals, hoursSinceFed }: IAnimalProps) => {
export const AnimalCard = ({ animals, setAnimals }: IAnimalProps) => {

  const navigate = useNavigate();
  // const hoursSinceFed = sessionStorage.getItem('hoursSinceFed')

  useEffect(() => {
    const updatedAnimals = animals.map((animal) => {
      if (animal){
        const fedTimeAsDateObject = new Date(animal.lastFed);
        fedTimeAsDateObject.setHours(fedTimeAsDateObject.getHours() - 2)
        console.log('testing:', fedTimeAsDateObject)
        const currentTime = new Date();
        console.log('currentTime', currentTime)
        const timeDifference = currentTime.getTime() - fedTimeAsDateObject.getTime();
        const hoursSinceFed = timeDifference / (60 * 60 * 1000);
        
        if(hoursSinceFed < 3) {
         console.log(animal.name + ' css-class isFed')
        }
        else if (hoursSinceFed >= 3 && hoursSinceFed < 4) {
          console.log(animal.name + ' css-class gettingHungry')
        }
        else if(hoursSinceFed >= 4) {
          console.log(animal.name + ' css-class isHungry');
          return { ...animal, isFed: false };
          // animal.isFed = false;
          // sessionStorage.setItem('animals', JSON.stringify(animals))
          // const updatedAnimal = { ...animal, isFed: false };
          // console.log( updatedAnimal.name + ' isFed: ' + updatedAnimal.isFed)

        } else {
          return animal;
        }
      }
      return animal;
    })
    setAnimals(updatedAnimals);
    sessionStorage.setItem('animals', JSON.stringify(updatedAnimals));
  },[])

  //   const updateAnimalStatus = (updatedAnimal: IAnimal) => {
  //   const updatedAnimals = animals.map((animal) =>
  //     animal.id === updatedAnimal.id ? updatedAnimal : animal
  //   );

  //   console.log('we have updated the array')
  //   setAnimals(updatedAnimals);
  //   sessionStorage.setItem('animals', JSON.stringify(updatedAnimals));
  // }

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
      className={'animal-card-container' + (animal.isFed ? ' isFed' : ' isHungry')} 
      // className={'animal-card-container' + (animal.isFed ? ' isFed' : (hoursSinceFed >= 4 ? ' isHungry' : ' isStarving'))} 
      role='button'
      onClick={() => handleClick(animal)}
      onKeyDown={(e) => handleKeyEnter(e, animal)}
      tabIndex={0}>
      <span className='animal-name'>{animal.name}</span>
      <div className='animal-isFed-status'>
        <span className='animal-isFed-status span'>{animal.isFed ? ' har fått mat.' : ' behöver bli matad!'}</span>
      </div>
      <div className='animal-image-container'>
        <img
          src={animal.imageUrl}
          alt={animal.name}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = '/img_not_found.png';
            //create global variabel?
          }}
        />
      </div>
      <p className='animal-short-desc'>{animal.shortDescription}</p>
    </div>
  ))

  return <>

    {/* <h1>Våra Djur</h1> */}
    <section className='animal-cards-wrapper'>
    {html}
    </section>
  </>
}

//syfte: djurkort info