import Header from '@/components/Header';
import React from 'react'

const page = async ({ params }: ParamsWithSearch) => {
    const { id } = await params;

  return (
    <div className='text-2xl font-karla'>
        <Header subHeader='husenikary@mail.ru' title='Husen | Ikary' userImg='/assets/images/dummy.jpg' />
        {id}
    </div>
  )
}

export default page