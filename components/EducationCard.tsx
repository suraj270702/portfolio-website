import React from 'react'
import schoolImg from '../img/lg-school-building-clipart.jpg'
import Image, { StaticImageData } from 'next/image'

const EducationCard = ({name,year,marks,img}:{year:string,marks:string,name:string,img:StaticImageData}) => {
  return (
    <div className='flex flex-col gap-3 bg-white rounded-lg'>
       <Image src={img} alt='' className=" object-cover h-24 rounded-tl-lg rounded-tr-lg" />
       <div className='p-2 text-[#4f4f52] font-medium flex flex-col gap-y-2'>
        <div className='flex items-center justify-between'>
        <h1 className='text-xs'>{year}</h1>
        <h1 className='text-xs'>{marks}</h1>
        </div>
        <h1 className='text-xs'>{name}</h1>

       </div>
    </div>
  )
}

export default EducationCard