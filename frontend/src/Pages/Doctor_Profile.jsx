import React from 'react';

export function ProfileDoc(){
    return (
        
       
        <section class="bg-slate-800 min-h-screen flex box-border justify-center items-center p-10">
        <div class="bg-white rounded-2xl flex max-w-3xl p-4 items-center">
            <div class="md:w-1/2 px-8">
                <h2 class="font-bold text-3xl text-[#002D74] p-4">Doctor Profile</h2>
    
                <form action="" class="flex flex-col gap-4">
                    <div>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Full Name</label>
                    <input class="p-2 rounded-xl border w-full" type="text" name="pname" id="name" placeholder="FullName"/>
                    </div>
                    <div>
                    <label for="specialist" class="block mb-2 text-sm font-medium text-gray-900">Specialist</label>
                    <input class="p-2 rounded-xl border w-full" type="text" name="special" id="specialist" placeholder="Specialist"/>
                    </div>
                    <div>
                    <label for="age" class="block mb-2 text-sm font-medium text-gray-900">Fee</label>
                    <input class="p-2 rounded-xl border w-full" type="number" name="ageyed" id="age" placeholder="Fee"/>
                    </div>
                    <div>
                    <label for="stime" class="block mb-2 text-sm font-medium text-gray-900">Start Time</label>
                    <input class="p-2 rounded-xl border w-full" type="time" name="stm" id="stime" placeholder="Start Time"/>
                    </div>
                    <div>
                    <label for="etime" class="block mb-2 text-sm font-medium text-gray-900">End Time</label>
                    <input class="p-2 rounded-xl border w-full" type="time" name="etm" id="etime" placeholder="End time"/>
                    </div>
                    <div>
                    <label for="location" class="block mb-2 text-sm font-medium text-gray-900">Location</label>
                    <input class="p-2 rounded-xl border w-full" type="text" name="Loc" id="location" placeholder="Location"/>
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


