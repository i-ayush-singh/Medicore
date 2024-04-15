import React from "react";
import { Request } from "../components/RequestCard"

export function Requests(){
return (
    <div class="bg-slate-800">
        <div class="p-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 h-full">
        <div class="p-2">
                <Request></Request></div>
                <div class="p-2">
                <Request></Request></div>
                <div class="p-2">
                <Request></Request></div>
                <div class="p-2">
                <Request></Request></div>
        </div>
    </div>
    )
}