import Link from 'next/link'
import React from 'react'

export const MenuItems = ({Icon, title, address}) => {
  return (
    <Link className='hover:text-amber-400' href={address}>
        <Icon className='text-2xl sm:hidden' />    
        <p className='uppercase hidden sm:inline'>{title}</p>

    </Link>
  )
}


//gqzpp2251r
