import React from 'react';

export function ProfilePages(){
    return (
        
       
        <section class="bg-slate-800 min-h-screen flex box-border justify-center items-center p-10">
        <div class="bg-white rounded-2xl flex max-w-3xl p-4 items-center">
            <div class="md:w-1/2 px-8">
                <h2 class="font-bold text-3xl text-[#002D74] p-4">Patient Profile</h2>
    
                <form action="" class="flex flex-col gap-4">
                    <div>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                    <input class="p-2 rounded-xl border w-full" type="text" name="name" id="name" placeholder="FullName"/>
                    </div>
                    <div>
                    <label for="age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                    <input class="p-2 rounded-xl border w-full" type="number" name="age" id="age" placeholder="Age"/>
                    </div>
                    <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sex</label>
                    <select class="w-full px-2 py-1 border rounded border-slate-200" id="email">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">others</option>
                
        </select>
                    </div>  
                    <div>
                    <label for="blood" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blood Group</label>
                    <select class="w-full px-2 py-1 border rounded border-slate-200" id="blood">
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
                    <label for="location" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                    <input class="p-2 rounded-xl border w-full" type="text" name="Location" id="location" placeholder="Location"/>
                    </div>
                    <button class="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium p-8" type="submit">Save Changes</button>
                </form>
                
                
                
            </div>
            <div class="md:block hidden w-1/2">
                <img class="rounded-2xl max-h-[1600px]" src="https://images.unsplash.com/photo-1552010099-5dc86fcfaa38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxmcmVzaHxlbnwwfDF8fHwxNzEyMTU4MDk0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="login form image"/>
            </div>
        </div>
    </section>
    )
}


