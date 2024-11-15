import {useEffect} from 'react'
import GarageCard from '../components/GarageCard'

const Garage = () => {
  
  useEffect(() => {
    const garageData = async () => {
      try{
        const response =  await fetch("/api/garages");
        if(!response){
          console.log("No Data");
        }
        const data = await response.json();
      }
      catch(error){
        console.error("There is an error", error)
      }
    }

    garageData();
  }, [])


  return (
    <>
      <GarageCard title={"Garage A"} section1Text={"Floor 1"} section2Text={"Floor 2"} section3Text={"Socket"} />

      
    </>
  )
}

export default Garage