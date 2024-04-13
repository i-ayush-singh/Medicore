import {DoctorCard} from "../components/doctorcard"
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
    // return (
    //     <div>
    //     {doctors.map((ele) => {
    //         return (
    //           <DoctorCard
    //             ele={ele}
                
    //           />
    //         );
    //       })}
    //     </div>
    // )

    return (
      <div class="bg-gray-200">
          <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {doctors.map((ele) => {
              return (
                <div class="p-3">
                <DoctorCard
                  ele={ele}
                /></div>
              );
            })}
          </div>
      </div>
      )
  }
