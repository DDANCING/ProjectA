"use client";

import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const CourseSidebarChapters = ({
  children
}: { 
  children: React.ReactNode,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex'>
      <div className={`${sidebarOpen ? 'flex' : 'hidden'} flex-col justify-between gap-4`}>
        <div className="w-60 flex-1 isolate aspect-video bg-primary/20 shadow-lg ring-1 ring-black/5">
          {children}
        </div>
      </div>
      <div onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? <ArrowLeft /> : <ArrowRight />}
      </div>
    </div>
  );
};
