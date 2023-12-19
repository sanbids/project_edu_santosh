import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  style: "normal",
  subsets: ["devanagari"]
})

export default function Country({
  image,
  title,
  descrition,
}: {
  image: string;
  title: string;
  descrition: string;
}) {
  return (
    <div className="container flex flex-col md:flex-row gap-y-5 gap-x-12 h-full">
      <div className="basis-1/3">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={`/country/${image}`}
            fill
            alt="Image"
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
      <div className="basis-2/3 flex flex-col gap-y-5">
        <h1 className="span text-3xl">{title}</h1>
        <p className={poppins.className, "text-lg"}>{descrition}</p>

        <div className="flex justify-evenly items-center mt-5">
          <Button className="shadow-1">Join Us</Button>
          <Button className="shadow-1">know more</Button>
        </div>
      </div>
    </div>
  );
}
