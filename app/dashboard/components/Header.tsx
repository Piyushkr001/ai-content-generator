import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between bg-white items-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white'>
            <Search/>
            <input type='text' placeholder="Search..." 
            className='outline-none'
            />
            <div className='flex gap-5 items-center'>
                <h2 className='bg-primary p-1 rounded-full text-white text-xs px-2'>🔥Join Membership just for ₹899/year</h2>
                <UserButton/>
            </div>
        </div>
    </div>
  )
}

export default Header