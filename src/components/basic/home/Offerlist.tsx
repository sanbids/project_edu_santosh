
import Shadow from "../shadow";
import Offercard from  "./Offercard.tsx"
export default function Offerlist() {
  return (
    <section className="p-10">
      <Shadow className1="right-10" className="top-[1200px]  left-0"/>
        <h1 className="text-3xl font-semibold text-center m-5">Our courses</h1>
      <div className="container mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Offercard
          title="IELTS Preparation"
          description="
        Boost your IELTS score with our comprehensive IELTS preparation course."
        />

        <Offercard
          title="SAT Preparation"
          description="
              Achieve your desired score in SAT with our intensive SAT
              preparation course."
        />

        <Offercard
          title="TOEFL Preparation"
          description="
              Excel in TOEFL with our strategic TOEFL preparation course."
        />

        <Offercard
          title="PTE Preparation"
          description="
              Get personalized PTE coaching with our focused PTE preparation
              course."
        />

        <Offercard
          title="GRE Preparation"
          description="
              Prepare for GRE with our comprehensive and result-oriented GRE
              preparation course."
        />
      </div>
    </section>
  );
}

