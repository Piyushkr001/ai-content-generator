'use client'
import React from 'react'
import SideNav from './components/SideNav';
import Header from './components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    const [totalUsage,setTotalUsage] = React.useState(0);
    return (
        <TotalUsageContext value={{totalUsage,setTotalUsage}}>
        <div className='bg-slate-200 min-h-screen'>
            <div className='md:w-64 hidden md:block fixed'>
                <SideNav/>
            </div>
           <div className='md:ml-64'>
            <Header/>
           {children}
           </div>
        </div>
        </TotalUsageContext>
    )
}

export default layout