import { useParams } from "react-router-dom"


export const Animal = () => {

  const {id} = useParams();
 

    return <>
      <p>AnimalInfo {id}</p>
    </>
  }