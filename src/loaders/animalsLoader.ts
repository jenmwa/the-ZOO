import { IAnimal } from "../models/IAnimal";
import { getAnimalAPI } from "../service/AnimalService";

export interface IAnimalsLoader {
  animalList: IAnimal[],
  error: string,
}

export const animalsLoader = async (): Promise<IAnimalsLoader> => {
  const data: IAnimalsLoader = { animalList: [], error: '' };
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

