"use client"
import React, { useState } from "react";


import {
    AlertDialog,
  
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
   
  } from "@/components/ui/alert-dialog"
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function AddNewInterview() {
    const [openDailog, setOpenDailog] =useState(false)
    const [jobPosition,setJobPosition]=useState();
    const [jobDesc,setJobDesc]=useState();
    const [jobExperience,setJobExperience]=useState();
     
    const onSubmit=(e)=>{
      e.preventDefault()
      console.log(setJobPosition, jobDesc,jobExperience)

    }
    return (
        <div>
            <div className="p-10 border rounded-lg bg-secondary
            hover:scale-105 hover:shadow-md cursor-pointer 
            transition-all"
            onClick={()=>setOpenDailog(true)}
            >
                <h2 className="text-lg text-center">+ Add New</h2>
            </div>

            <AlertDialog open={openDailog}>

          <AlertDialogContent className="max-w-2xl">
               <AlertDialogHeader>
              <AlertDialogTitle className="text-2xl">Tell us more about your job interviewing</AlertDialogTitle>
      <AlertDialogDescription>
        <form onSubmit={onSubmit}>
      <div>
     
        <h2>Add Details about your job position/role, job description and years of experience</h2>

        <div className="mt-7 my-3">
        <label>Job Role/Job Position</label>
        <Input placeholder="Ex. Full Stack Developer" required
        onChange={(event)=>setJobPosition(event.target.value)}
        />

        </div>
        <div className="my-3">
        <label>Job Description/ Tech Stack (In Short)</label>
        <Textarea placeholder="Ex. Typescript, React, NextJs, NodeJs, MySql extc"
           required
           onChange={(event)=>setJobDesc(event.target.value)}
        />
        </div>
        <div className="my-3">
        <label>Years of experience</label>
        <Input placeholder="Ex.5" type="number" max="100" 
        required
        onChange={(event)=>setJobExperience(event.target.value)}
        />
        </div>
      </div>
        <div className="flex gap-5 justify-end">
        <Button type="button"  variant="ghost" onClick={()=>setOpenDailog(false)}>Cancel</Button>
        <Button type="submit">Start Interview</Button>
     </div>
     </form>
      </AlertDialogDescription>
       </AlertDialogHeader>
     </AlertDialogContent>
    </AlertDialog>


        </div>
    )
}

export default AddNewInterview