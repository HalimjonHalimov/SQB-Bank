import { Container } from "..";
import Link from "next/link";

export default function Company() {
  return (
    <Container>
      <div className="flex flex-col gap-4 pt-4 my-[4rem] text-[#1D3448]">
        <div className="text-[36px] font-medium text-[#0A1E32]">
          Пресс-центр
        </div>
        <ul className="flex justify-start items-center gap-2 ">
          <li className="border border-[#D2D6DA] py-1 px-3 text-base rounded-full hover:bg-black hover:text-white transition">
            <Link href={"/"}>Объявления</Link>
          </li>
          <li className="border border-[#D2D6DA] py-1 px-3 text-base rounded-full hover:bg-black hover:text-white transition">
            <Link href={"/"}>Новости</Link>
          </li>
          <li className="border border-[#D2D6DA] py-1 px-3 text-base rounded-full hover:bg-black hover:text-white transition">
            <Link href={"/"}>Финансовая аналитика</Link>
          </li>
        </ul>
        <div className="grid grid-cols-3 gap-4">
            <div className="w-[370px] h-auto rounded-md p-4 border border-[#0A1E3233] flex flex-col gap-4">
                <div className="text-xl font-medium">Пресс-тур: 90% продукции направлена на экспорт</div>
                <div className="text-base font-normal">18 ноября текущего года Узпромстройбанком организован очередной пресс-тур для журналистов...</div>
                <div className="text-sm text-[#1D3448] font-medium flex justify-between items-center ">
                    <span className="text-[#D52023]">Подробнее</span>
                    18.11.2022
                </div>
            </div>
            <div className="w-[370px] h-auto rounded-md p-4 border border-[#0A1E3233] flex flex-col gap-4">
                <div className="text-xl font-medium">Пресс-тур: 90% продукции направлена на экспорт</div>
                <div className="text-base font-normal">18 ноября текущего года Узпромстройбанком организован очередной пресс-тур для журналистов...</div>
                <div className="text-sm text-[#1D3448] font-medium flex justify-between items-center ">
                    <span className="text-[#D52023]">Подробнее</span>
                    18.11.2022
                </div>
            </div>
            <div className="w-[370px] h-auto rounded-md p-4 border border-[#0A1E3233] flex flex-col gap-4">
                <div className="text-xl font-medium">Пресс-тур: 90% продукции направлена на экспорт</div>
                <div className="text-base font-normal">18 ноября текущего года Узпромстройбанком организован очередной пресс-тур для журналистов...</div>
                <div className="text-sm text-[#1D3448] font-medium flex justify-between items-center ">
                    <span className="text-[#D52023]">Подробнее</span>
                    18.11.2022
                </div>
            </div>
        </div>
      </div>
    </Container>
  );
}
