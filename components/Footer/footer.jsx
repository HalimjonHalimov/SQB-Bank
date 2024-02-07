import { Container } from "..";
import Image from "next/image";
import Link from "next/link";
import SQBLogo from "@/public/SQB-logo.png";
import JoydaLogo from "@/public/Joyda-logo.png";
import apple from "@/public/apple.png";
import google from "@/public/google.png";
import iso from "@/public/iso.png";

export default function Footer() {
  return (
    <div className="w-full h-auto py-8 bg-[#0A1E32] mt-[80px]">
      <Container>
        <div className="grid grid-cols-6 gap-y-10 items-start text-xs font-normal text-[#FFFFFF]">
          <Image
            src={SQBLogo}
            alt=""
            width={200}
            height={200}
            className=" object-cover col-span-2"
          />
          <ul className="flex flex-col gap-2">
            <li>
              <Link href={"/"}>О Банке</Link>
            </li>
            <li>
              <Link href={"/"}>Пресс-центр</Link>
            </li>
            <li>
              <Link href={"/"}>Тарифы</Link>
            </li>
            <li>
              <Link href={"/"}>Реквизиты</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href={"/"}>Права клиента </Link>
            </li>
            <li>
              <Link href={"/"}>Открытые данные</Link>
            </li>
            <li>
              <Link href={"/"}>Карта сайта</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href={"/"}>Виртуальная приемная </Link>
            </li>
            <li>
              <Link href={"/"}>Раскрытие информации</Link>
            </li>
            <li>
              <Link href={"/"}>Вакансии</Link>
            </li>
          </ul>
          <div className="flex flex-col justify-start items-start gap-2">
            <Image
              src={JoydaLogo}
              alt=" "
              width={180}
              height={100}
              className="object-cover"
            />
            <div className="flex justify-between items-center gap-2">
              <button
                type="button"
                className="hover:opacity-75 transition w-[80px] h-[24px] flex justify-start items-center gap-2 border-none outline-none rounded"
              >
                <Image
                  src={apple}
                  alt=""
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </button>
              <button
                type="button"
                className="hover:opacity-75 transition w-[80px] h-[24px] flex justify-start items-center gap-2 border-none outline-none rounded"
              >
                <Image
                  src={google}
                  alt=""
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </button>
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-2 items-start justify-start">
            <div className="max-w-[280px] flex flex-col gap-1 items-start justify-start">
              <span className="text-[#878B90]">Адрес головного офиса:</span>
              Узбекистан, г.Ташкент, 100000, ул. Шахрисабзская, 3
            </div>
            <div className="max-w-[280px] flex flex-col gap-1 items-start justify-start">
              <span className="text-[#878B90]">Электронная почта:</span>
              info@sqb.uz
            </div>
            <div className="max-w-[280px] flex flex-col gap-1 items-start justify-start">
              <span className="text-[#878B90]">Лицензия: </span>
              ЦБ РУз на осуществление банковских операции № 17 от 25 декабря
              2021 г.
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-4 items-start justify-start">
            <div className="max-w-[280px] flex flex-col gap-1 items-start justify-start">
              <span className="text-[#878B90]">Телефон доверия:</span>
              <div className="w-full h-auto flex justify-between items-center gap-x-8">
                <span>78 120 45 01</span>
                <span>Все контакты</span>
              </div>
            </div>
            <div className="max-w-[280px] flex flex-col gap-1 items-start justify-start">
              <span className="text-[#878B90]">
                Горячая линия по борьбе с коррупцией:
              </span>
              <div className="w-full h-auto flex justify-between items-center gap-x-8">
                <span>0-800-120-8888</span>
                <span>@sqbantikor_bot</span>
              </div>
            </div>
            <button
              type="button"
              className="w-[330px] h-[45px] flex items-center justify-center text-white bg-[#1D3448] border border-white rounded hover:bg-white hover:text-[#1D3448] transition"
            >
              Сообщить о корупции
            </button>
          </div>
          <div className=" flex flex-col gap-4 items-start justify-start">
            <div className="max-w-[280px] flex flex-col gap-1 items-start justify-start">
              <span className="text-[#878B90]">Единый Call center 24/7:</span>
              <div className="flex flex-col">
                <span>0 800 120 88 88</span>
                <span className="text-[8px]">Бесплатно по всей Республике</span>
              </div>
            </div>
            <div>1180</div>
            <div>71 200-43-43</div>
            <div className="max-w-[280px] flex flex-col gap-1 items-start justify-start">
              <span className="text-[#878B90]">Для связи онлайн:</span>
              <div className="flex justify-start items-center gap-2">
                <button
                  type="button"
                  className="w-[24px] h-[24px] bg-transparent border border-[#FFFFFF33] rounded transition hover:bg-white hover:text-transparent"
                ></button>
                <button
                  type="button"
                  className="w-[24px] h-[24px] bg-transparent border border-[#FFFFFF33] rounded transition hover:bg-white hover:text-transparent"
                ></button>
                <button
                  type="button"
                  className="w-[24px] h-[24px] bg-transparent border border-[#FFFFFF33] rounded transition hover:bg-white hover:text-transparent"
                ></button>
                <button
                  type="button"
                  className="w-[24px] h-[24px] bg-transparent border border-[#FFFFFF33] rounded transition hover:bg-white hover:text-transparent"
                ></button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start">
            <div className="max-w-[280px] flex flex-col gap-1 items-start justify-start">
              <span className="text-[#878B90] ">
                Оценить качество обслуживания:
              </span>
              <div className="flex flex-col">
                <span>@sqbuzbot</span>
              </div>
            </div>
            <div className="max-w-[280px] flex flex-col gap-1 items-start justify-start">
              <span className="text-[#878B90] ">Будьте в курсе новостей:</span>
              <div className="grid grid-cols-2 gap-2 gap-x-8">
                <div>Telegram</div>
                <div>Telegram</div>
                <div>Telegram</div>
                <div>Telegram</div>
              </div>
            </div>
          </div>
          <div className="col-span-2 text-[#FFFFFF80]">&copy; SQB BANK</div>
          <div className="col-span-2 text-[#FFFFFF80] text-[10px]">
            «При использовании материалов сайта ссылка на веб-сайт sqb.uz
            обязательна»
          </div>
          <div className="col-span-2 text-[#FFFFFF80] flex justify-start items-center gap-2 justify-self-center">
            <Image
              src={iso}
              alt=""
              width={20}
              height={20}
              className="object-cover"
            />
            ISO 37001:2016 ABMS, New
          </div>
        </div>
      </Container>
    </div>
  );
}
