import React from 'react';
import { useState } from 'react';
export function ProfilePages(){
    
    const patient = JSON.parse(localStorage.getItem('user'));
    const [formdetails, setFormdetails] = useState({
        fullName: patient.fullName,
        location: patient.location,
        sex : patient.sex,
        blood : patient.blood,
        age : patient.age,
    })
    const [selectedImage, setSelectedImage] = useState(`http://localhost:3001/assets/${patient.picturePath}`);
    const inputChange=(e)=>{
        const { name, value } = e.target;
        return setFormdetails({
            ...formdetails,
            [name]:value,
        });
    };
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            setSelectedImage(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };
    return (
        
       
        <section class="bg-slate-800 min-h-screen flex box-border justify-center items-center p-10">
        <div class="bg-white rounded-2xl flex max-w-3xl p-4 items-center">
            <div class="md:w-1/2 px-8">
                <h2 class="font-bold text-3xl text-[#002D74] p-4">Patient Profile</h2>
    
                <form action="" class="flex flex-col gap-4">
                    <div>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Full Name</label>
                    <input class="p-2 rounded-xl border w-full" type="text" id = "name" name="fullName" placeholder="FullName" value = {formdetails.fullName} onChange = {inputChange}/>
                    </div>
                    <div>
                    <label for="agee" class="block mb-2 text-sm font-medium text-gray-900">Age</label>
                    <input class="p-2 rounded-xl border w-full" type="number" name="age" id="agee" placeholder="Age" value = {formdetails.age} onChange = {inputChange}/>
                    </div>
                    <div>


                    <label for="sexy" class="block mb-2 text-sm font-medium text-gray-900">Sex</label>
                    <select class="w-full px-2 py-1 border rounded border-slate-200" id = "sexy" name = "sex" value = {formdetails.sex} onChange = {inputChange}>

                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">others</option>
                
        </select>
                    </div>  
                    <div>


                    <label for="blody" class="block mb-2 text-sm font-medium text-gray-900">Blood Group</label>
                    <select class="w-full px-2 py-1 border rounded border-slate-200" id = "blody" name = "blood" value = {formdetails.blood} onChange = {inputChange}>

                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="B-">B-</option>
                <option value="AB-">AB-</option>
                <option value="A-">A-</option>
                
        </select>
                    </div>
                    
                    <div>

                    <label for="loc" class="block mb-2 text-sm font-medium text-gray-900">Location</label>
                    <input class="p-2 rounded-xl border w-full" type="text" id = "loc"name="Location" placeholder="Location" value = {formdetails.location} onChange = {inputChange}/>

                    </div>
                    <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
                    <button class="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium p-8" type="submit">Save Changes</button>
                </form>
                
                
                
            </div>
            <div class="md:block hidden w-1/2">
                <img class="rounded-2xl max-h-[1600px]" src={selectedImage} alt="login form image"/>
            </div>
        </div>
    </section>
    )
}


