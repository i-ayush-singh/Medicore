import React from "react";
import { ReportCard }  from "../components/ReportCard"

export function ViewAllReport(){
    return (
        <div class="bg-gray-200 col-span-3">
          <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ">
                <div class="p-3">
                <ReportCard
                />

                </div>
                <div class="p-3">
                <ReportCard
                />

                </div>
                <div class="p-3">
                <ReportCard
                />

                </div>
              )
          </div>
        </div>
    )
}