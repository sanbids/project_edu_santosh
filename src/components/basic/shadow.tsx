import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function Shadow({ className="", className1="" }: {
  className: string,
  className1: string
}) {
  return (
    <div>
      <Image
        src="shadow/shadow-1.svg"
        alt="shadow 1"
        width={500}
        height={800}
        className={cn( "hero-bg left-0 top-0", className)}
        />
      <Image
        src="shadow/shadow-2.svg"
        alt="shadow 2"
        width={500}
        height={800}
        className={cn( "hero-bg right-24 top-30", className1)}
        />
    </div>
  )
}
