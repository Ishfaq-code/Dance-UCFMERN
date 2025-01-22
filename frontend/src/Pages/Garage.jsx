import {useEffect} from 'react'
import GarageCard from '../components/GarageCard'
import { useState } from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const Garage = () => {
// Variable for storing and setting data
const [mainData, setMainData] = useState([]);
  
  // useEffect to get the data from API
  useEffect(() => {
    // Async fucntion to fetch data using try and catch
    const garageData = async () => {
      try{
        const response =  await fetch("/api/garages"); // fetching from link
        if(!response){
          console.log("No Data"); // if response is empty no data
        }
        const allGarageData = await response.json(); // Converting data into JSON and storing into a variable
        console.log(allGarageData.data);
        setMainData(allGarageData.data); // setting data to all data
      }
      // Catching errors
      catch(error){
        console.error("There is an error", error)
      }
    }

    // Catching the actual function
    garageData();
  }, []);



  

  


  return (
    <>
    
      <div>
      <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
        <UserButton></UserButton>
        <ul>
            {mainData.map(item => (
              <li key={item._id}><GarageCard title={item.name} floors={item.floors} /></li>
            ))}
          </ul>
        </SignedIn> 
     
    </div>
    
    
    
    </>
  )
}

export default Garage