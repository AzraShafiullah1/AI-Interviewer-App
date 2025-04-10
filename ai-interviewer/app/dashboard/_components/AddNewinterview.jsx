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
import { useUser } from '@clerk/nextjs'
import {chatSession} from '@/utils/GeminiAIModal'
import {db} from '@/utils/db'
import {AiInterview} from '@/utils/schema'
import { LoaderCircle } from "lucide-react"; 
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment'


function AddNewInterview() {
    const [openDailog, setOpenDailog] =useState(false)
    const [jobPosition,setJobPosition]=useState();
    const [jobDesc,setJobDesc]=useState();
    const [jobExperience,setJobExperience]=useState();
    const [loading,setLoading]=useState(false);
    const [jsonResponse,setJsonResponse]=useState([]);
    const {user}=useUser();
    const onSubmit=async(e)=>{
      setLoading(true)
      e.preventDefault()
      console.log(jobPosition,jobDesc,jobExperience)

     const InputPrompt="Job position: "+jobPosition+", Job Description:"+jobDesc+", Year of Experience:"+jobExperience+" Depends on Job Position, Job Description & Years of Experience give us "+process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT+" Interview Question alog with Answered in JSON format Give us question and answer field on JSON"

     const result=await chatSession.sendMessage(InputPrompt);
     const AiJsonResp=(result.response.text()).replace('```json','').replace('```','')
     console.log(JSON.parse(AiJsonResp));
     setJsonResponse(AiJsonResp);

     if(AiJsonResp)
     {

     const resp=await db.insert(AiInterview)
     .values({
      aiId:uuidv4(),
      jsonAiResp:AiJsonResp,
      jsonPosition:jobPosition,
      jobDesc:jobDesc,
      jobExperience:jobExperience,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      createdAt:moment().format('DD-MM-yyy')
     }).returning({aiId:AiInterview.ai.Id})

     console.log("Inserted ID:",resp)
     }
     else{
          console.log("ERROR");
          
     }
     setLoading(false);
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
        <Textarea placeholder="Ex.ReactJS, NextJs, NodeJs, MySql extc"
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
        <Button type="button" variant="ghost" onClick={()=>setOpenDailog(false)}>Cancel</Button>
        <Button type="submit" disabled={loading} >
          {loading?
          <>
          <LoaderCircle className='animate-spin'/>'Generating from AI'
          </>:'Start Interview'
          }
          </Button>
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