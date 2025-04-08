"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import {
    AlertDialog,
  
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
   
  } from "@/components/ui/alert-dialog"
  



function AddNewInterview() {
    const [openDailog, setOpenDailog] =useState(false)
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

          <AlertDialogContent>
               <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
        <div className="flex gap-5 justify-end">
        <Button variant="ghost" onClick={()=>setOpenDailog(false)}>Cancel</Button>
        <Button>Start Interview</Button>
           
            

        </div>
      </AlertDialogDescription>
       

    </AlertDialogHeader>
     </AlertDialogContent>
    </AlertDialog>


        </div>
    )
}

export default AddNewInterview