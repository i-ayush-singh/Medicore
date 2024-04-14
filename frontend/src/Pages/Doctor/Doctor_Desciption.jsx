import axios from "axios";
import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "../../components/wrapper";
 
export function ProfilePage(){
    const { doctorId } = useParams();
    const [user,setUser] = useState({});
    const [doctor,setDoctor] = useState({});
    const [request,setRequest] = useState({});
    const xyz = JSON.parse(localStorage.getItem('user'));
   
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
    async function Request(){
        
        try{
        const response = await axios.get(`http://localhost:3001/doctor/checkRequest/${doctor._id}/${user._id}`,{
            headers : {
                'Authorization': "Bearer " + localStorage.getItem('token').slice(1,-1),
            }
        })
        console.log(response.data.result);
        setRequest(response.data.result);
         }
         catch(err){
            console.log(err);
         }
     }
     async function SendRequest(){
        const userId = user._id
      try{
         const response = await axios.patch(`http://localhost:3001/patient/request/${doctor._id}`,{ patientId : userId } ,{
            headers : {
                'Authorization': "Bearer " +localStorage.getItem('token').slice(1,-1),
                'Content-Type' : 'application/json',
            }
        })
        console.log(response.data);
        setRequest(true);
      }catch(err){
        console.log(err);
      }
     }
     const SendingRequest = async ({}) => {
        await SendRequest();
     }
     
        const RequestData = ({}) =>{
            Request();
            if(request === true ){
                return(
                    <div>
                    <button disabled type="button" class="text-white bg-blue-700 cursor-not-allowed hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                    <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                     </svg>
                      Waiting....
                     </button>
                    </div>
                 )
            }
            else{
                return (
                    <div>
                <button type="button" onClick = {SendingRequest} class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send Request</button>
                    </div>
                
                )            
            }
        };
        
    return (
        <div className="flex justify-center">
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
             <RequestData />
            </div>
            <div className="row-span-1 col-span-2">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Appointment</button>
            </div>
            </div>
            </Wrapper>
            
        </div>
    );
}
