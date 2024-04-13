import { DoctorCard } from "../Components/doctorcard";
import React, { useState , useEffect } from "react";
import axios from "axios"

export const Doctors = () =>{
    const [doctors, setDoctors] = useState([]);
    const fetchAllDocs = async () => {
        try{
            let doctorsObj = await axios.get('http://localhost:3001/doctor/fetchAll', {
                headers: {
                    'Authorization': "Bearer " + localStorage.getItem('token').slice(1,-1),
                },
            });

            setDoctors(doctorsObj.data.doctors);
        } catch(error){
            console.log(error);
        }

       
      };
    useEffect(() => {
        fetchAllDocs();
      }, []);
      console.log(doctors)
    return (
        <div>
        {doctors.map((ele) => {
            return (
              <DoctorCard
                ele={ele}
                
              />
            );
          })}
        </div>
    )
}