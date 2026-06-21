"use client"
import { entrySchema } from '@/app/lib/schema';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { PlusCircle } from 'lucide-react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const EntryForm = ({type,entries,onChange}) => {
    const [isAdding,setIsAdding] = useState(false);

      const {control,
        register,
        handleSubmit:handleValidation,
        watch,
        formState:{errors},
        reset
      }= useForm({
        resolver:zodResolver(entrySchema),
        defaultValues: { //!Initial shape of form data
            title: "",
              organization: "",
              startDate: "",
              endDate: "",
              description: "",
              current: false,
        },
      });

      const current = watch("current");
  return (
    <div>

        {/* 
        //! If USer clicks on Plus button then isAdding becomes true
        //!Then we will render the following Form  
         */}

        {isAdding &&(
            <Card>
  <CardHeader>
    <CardTitle>Add {type}</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <div>
           <div className='space-y-2'>
            <Input
            placeholder="Title/Position"
            {...register("title")} //!Store the title in the entrySchema...
            error={errors.title}
            />
            {/* 
            //! Displaying Errors with Red ParaGraph
            */}
            {errors.title && (
                <p className='text-sm text-red-500'>
                    {errors.title.message}
                </p>
            )}
            
            </div> 

           <div className='space-y-4'>
            <Input
            placeholder="Organisation/Company"
            {...register("organization")} //!Store the title in the entrySchema...
            error={errors.organization}
            />
            {/* 
            //! Displaying Errors with Red ParaGraph
            */}
            {errors.organization && (
                <p className='text-sm text-red-500'>
                    {errors.organization.message}
                </p>
            )}
            
            </div> 
    </div>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
        )}


        {!isAdding && (
            
            <Button
            className={'w-full'}
            variant='outline'
            onClick = {()=>setIsAdding(true)}
            >
                {/* 

//!  User is wants adding a new Experience/Education/Project entry.
//! Then Show a Plus BUtton
*/}
                <PlusCircle className='h-4 w-4 mr-2' />
                Add {type}
            </Button>
        )}


    </div>
  )
}

export default EntryForm