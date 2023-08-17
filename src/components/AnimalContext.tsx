//step1 imports
import { createContext, useContext, useState, ReactNode } from 'react';
import { IAnimal } from '../models/IAnimal';

//step2: interface
interface IAnimalContextValue {
  animals: IAnimal[];
  setAnimals: React.Dispatch<React.SetStateAction<IAnimal[]>>;
}
//setState React typescript type: setValue : React.Dispatch<React.SetStateAction<any>>

//step3 createContext. context value will be provided by AnimalProvider
const AnimalContext = createContext<IAnimalContextValue | undefined>(undefined);

//step4: Context provider. responsible for providing the context value to its descendants.
//children( reactNode repr. components that vill be wrapped) = prop
export const AnimalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  return (
    <AnimalContext.Provider value={{ animals, setAnimals }}>
      {children}
    </AnimalContext.Provider>
  );
};

//step5 Custom Hook allows components to access the context value
export const useAnimalContext = () => {
  const context = useContext(AnimalContext);
  if (!context) {
    throw new Error('error');
  }
  return context;
};

//go to App, put RouterProvider inside <AnimalProvider>
//https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/
//https://blog.logrocket.com/how-to-use-react-context-typescript/
