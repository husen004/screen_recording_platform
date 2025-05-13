import Header from '@/components/Header'
import VideoCard from '@/components/VideoCard'
import React from 'react'

const Page = () => {
  return (
    <main className='wrapper page'>
      <Header title='All videos' subHeader='Public Library' />

      <VideoCard 
      id="1"
      title="husen" 
      thumbnail="/assets/samples/thumbnail (1).png" 
      createdAt={new Date("2020-02-10 16:34:34") }
      userImg="/assets/images/dummy.jpg" 
      username="husen"
      views={10} 
      visibility="public" 
      duration={156} 
      />
    </main>
  )
}

export default Page