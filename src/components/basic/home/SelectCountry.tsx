"use client";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Country from "./Country";


const items = [
  <Country image="austria.jpg" title={"Australia"} descrition="
    Benefits of Studying in Australia:
    
    High-Quality Education: Australian universities consistently rank well in international rankings.
    Career Opportunities: Australia's strong economy offers good job prospects for graduates.
    Lively Culture and Lifestyle: Australia boasts stunning natural landscapes, vibrant cities, and a relaxed lifestyle.
    " />,
  <Country image="canada.jpg" title={"Canada"} descrition="
    Canada has gained recognition as an education destination of choice, known for its high-quality institutions and inclusive society. Canadian universities are esteemed for their research contributions and academic excellence. Whether students are interested in engineering, natural sciences, social sciences, or the arts, Canada offers a broad spectrum of programs. The country's welcoming and multicultural environment ensures international students feel at home. Additionally, Canada's commitment to safety and quality of life provides a conducive atmosphere for learning and personal development. Canadian institutions often provide scholarship opportunities, making it financially feasible for students to pursue their education goals. For those seeking a world-class education in a diverse and welcoming environment, Canada is an excellent option. 
    " />,
  <Country image="state.jpg" title={"United States"} descrition="The United States is a global leader in higher education, home to a diverse and dynamic academic landscape. With renowned universities such as Harvard, MIT, and Stanford, the USA offers an extensive array of programs in various disciplines. Students can immerse themselves in a culture of innovation and research, with access to world-class facilities and faculty. Beyond academics, the USA's diverse society provides a unique opportunity for cross-cultural exchange and personal growth. The country's entrepreneurial spirit and opportunities for internships and practical experience attract students looking to gain a competitive edge in their careers. The USA's influence on various industries and its welcoming atmosphere make it an exceptional choice for international education." />,
  <Country image="united.jpg" title={"United Kingdom"} descrition="The United Kingdom stands as an educational powerhouse, renowned for its prestigious universities and long-standing academic traditions. Home to institutions like the University of Oxford and the University of Cambridge, the UK offers an unmatched educational experience. Students can choose from a wide range of programs spanning arts, sciences, engineering, business, and more. The country's commitment to research and innovation ensures that students have access to cutting-edge advancements in their fields. Additionally, the multicultural environment and historic cities like London and Edinburgh provide a rich backdrop for personal and academic growth. Graduates from UK universities are highly sought after by employers worldwide, making it an ideal destination for those aiming to excel academically and professionally." />,
  <Country image="new.png" title={"New Zealand"} descrition="New Zealand is known for its pristine natural beauty and a strong commitment to education. Its universities are characterized by small class sizes, personalized attention, and a welcoming atmosphere. New Zealand's institutions are respected for their research programs and academic excellence. The country's safe and friendly communities make it an ideal destination for international students, fostering an environment conducive to learning and exploration. Additionally, New Zealand's stunning landscapes offer a backdrop for outdoor adventures such as hiking, skiing, and water sports. Graduates from New Zealand institutions are well-prepared for global careers, thanks to the country's focus on practical skills and innovation. For those seeking an academically enriching experience in a breathtaking natural setting, New Zealand is an excellent choice " />
];

export default function SelectCountry() {
  return (
    <div className="w-full cardbg">
      <div className="container md:mx-auto">
        {/* information */}
        <div>
          <h1 className="text-3xl font-semibold text-center m-3">Choose Your Destination</h1>
        </div>

        {/* country images */}
        <div className="p-4 my-4 rounded-lg shadow-2 ">
          <AliceCarousel
            animationType="slide"
            animationDuration={800}
            disableButtonsControls
            infinite
            items={items}
            mouseTracking
            autoPlay={true}
            autoPlayInterval={5000}
          />
        </div>
      </div>
    </div>
  );
}
