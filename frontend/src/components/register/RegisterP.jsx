import React , {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from "axios"
export function RegisterP(){
    const navigate = useNavigate();
    const [fullName,setFullName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [location,setLocation] = useState("");
    const [sex,setSex] = useState("");
    const [blood,setBlood] = useState("");
    const [age,setAge] = useState()
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
    const handleAgeChange = (event) => {
        event.preventDefault();
        const newAge = event.target.value;
        setAge(newAge);
    }
    const handleBloodChange = (event) => {
        event.preventDefault();
        const newBlood = event.target.value;
        setBlood(newBlood);
    }
    const handleSexChange = (event) => {
        event.preventDefault();
        const newSex = event.target.value;
        setSex(newSex);
    }
    const [currentFile, setCurrentFile] = useState(null);
    const handleFileChange = (event) => {
        setCurrentFile(event.target.files[0]);
    }
    const submitFunction = async (event) => {
        
        
        event.preventDefault();
        
        const formData = new FormData();
        formData.append('picture',currentFile);
        formData.append('firstName',fullName);
        formData.append('password',password);
        formData.append('email',email);
        formData.append('location',location);
        formData.append('sex',sex);
        formData.append('blood',blood);
        formData.append('age',age);
        formData.append('picturePath',currentFile.name);
        
        try{
          const response = await axios.post("http://localhost:3001//auth/patient/register",formData,{
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
          setBlood("");
          setAge("");
          setSex("");
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
            <h1>Register patient</h1>
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
            <label>
                gender:
                <select value= {sex} onChange={handleSexChange}>
                <option value="option1">Male</option>
                <option value="option2">Female</option>
                <option value="option3">others</option>
        </select>
      </label> 
            </div>
            <div>
            <label>
                Enter your age:
                <input 
                type="number" 
                value={age} 
                onChange={handleAgeChange} 
                placeholder="Enter your age" 
                min="0"
        />
      </label>
            </div>
            <div>
            <label>
                Blood Group:
                <select value={blood} onChange={handleBloodChange}>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="B-">B-</option>
                <option value="AB-">AB-</option>
                <option value="A-">A-</option>
        </select>
      </label> 
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