import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <AiFillYoutube /> },
    { icon: <BiLogoPinterestAlt /> },
  ];
  return (
    <>
      <footer className="cardbg rounded-xl mt-5">
        <div className="container md:mx-auto pt-10 pb-3">
          {/* footer div all */}
          <div className="flex justify-between flex-col md:flex-row  w-full md:items-start  md:gap-[5rem]">
            {/* logo side */}
            <div className="flex flex-col md:w-1/2 md:p-0 py-4 gap-8 w-full">
              <h1 className="text-6xl text-center md:text-start md:text-7xl span font-bold">Bravo</h1>
              <p className="text-[15px] font-medium dark:text-slate-400">
                Established in 2018, we have been tirelessly guiding and
                assisting our valued students and clients en route to their
                dreams. We are a complete package that offer an insightful
                counselling, a creative study ambience, result-oriented learning
                experience, detailed documentation, and careful visa processing.
                We make sure that our clients receive our unwavering support
                while upholding professionalism and proper value.
              </p>
              {/* socials */}
              <div className="flex gap-7 text-[18px] justify-center text-slate-800 md:justify-start">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-sky-500/90 hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>
              {/* <p className="text-[16px] font-medium text-[#646464]"> */}
              {/*   Privacy Policy | © {new Date().getFullYear()} Bravo <br />{" "} */}
              {/*   Design by */}
              {/*   <a */}
              {/*     target="_blank" */}
              {/*     className="dark:hover:text-white" */}
              {/*     rel="noreferrer" */}
              {/*     href="https://www.github.com/sanbids" */}
              {/*   > */}
              {/*     sandesh */}
              {/*   </a> */}
              {/* </p> */}
            </div>

            <div className="flex gap-x-8 justify-evenly lg:gap-x-28">
              {/* middle div */}
              <div className="flex flex-col gap-4 relative">
                <p className="text-[22px] font-bold footer-main">Our Classes</p>

                <span className="top-[33px] absolute w-[8.5rem] h-[4px] bg-sky-700"></span>

                <p className="text-[16px] hover:text-sky-600 cursor-pointer text-gray-400 font-medium hover:font-bold">
                  IELTS Classes
                </p>
                <p className="text-[16px] hover:text-sky-600 cursor-pointer text-gray-400 font-medium hover:font-bold">
                  SAT Classes
                </p>
                <p className="text-[16px] hover:text-sky-600 cursor-pointer text-gray-400 font-medium hover:font-bold">
                  TOEFL Classes
                </p>
                <p className="text-[16px] hover:text-sky-600 cursor-pointer text-gray-400 font-medium hover:font-bold">
                  PTE Classes
                </p>
                <p className="text-[16px] hover:text-sky-600 cursor-pointer text-gray-400 font-medium hover:font-bold">
                  GRE Classes
                </p>
              </div>

              {/* right div */}
              <div className="flex flex-col gap-4 relative">
                <p className="text-[22px] font-bold footer-main">Class Time</p>

                <span className="top-[33px] absolute w-[9rem] h-[4px] bg-sky-500/80"></span>

                <p className="text-[16px] text-blue-400  font-bold">
                  Monday - Friday:
                </p>
                <p className="text-[16px] text-gray-400 font-medium">
                  7:00am - 21:00pm
                </p>
                <p className="text-[16px] text-blue-400 font-bold">Saturday:</p>
                <p className="text-[16px] text-gray-400 font-medium">
                  7:00am - 19:00pm
                </p>
                <p className="text-[16px] text-blue-400 font-bold ">
                  Sunday - Closed
                </p>
              </div>
            </div>

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
