import { getCoverLetters } from '@/actions/coverletter'
import React from 'react'
import CoverLetterList from './_components/coverletter-list';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const AICoverLetter = async() => {
  const coverLetters = await getCoverLetters();

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between mb-5">
        <h1 className="text-6xl font-bold gradient-title">My Cover Letters</h1>
        <Link href="/ai-cover-letters/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create New
          </Button>
        </Link>
      </div>

      <CoverLetterList coverLetters={coverLetters} /> 
      {/* 
      //! Rendering all the cover Letters of user onto the Main Page
       */}
    </div>)
}


export default AICoverLetter