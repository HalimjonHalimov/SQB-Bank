import { Button } from "..";
import Image from "next/image";
import logo from "@/public/logo.png";
import banner2 from "@/public/banner2.png";

export default function MiniBannerTwo() {
  return (
    <div className="p-8 bg-[#E5EBF0] rounded-lg grid grid-cols-2 content-center">
      <div className="flex flex-col justify-center items-start gap-2">
        <div className="text-[#0A1E32] text-3xl font-medium">
            <Image src={logo} alt="" width={100} height={100} className="object-cover"/>
          АКБ Узпромстройбанк
        </div>
        <div className="text-base text-[#0A1E32] font-normal">
          Крупнейший коммерческий банк Узбекистана, история которого перешагнула
          вековой рубеж
        </div>
        <div className="flex justify-start items-center gap-2">
          <Button type={"button"} label={"Подробнее о банке"} />
        </div>
      </div>
      <Image
        src={banner2}
        alt=""
        width={"430px"}
        height={"220px"}
        className="object-contain"
      />
    </div>
  );
}
