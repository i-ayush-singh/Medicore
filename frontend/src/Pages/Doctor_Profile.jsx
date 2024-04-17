import React from 'react';
import { useState } from 'react';
import { NavbarD } from '../components/NavbarD';
import { Sidebar } from '../components/SidebarD';
export function ProfileDoc(){
    const doctor = JSON.parse(localStorage.getItem('user'));
    const [formdetails, setFormdetails] = useState({
        fullName: doctor.fullName,
        specialist : doctor.specialist,
        fee : doctor.fee,
        location : doctor.location,
    })
    const [currentFile, setCurrentFile] = useState(doctor.picturePath);
    const [selectedImage, setSelectedImage] = useState(`http://localhost:3001/assets/${doctor.picturePath}`);
    const inputChange=(e)=>{
        const { name, value } = e.target;
        return setFormdetails({
            ...formdetails,
            [name]:value,
        });
    }
    const handleImageChange = (event) => {
        setCurrentFile(event.target.files[0]);
        const file = event.target.files[0]
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            setSelectedImage(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };
    return (
        <div>
        <NavbarD/>
        <div className = "grid grid-cols-4 gap-0">
        <div className="col-span-1">
              <Sidebar/>              
      </div>
       
        <section class=" col-span-3 bg-slate-800  min-h-screen flex box-border justify-center items-center p-10">
        <div class="bg-white rounded-2xl flex max-w-3xl p-4 items-center">
            <div class="md:w-1/2 px-8">
                <h2 class="font-bold text-3xl text-[#002D74] p-4">Doctor Profile</h2>
    
                <div class="flex flex-col gap-4">
                    <div>
                    <label for="namee" class="block mb-2 text-sm font-medium text-gray-900">Full Name</label>
                    <input class="p-2 rounded-xl border w-full" type="text" name="name" id="namee" placeholder="FullName" value = {formdetails.fullName} onChange = {inputChange}/>
                    </div>
                    <div>
                    <label for="specialistd" class="block mb-2 text-sm font-medium text-gray-900">Specialist</label>
                    <input class="p-2 rounded-xl border w-full" type="text" name="specialist" id="specialistd" placeholder="Specialist" value = {formdetails.specialist} onChange = {inputChange} />
                    </div>
                    <div>
                    <label for="fees" class="block mb-2 text-sm font-medium text-gray-900">Fee</label>
                    <input class="p-2 rounded-xl border w-full" type="number" name="fee" id="fees" placeholder="Fee" value = {formdetails.fee} onChange = {inputChange} />
                    </div>
                    <div>
                    <label for="stime" class="block mb-2 text-sm font-medium text-gray-900">Start Time</label>
                    <input class="p-2 rounded-xl border w-full" type="time" name="stm" id="stime" placeholder="Start Time" />
                    </div>
                    <div>
                    <label for="etime" class="block mb-2 text-sm font-medium text-gray-900">End Time</label>
                    <input class="p-2 rounded-xl border w-full" type="time" name="etm" id="etime" placeholder="End time"/>
                    </div>
                    <div>
                    <label for="locationd" class="block mb-2 text-sm font-medium text-gray-900">Location</label>
                    <input class="p-2 rounded-xl border w-full" type="text" name="location" id="locationd" placeholder="Location" value = {formdetails.location} onChange = {inputChange} />
                    </div>
                    <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
                    <button class="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium p-8" type="submit">Save Changes</button>
                </div>
                
                
                
            </div>
            <div class="md:block hidden w-1/2">
                <img class="rounded-2xl max-h-[1600px]" src={selectedImage} alt="login form image"/>
            </div>
        </div>
    </section>
    </div>
    </div>
    )
}


