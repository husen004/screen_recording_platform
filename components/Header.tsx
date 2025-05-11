import { ICONS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = ({ subHeader, title, userImg }: SharedHeaderProps) => {
    return (
        <header className='header'>
            <section className="header-container">
                <div className='details'>
                    {userImg && (
                        <Image src={userImg || '/assets/icons/dummy.jpg'} alt='user-profile' width={66} height={66} className='rounded-full' />
                    )}

                    <article>
                        <p className=''>{subHeader}</p>
                        <h1 className=''>{title}</h1>
                    </article>

                    <aside className=''>
                        <Link href='/upload'>
                            <Image src='/assets/icons/upload.svg' alt='upload' width={16} height={16} />
                            <span>
                                Upload Video
                            </span>
                        </Link>
                        <div className='record'>
                            <button className='primary-btn'>
                                <Image src={ICONS.record} alt='record' width={16} height={16} />
                                <span>Record a Video</span>
                            </button>
                        </div>
                    </aside>
                </div>

            </section>
        </header>
    )
}

export default Header   