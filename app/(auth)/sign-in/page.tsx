import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className='sign-in'>

      <aside className='testimonial'>
        <Link href="/">
          <Image src="/assets/icons/logo.svg" alt='sign-in-logo' width={32} height={32} />
          <h1>SnapCast</h1>
        </Link>
      </aside>

      <div className='description'>

        <section>

          <figure>

            {Array.from({ length: 5 }).map((_, index) => (
              <Image src="/assets/icons/star.svg" alt='star' width={20} height={20} key={index} />
            ))}
          </figure>
          <p>SnapCast makes screen recording easy. From quick walkthroughs to full presentations, it`s fast, smooth, and shareable in seconds</p>
          <article>
            <Image src={'/assets/images/jason.png'} alt='jason-profile' width={64} height={64} className='rounded-full'/>
            <div>
              <h2>
                Jason Rivera
              </h2>
              <p>Product Designer, at NoveTech</p>
            </div>
          </article>
        </section>
        <p>© SnapTech {new Date().getFullYear()}</p>
      </div>
    </main>
  )
}

export default page