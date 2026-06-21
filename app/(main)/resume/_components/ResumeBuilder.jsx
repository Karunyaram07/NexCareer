"use client"
import { saveResume } from '@/actions/resume'
import { useFetch } from '@/app/hooks/useFetch'
import { resumeSchema } from '@/app/lib/schema'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { zodResolver } from '@hookform/resolvers/zod'
import { Download, Save } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import EntryForm from './EntryForm'
import { Textarea } from '@/components/ui/textarea'

const ResumeBuilder = ({initialContent}) => {
  const [activeTab,setActiveTab] = useState("edit")

  //! Takes the resume Schema and verifies the fields via ZOD Validation
  //! useForm as used in the Onboarding Form as per schema
  const {control,
    register,
    handleSubmit,
    watch,
    formState:{errors},
  }= useForm({
    resolver:zodResolver(resumeSchema),
    defaultValues: { //!Initial shape of form data
      contactInfo: {},
      summary: "",
      skills: "",
      experience: [],
      education: [],
      projects: [],
    },
  });

  //! Passing the saveResume Server Action 
  //! through UseFetch Custom Hook which gives implemented function with arguments and other checks such as loading,error,data

  const{
    loading:isSaving,
    fn:saveResumeFn,
    data:saveResult,
    error:saveError,
  } = useFetch(saveResume);

  //! We need to watch the each fields to 
  //! correspondingly change to the markdown file
  const formValues = watch(); 
   
  //! If there is already some content in the form,
  //! Directly showing the MarkDown File......
  useEffect(()=>{
    if(initialContent) setActiveTab("preview");
  },[initialContent])


  const onSubmit=()=>{}
  return (
    <div>
    <div data-color-mode="light" className="space-y-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2">
        <h1 className="font-bold gradient-title text-5xl md:text-6xl">
          Resume Builder
        </h1>

        <div className='space-x-2'>
        <Button variant="destructive">
          <Save className='h-4 w-4' />
          Save
        </Button>
        <Button>
          <Download className='h-4 w-4' />
          Download PDF
        </Button>
        </div>

         
        </div>
        </div>

    <Tabs value={activeTab} onValueChange={setActiveTab}>
    <TabsList >
      <TabsTrigger value="edit">Form</TabsTrigger>
      <TabsTrigger value="preview">Markdown</TabsTrigger>
    </TabsList>


            <TabsContent value="edit">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Contact Information</h3>
              {/*  
                    //!   contactInfo: {           // Object
                    //!   email: "",
                    //!   mobile: "",
                    //!   linkedin: "",
                    //!   twitter: ""
                    //! },
                    //! summary: "",             // String
                    //! skills: "",              // String
              */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-lg bg-muted/50">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                  //! Stores email  inside the email of contactInfo object
                  //!  with the defined contact schema
                  //! As contactInfo is the Object
                    {...register("contactInfo.email")} 
                    type="email"
                    placeholder="your@email.com"
                    error={errors.contactInfo?.email}
                  />
                  {errors.contactInfo?.email && (
                    <p className="text-sm text-red-500">
                      {errors.contactInfo.email.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Mobile Number</label>
                  <Input
                   //! Stores MobileNumber  inside the mobile of contactInfo object
                  //!  with the defined contact schema
                  //! As contactInfo is the Object
                    {...register("contactInfo.mobile")}
                    type="tel"
                    placeholder="+1 234 567 8900"
                  />
                  {errors.contactInfo?.mobile && (
                    <p className="text-sm text-red-500">
                      {errors.contactInfo.mobile.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">LinkedIn URL</label>
                  <Input
                   //! Stores email  inside the linkedin of contactInfo object
                  //!  with the defined contact schema
                  //! As contactInfo is the Object
                    {...register("contactInfo.linkedin")}
                    type="url"
                    placeholder="https://linkedin.com/in/your-profile"
                  />
                  {errors.contactInfo?.linkedin && (
                    <p className="text-sm text-red-500">
                      {errors.contactInfo.linkedin.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Twitter/X Profile
                  </label>
                  <Input
                   //! Stores email  inside the twitter of contactInfo object
                  //!  with the defined contact schema
                  //! As contactInfo is the Object
                    {...register("contactInfo.twitter")}
                    type="url"
                    placeholder="https://twitter.com/your-handle"
                  />
                  {errors.contactInfo?.twitter && (
                    <p className="text-sm text-red-500">
                      {errors.contactInfo.twitter.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Professional Summary</h3>
              {/* 
              //! React Hook Forms Works well with the Native HTML Elements
              //! But not with the SHADCN UI
              //! SO we use Controller to solve this issue
              //!  here the contol parameter comes into play...... 
              //! in which we fetched it from the useForm

              //! <Textarea
              //!   value={field.value}
              //!   onChange={field.onChange}
              //!   onBlur={field.onBlur}
              //!   name={field.name}
              //! 
 />
              */}
              <Controller
                name="summary"
                control={control}
                render={({ field }) => (
                  //!  {
                 //!   value: "",
                 //!   onChange: fn,
                 //!   onBlur: fn,
                 //!   name: "summary"}
                  <Textarea
                    {...field}
                    className="h-32"
                    placeholder="Write a compelling professional summary..."
                    error={errors.summary}
                  />
                )}
              />
              {errors.summary && (
                <p className="text-sm text-red-500">{errors.summary.message}</p>
              )}
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Skills</h3>
              <Controller
                name="skills"
                control={control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    className="h-32"
                    placeholder="List your key skills..."
                    error={errors.skills}
                  />
                )}
              />
              {errors.skills && (
                <p className="text-sm text-red-500">{errors.skills.message}</p>
              )}
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Work Experience</h3>
              <Controller
                name="experience"
                control={control}
                render={({ field }) => (
                  <EntryForm
                    type="Experience" //!Feeding Type whether it's experience or work or education
                    entries={field.value}//! Feeding Prop value to the EntryForm
                    onChange={field.onChange} //! Feeding prop value to the Entry Form
                  />
                )}
              />
              {errors.experience && (
                <p className="text-sm text-red-500">
                  {errors.experience.message}
                </p>
              )}
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Education</h3>
              <Controller
                name="education"
                control={control}
                render={({ field }) => (
                  <EntryForm
                    type="Education"
                    entries={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              {errors.education && (
                <p className="text-sm text-red-500">
                  {errors.education.message}
                </p>
              )}
            </div>

            {/* Projects */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Projects</h3>
              <Controller
                name="projects"
                control={control}
                render={({ field }) => (
                  <EntryForm
                    type="Project"
                    entries={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              {errors.projects && (
                <p className="text-sm text-red-500">
                  {errors.projects.message}
                </p>
              )}
            </div>
          </form>
        </TabsContent>
    <TabsContent value="preview">Change your password here.</TabsContent>
  </Tabs>


        </div>

        
  )
}

export default ResumeBuilder