'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const VideoCard = ({
  id,
  title,
  thumbnail,
  createdAt,
  userImg,
  username,
  views,
  visibility,
  duration,
}: VideoCardProps) => {
  return (
    <Link href={`/video/${id}`} className='video-card'>
      <Image src={thumbnail} alt='thumbnail' width={290} height={190} className='thumbnail' />
      <article>
        <div>
          <figure>
            <Image src={userImg || "/aasets/images/jason.png"} alt='userImg' width={34} height={34} className='rounded-full aspect-square' />
            <figcaption>
              <h3>{username}</h3>
              <p>{visibility}</p>
            </figcaption>
          </figure>
          <aside className=''>
            <Image src='/assets/icons/eye.svg' alt='eye' width={16} height={16} />
            <span>{views}</span>
          </aside>
        </div>
        <h2>
          {title} - {" "} {createdAt.toLocaleDateString("en-US", {
            year: 'numeric',
            month: 'short',
            day: "numeric"
          })}
        </h2>
        <button onClick={() => { }} className='copy-btn'>
          <Image src={'/assets/icons/link.svg'} alt='link' width={18} height={18} />
        </button>
        {duration && (
          <div className='duration'>
            {Math.ceil(duration / 60)}min
          </div>
        )}

      </article>
    </Link>
  )
}

export default VideoCard