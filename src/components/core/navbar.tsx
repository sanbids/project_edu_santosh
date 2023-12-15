import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BookOpen, ChevronDown, GraduationCap } from "lucide-react"
import { Button } from "../ui/button"
import { ModeToggle } from "../theme/toggleTheme"

export default function Navbar() {
  return (
    <div className="flex justify-between 
       h-20 w-full items-center bg-opacity-30 backdrop-filter backdrop-blur-md
     border-b
      ">
      {/* logo */}
      <div>
        <h1 className="text-3xl font-bold">Bravo</h1>
      </div>

      {/* navigation part */}
      <div>
        <ul className="flex gap-x-3 text-lg">
          <Link href="/">Home</Link>
          <Link href="/about">About us</Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-x-1 items-center focus:outline-none rounded hover:bg-sky-300/80 dark:hover:bg-sky-600/80 px-2 py-1 duration-200 transition">Study Aboard
              <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="flex justify-center text-xl items-center gap-x-2">
                <GraduationCap />
                Country
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Australia</DropdownMenuItem>
              <DropdownMenuItem>United kingdom</DropdownMenuItem>
              <DropdownMenuItem>Cananda</DropdownMenuItem>
              <DropdownMenuItem>United State</DropdownMenuItem>
              <DropdownMenuItem>New Zealand</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex gap-x-1 items-center focus:outline-none rounded hover:bg-sky-300/80 dark:hover:bg-sky-600/80 px-2 py-1 duration-200 transition">
              Prepare with us
              <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="flex text-xl justify-center items-center gap-x-2">
                <BookOpen />
                Course
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>SAT</DropdownMenuItem>
              <DropdownMenuItem>IETS</DropdownMenuItem>
              <DropdownMenuItem>TOEFL</DropdownMenuItem>
              <DropdownMenuItem>PTE</DropdownMenuItem>
              <DropdownMenuItem>GRE</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ul>


      </div>

      {/* action parts */}
      <div className="flex gap-x-2">
        <Button>Login</Button>
        <Button>Register</Button>
        <ModeToggle />
      </div>

    </div>
  )
}

