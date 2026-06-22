"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI=new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model=genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
})

//! Generates Cover Letter Using Gemini
export async function generateCoverLetter(data){

    //! Data
    //! JOB TITLE
    // ! JOB DESCRIPTION
    // ! COMPANY NAME
    //!  Will be sent from the user 

      const { userId } = await auth();
      if (!userId) throw new Error("Unauthorized");
    
      const user = await prisma.user.findUnique({
        where: { clerkUserId: userId },
      });
    
      if (!user) throw new Error("User not found");

    const prompt = `
    Write a professional cover letter for a ${data.jobTitle} position at ${
    data.companyName
  }.
    
    About the candidate:
    - Industry: ${user.industry}
    - Years of Experience: ${user.experience}
    - Skills: ${user.skills?.join(", ")}
    - Professional Background: ${user.bio}
    
    Job Description:
    ${data.jobDescription}
    
    Requirements:
    1. Use a professional, enthusiastic tone
    2. Highlight relevant skills and experience
    3. Show understanding of the company's needs
    4. Keep it concise (max 400 words)
    5. Use proper business letter formatting in markdown
    6. Include specific examples of achievements
    7. Relate candidate's background to job requirements
    
    Format the letter in markdown.
  `;

  try{
    const result =await model.generateContent(prompt)
    const response=result.response.text().trim();

    const coverLetter = await prisma.coverLetter.create({
        data:{
            content:response,
            jobDescription:data.jobDescription,
            jobTitle:data.jobTitle,
            status:"completed",
            userId:user.id,
            companyName:data.companyName, 
        }
    });
    return coverLetter;

} catch(error){
    console.error("Failed to generate Cover Letter",error);
    throw new Error("FAiled to generate cover letter",error.message)
}
}



//! Getting all the cover Letters of the user
export async function getCoverLetters(){
    const { userId } = await auth();
      if (!userId) throw new Error("Unauthorized");
    
      const user = await prisma.user.findUnique({
        where: { clerkUserId: userId },
      });
    
      if (!user) throw new Error("User not found");

      const letters  = await prisma.coverLetter.findMany({
        where:{
            userId:user.id
        },
        orderBy:{
            createdAt:"desc",
        }
      });

      return letters;
}


//! Getting each Cover Letter 
export async function getCoverLetter(id) {
      const { userId } = await auth();
      if (!userId) throw new Error("Unauthorized");
    
      const user = await prisma.user.findUnique({
        where: { clerkUserId: userId },
      });
    
      if (!user) throw new Error("User not found");

      const letter = await prisma.coverLetter.findFirst({
        where:{
            id,
            userId:user.id
        },
      }) 
      return letter;
}

//! Deleting the Particular Cover Letter
export async function deleteCoverLetter(id) {
      const { userId } = await auth();
      if (!userId) throw new Error("Unauthorized");
    
      const user = await prisma.user.findUnique({
        where: { clerkUserId: userId },
      });
    
      if (!user) throw new Error("User not found");

              const letter = await prisma.coverLetter.findFirst({
          where:{
            id,
            userId:user.id
          }
        });

        if(!letter){
          throw new Error("Cover Letter not found");
        }

        await prisma.coverLetter.delete({
          where:{
            id
          }
        });
}