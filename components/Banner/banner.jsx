import Image from "next/image";
import banner from "@/public/banner.png";
import { Button, Container } from "..";

export default function Banner() {
  return (
    <div className="w-full h-[500px] bg-[#E5EBF0]">
      <Container>
        <div className="relative flex justify-start gap-16 items-center">
          <div className="w-[567px] h-auto flex flex-col justify-start items-start gap-2">
            <div className="text-[46px] text-[#0A1E32] font-semibold">Кредит “MIKRO”</div>
            <div className="w-[332px] text-xl text-[#0A1E32CC] font-normal">Кредит на любые цели в эквиваленте до 500 000 $</div>
            <div className="flex justify-start items-center gap-4 mt-4">
                <Button type={'button'} label={'Оформить'}/>
                <Button type={'button'} label={'Подробнее'}/>
            </div>
          </div>
          <div className="w-[438px] h-[432px]">
            <Image
              src={banner}
              alt=""
              width={"100%"}
              height={"100%"}
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-8 left-[50%] translate-x-[-50%] w-[300px] h-auto">
            <ul className="w-full h-auto flex justify-between items-center">
                <li className="w-[66px] h-[2px] bg-[#003D64] hover:bg-[#003D64] transition cursor-pointer"></li>
                <li className="w-[66px] h-[2px] bg-[#0A1E3233] hover:bg-[#003D64] transition cursor-pointer"></li>
                <li className="w-[66px] h-[2px] bg-[#0A1E3233] hover:bg-[#003D64] transition cursor-pointer"></li>
                <li className="w-[66px] h-[2px] bg-[#0A1E3233] hover:bg-[#003D64] transition cursor-pointer"></li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
