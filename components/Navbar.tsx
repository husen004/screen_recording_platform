import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='navbar'>
        <nav>
        <Link href="/">
            <Image src="/assets/icons/logo.svg" alt='Logo' width={32} height={32}/>
        </Link>
        </nav>
    </header>
  )
}

export default Navbar