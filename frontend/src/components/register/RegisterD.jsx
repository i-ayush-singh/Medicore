import React , {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from "axios"
export function RegisterD(){
    const navigate = useNavigate();
    const [fullName,setFullName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [location,setLocation] = useState("");
    const [specialist,setSpecialist] = useState("");
    const handlePasswordChange = (event) =>{
        event.preventDefault();
        const newPassword = event.target.value;
        setPassword(newPassword);
    }
    const handleEmailChange = (event) => {
        event.preventDefault();
        const newEmail = event.target.value;
        setEmail(newEmail);
    }
    const handleFullNameChange = (event) => {
        event.preventDefault();
        const newFullName = event.target.value;
        setFullName(newFullName);
    }
    const handleLocationChange = (event) => {
        event.preventDefault();
        const newLocation = event.target.value;
        setLocation(newLocation);
    }
    const handleSpecialistChange = (event) => {
        event.preventDefault();
        const newSpecialist = event.target.value;
        setSpecialist(newSpecialist);
    }
    const [currentFile, setCurrentFile] = useState(null);
    const handleFileChange = (event) => {
        setCurrentFile(event.target.files[0]);
    }
    const submitFunction = async (event) => {
        
        
        event.preventDefault();
        const friends = [];
        const formData = new FormData();
        formData.append('picture',currentFile);
        formData.append('firstName',fullName);
        formData.append('password',password);
        formData.append('email',email);
        formData.append('location',location);
        formData.append('specialist',specialist);
        formData.append('picturePath',currentFile.name);
        
        try{
          const response = await axios.post("http://localhost:3001/auth/doctor/register",formData,{
            headers : {
                'Content-Type': 'multi/form-data',
            },
          });

        //   console.log(response);

        //   console.log(res);
          alert("Signed Up successfully");
        //   navigate('/login');


          // Making things empty
          setEmail("");
          setPassword("");
          setFullName("");
          setSpecialist("");
          setLocation("");
          
        }
        catch(err){
            if(err.response && err.response.status === 400 ){
                alert("Username already exist!!!");
            }
            else{
                console.log(err);
            }
        }
    }
    return (
        <form action="" onSubmit={submitFunction}>
            <div>
            <h1>Register</h1>
            <div>
                    <label htmlFor='fname'></label>
                    <input 
                    className='input'
                    value = {fullName}
                    type = "text"
                    placeholder = "fullname"
                    onChange = {handleFullNameChange}
                    required/>

            </div>
            <div>
            <label htmlFor='email'></label>
                    <input 
                    className='input'
                    value = {email}
                    type = "text"
                    placeholder = "email"
                    onChange = {handleEmailChange}
                    required/>
            </div>
            <div>
            <label htmlFor='password'></label>
                    <input 
                    className='input'
                    value = {password}
                    type = "text"
                    placeholder = "password"
                    onChange = {handlePasswordChange}
                    required/>
            </div>
            <div>
            <label htmlFor='location'></label>
                    <input 
                    className='input'
                    value = {location}
                    type = "text"
                    placeholder = "occupation"
                    onChange = {handleLocationChange}
                    required/>
            </div>
            <div>
            <label htmlFor='specialist'></label>
                    <input 
                    className='input'
                    value = {specialist}
                    type = "text"
                    placeholder = "specialist"
                    onChange = {handleSpecialistChange}
                    required/>
            </div>
            <div>
            <input type="file" onChange={handleFileChange} />
            </div>
            <button onClick={submitFunction}>Register</button>
            {/* <div>Already signed up? <Link to = "/login">Login</Link></div> */}
            </div>
        </form>
    )
}