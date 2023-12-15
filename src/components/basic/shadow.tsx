import React from 'react'
import Image from 'next/image'

export default function Shadow() {
  return (
      <div>
        <Image
          src="shadow/shadow-1.svg"
          alt="shadow 1"
          width={500}
          height={800}
          className="hero-bg left-0 top-0"
        />
        <Image
          src="shadow/shadow-2.svg"
          alt="shadow 2"
          width={500}
          height={800}
          className="hero-bg right-8"
        />
      </div>
  )
}
