import Garages from "../models/Garage.js";


const intializeGarageData = async () => {
    // Garages Data
    const allGarages = [
        // Each Garage as an object
        {
            name: "Garage A",
            floors: [
                {floorNumer: 1, side1: {reservation:null}, side2: {reservation:null}, socket: true},
                {floorNumer: 2, side1: {reservation:null}, side2: {reservation:null}, socket: false},
            ],

        },

        {
            name: "Garage B",
            floors: [
                {floorNumer: 1, side1: {reservation:null}, side2: {reservation:null}, socket: false},
                {floorNumer: 2, side1: {reservation:null}, side2: {reservation:null}, socket: false},
            ]
        }
    ]

    for(const garage of allGarages){

        try{
            const checkExistingGarage = await Garages.findOne({name: garage.name});
            if(!checkExistingGarage){
                await Garages.create(garage);
                console.log(`${garage.name} was created`);
            }
            else{
                console.log(`${garage.name} already exists!`);
            }
        }
        catch(error){
            console.error(`Error creating ${garage.name}`, error);
        }

       
    }

}

export default intializeGarageData;