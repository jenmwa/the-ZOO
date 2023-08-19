import { IAnimal } from "../models/IAnimal";
import { getAnimalAPI } from "../service/AnimalService";

export interface Loader {
    animalList: IAnimal[];
}

export const animalLoader = async(): Promise<IAnimal[] | undefined> => {
    try {
        const response = await getAnimalAPI();
        return response;
    } catch (error) {
        console.error('error', error);
        return undefined;
      }
}

// i router sätt in key: loader: animalLoader;
// i Animals.tsx
// export const Animals = () => {
// const { animals } = useLoaderData() as Loader;
// return <></>
// }
