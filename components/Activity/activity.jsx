import { Container } from "..";
import Image from "next/image";
import money from "@/public/money.png";
import solarPanel from "@/public/solarpanel.png";

export default function Activity() {
  return (
    <Container>
      <div className="flex flex-col gap-4 pt-4 my-[4rem]">
        <div className="text-[36px] font-medium text-[#0A1E32]">
          Актуально сейчас
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative w-full h-full bg-[#F2F5F8] rounded p-8 flex flex-col gap-4 pb-[100px]">
            <div className="w-[425px] h-auto text-[#283C4F] text-3xl font-medium">
              MIKRO кредит на любые цели вашего бизнеса
            </div>
            <div className="grid grid-cols-2 gap-4 z-10">
              <div className="flex flex-col gap-4 justify-start items-start bg-[#FFFFFF99] p-6 rounded text-base font-normal text-[#283C4F]">
                <span className="text-[46px] text-[#D52023] font-medium">
                  {" "}
                  21% <span className="text-2xl"></span>
                </span>
                <span className="w-[183px] h-auto">
                  Минимальная кредитная ставка
                </span>
              </div>
              <div className="flex flex-col gap-4 justify-start items-start bg-[#FFFFFF99] p-6 rounded text-base font-normal text-[#283C4F]">
                <span className="text-[46px] text-[#D52023] font-medium">
                  {" "}
                  5 <span className="text-2xl">лет</span>
                </span>
                <span className="w-[183px] h-auto">
                  Максимальный срок кредита
                </span>
              </div>
              <div className="col-span-2 flex flex-col gap-4 justify-start items-start bg-[#FFFFFF99] p-6 rounded text-base font-normal text-[#283C4F]">
                <span className="text-[46px] text-[#D52023] font-medium">
                  {" "}
                  500 000 $ <span className="text-2xl"></span>
                </span>
                <span className="w-[183px] h-auto">
                  Максимальная сумма выплаты кредита в эквиваленте
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 z-10">
              <button
                type="button"
                className="w-[264px] h-[45px] rounded hover:bg-[#004D7E] border border-[#004D7E] bg-white  text-base font-semibold hover:text-white text-[#004D7E] transition"
              >
                Получить консультацию
              </button>
              <button
                type="button"
                className="w-[264px] h-[45px] rounded hover:bg-[#004D7E] border border-[#004D7E] bg-white  text-base font-semibold hover:text-white text-[#004D7E] transition"
              >
                Подробнее
              </button>
            </div>
            <Image
              src={money}
              alt=""
              width={'410px'}
              height={'360px'}
              className="absolute bottom-0 z-0 right-0 object-cover"
            />
          </div>
          <div className="relative w-full h-full bg-[#F2F5F8] rounded p-8 flex flex-col gap-4 pb-[100px]">
            <div className="w-[425px] h-auto text-[#283C4F] text-3xl font-medium">
              MIKRO кредит на любые цели вашего бизнеса
            </div>
            <div className="grid grid-cols-2 gap-4 z-10">
              <div className="col-span-2 flex flex-col gap-4 justify-start items-start bg-[#FFFFFF99] p-6 rounded text-base font-normal text-[#283C4F]">
                <span className="text-[46px] text-[#D52023] font-medium">
                  {" "}
                  500 000 $ <span className="text-2xl"></span>
                </span>
                <span className="w-[183px] h-auto">
                  Максимальная сумма выплаты кредита в эквиваленте
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 z-10">
              <button
                type="button"
                className="w-[264px] h-[45px] rounded hover:bg-[#004D7E] border border-[#004D7E] bg-white  text-base font-semibold hover:text-white text-[#004D7E] transition"
              >
                Получить консультацию
              </button>
              <button
                type="button"
                className="w-[264px] h-[45px] rounded hover:bg-[#004D7E] border border-[#004D7E] bg-white  text-base font-semibold hover:text-white text-[#004D7E] transition"
              >
                Подробнее
              </button>
            </div>
            <Image
              src={solarPanel}
              alt=""
              width={'410px'}
              height={'360px'}
              className="absolute bottom-0 z-0 right-0 object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
