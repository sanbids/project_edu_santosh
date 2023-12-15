import React from "react";
import { Button } from "@/components/ui/button";
export default function HeaderContent() {
  return (
    <header className="flex justify-between items-center py-16 px-2">
      <div className="max-w-xl space-y-6">
        <h1 className="text-6xl font-bold readHeading">
          Hello! I'm <span className="span">Santosh Pokhrel</span>{" "}
        </h1>
        <p className="text-xl">Founder of Bravo International Education</p>
        <p className="text-gray-400">
          We provide comprehensive consultancy services to students interested
          in studying abroad. Explore new opportunities, broaden your horizons,
          and make your dreams come true.
        </p>
        <blockquote className="italic border-l-4 pl-4 border-gray-500 text-gray-300">
          "If you can't explain it simply, you don't understand it well enough.
          by sandesh shahi"
        </blockquote>
        <div className="flex space-x-4">
          <Button className="shadow-2">Join us</Button>
          <Button
            className="border-gray-500 shadow-2 text-gray-500 hover:border-gray-400 hover:text-gray-400"
            variant="outline"
          >
            Start Tour
          </Button>
        </div>
      </div>
      <div className="hidden lg:block">
        <img
          alt="Santosh img"
          className="h-[400px] w-[300px] object-cover rounded-lg"
          height="400"
          src="/placeholder.svg"
          style={{
            aspectRatio: "300/400",
            objectFit: "cover",
          }}
          width="300"
        />
      </div>
    </header>
  );
}
