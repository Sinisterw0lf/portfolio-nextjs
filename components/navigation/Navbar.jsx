import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='p-5 font-semibold fixed top-0 left-0 w-full'>
        <div className='flex justify-between '>
          <Link href='/'>Cyril B.</Link>  
          <div className='space-x-5 uppercase'>
            <Link href='/'>A propos de moi</Link>
            <Link href='/'>Mes réalisations</Link>
            <Link href='/'>Contact</Link>
          </div>
        </div>
        
    </div>
  )
}
