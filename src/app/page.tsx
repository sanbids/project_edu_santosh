import Shadow from "@/components/basic/shadow";
import HeaderContent from "@/components/basic/home/HeaderContent";
import SelectCountry from "@/components/basic/home/SelectCountry";
import Offers from "@/components/basic/home/Offers";

export default function Home() {
  return (
    <div>
      <Shadow />
      <HeaderContent />
      <SelectCountry/>
      <Offers />
    </div>
  );
}
