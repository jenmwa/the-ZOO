
import { IAnimal } from "../models/IAnimal";
import { get } from "./ServiceBase";

const BASEURL = 'https://animals.azurewebsites.net/api/animals'

export const getAnimalAPI = async(): Promise<IAnimal[] | undefined> => {
    const response = await get<IAnimal[]>(`${BASEURL}`);
    return response;
}

