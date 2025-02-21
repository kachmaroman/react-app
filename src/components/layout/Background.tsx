import React, { ReactNode } from 'react';

interface BackgroundProps {
  children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => { 
    return <div className='relative isolate flex min-h-svh w-full bg-white max-lg:flex-col lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950'>{children}</div>;
}

export default Background;
