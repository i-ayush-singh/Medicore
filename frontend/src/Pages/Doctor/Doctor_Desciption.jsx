import axios from "axios";
import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "../../components/wrapper";
import { Appointment } from "../../components/Appointment";
export function ProfilePage(){
    const { doctorId } = useParams();
    const [user,setUser] = useState({});
    const [doctor,setDoctor] = useState({});
    const xyz = JSON.parse(localStorage.getItem('user'));
    const [showPopup, setShowPopup] = useState(true);
    function togglePopup(){
        setShowPopup(!showPopup);
    }
    const getDoctor = async() =>{
        const response = await axios.get(`http://localhost:3001/doctor/${doctorId}`,{
            headers : {
                'Authorization': "Bearer " + localStorage.getItem('token').slice(1,-1),
            }
        })
        setDoctor(response.data);
        setUser(xyz);
    };
    useEffect(()=>{
        getDoctor();
    },[]);
    return (
        
       
        <div className="flex justify-center">
            {showPopup ?<Appointment show={showPopup} setShow={setShowPopup}/> : null}
            <Wrapper >
            <div className="grid grid-rows-8 grid-cols-10 grid-flow-row gap-8">
            <div className=" row-span-5 col-span-5">
            <img
             alt="doctor"
             src={`http://localhost:3001/assets/${doctor.picturePath}`}
             className=" rounded-full"
            />
            </div>
            <div className="row-span-1 col-span-5 font-bold">
                PROFILE
                <div className="row-span-1 col-span-4 w-full  h-1 bg-black"/>
            </div>
            <div className="row-span-1 col-span-5 font-bold text-3xl text-sky-600 font-serrif"> 
                Dr. {doctor.fullName}
            </div>
            <div className="row-span-1 col-span-5 font-semibold">
                Speciality - {doctor.specialist}<br/>
                Location - {doctor.location}<br/>
                Fee - {doctor.fee}
            </div>
            <div className="row-span-1 col-span-2">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send Request</button>
            </div>
            <div className="row-span-1 col-span-2">
            <button onClick={togglePopup} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Appointment</button>
            
            </div>
            </div>
            </Wrapper>
            
        </div>
        
    );
}
