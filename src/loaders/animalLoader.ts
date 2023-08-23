import { IAnimal } from "../models/IAnimal";
import { getAnimalAPI } from "../service/AnimalService";

export interface Loader {
  animalList: IAnimal[],
  error: string,
}

export const animalLoader = async (): Promise<Loader> => {
  const data: Loader = { animalList: [], error: '' };
  try {
    const response = await getAnimalAPI();
    if (response) {
      data.animalList = response;
    } else {
      data.error = 'Inget svar från API';
    }
  } catch (error) {
    console.error('error', error as Error);
    data.error = 'Något gick fel. ' + error;
  }
  return data;
}

// i router sätt in key: loader: animalLoader;
// i Animals.tsx
// export const Animals = () => {
// const { animals } = useLoaderData() as Loader;
// return <></>
// }
