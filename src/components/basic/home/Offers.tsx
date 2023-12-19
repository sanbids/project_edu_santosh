import { AspectRatio } from '@/components/ui/aspect-ratio'
import React from 'react'
import Image from "next/image"
import Offerlist from './Offerlist'


export default function Offers() {
  return (
    <div className='flex gap-4'>
      <div className="basis-1/3">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={`/khaby.png`}
            fill
            alt="Image"
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    <div className='cardbg  basis-2/3'>
        <div>
          <Offerlist/>
        </div>
    </div>
    </div>
  )
}
