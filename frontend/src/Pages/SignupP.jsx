import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
export default function SignupP(){
    const [loading, setloading] = useState(false);
    const [formdetails, setFormdetails] = useState({
        fullName: "",
        email: "",
        password: "",
        location:"",
    })
    const [blood,setBlood] = useState("");
    const[sex,setSex] = useState("");
    const[age,setAge] = useState(0);
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
    const navigate =useNavigate();
    const inputChange=(e)=>{
        const { name, value } = e.target;
        return setFormdetails({
            ...formdetails,
            [name]:value,
        });
    };


    const [currentFile, setCurrentFile] = useState(null);
    const handleFileChange = (event) => {
        setCurrentFile(event.target.files[0]);
    }
    const handleAgeChange = (event) => {
        event.preventDefault();
        const newAge = event.target.value;
        setAge(newAge);
    }
    const formSubmit = async (e) => {
        try{
            if (loading) return;
            const { fullName, email, password, location} =
        formdetails;
        if (!fullName || !location || !email || !password || !sex || !age || !blood) {
            return toast.error("Input field should not be empty");
          }
          const formData = new FormData();
          formData.append('picture',currentFile);
          formData.append('fullName',fullName);
          formData.append('password',password);
          formData.append('email',email);
          formData.append('location',location);
          formData.append('sex',sex);
          formData.append('blood',blood);
          formData.append('age',age);
          formData.append('picturePath',currentFile.name);
          console.log(formData);
          await toast.promise(
            axios.post("http://localhost:3001/auth/patient/register", formData,{
                headers : {
                    'Content-Type': 'multi/form-data',
                },
              }),
            {
              pending: "Registering user...",
              success: "User registered successfully",
              error: "Unable to register user",
              loading: "Registering user...",
            }
          );
           return navigate("/login/patient");

        }catch(error){
            console.log(error);
        }
        

    }

    return(
        <section className="register-section flex-center">
            <div className="register-container flex-center">
                <h2 className="form-heading"> Sign Up Patient</h2>
                <form onSubmit={formSubmit} className="register-form">
                <input
                    type="text"
                    name="fullName"
                    className="form-input"
                    placeholder="Enter your name"
                    value={formdetails.fullName}
                    onChange={inputChange}
          />
                <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={formdetails.email}
            onChange={inputChange}
          />
          <input
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={formdetails.password}
            onChange={inputChange}
            autoComplete="on"
          />
          <input
            type="text"
            name="location"
            className="form-input"
            placeholder="location"
            value={formdetails.location}
            onChange={inputChange}
          />
          <input
            type="number"
            name="age"
            className="form-input"
            placeholder="age"
            value={formdetails.age}
            onChange={handleAgeChange}
            min="0"
          />
          <select value= {formdetails.sex} onChange={handleSexChange}>
                <option value="option1">Male</option>
                <option value="option2">Female</option>
                <option value="option3">others</option>
        </select>
        <select value={formdetails.blood}  className="form-input" onChange={handleBloodChange}>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="B-">B-</option>
                <option value="AB-">AB-</option>
                <option value="A-">A-</option>
        </select>
        <input type="file" onChange={handleFileChange}  />
        <button onClick={formSubmit}>Register</button>
                </form>
            </div>
        </section>
    )
}