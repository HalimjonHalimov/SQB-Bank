import { Button, Container } from "..";
import Image from "next/image";
import alert from "@/public/alert.png";

export default function Contact() {
  return (
    <Container>
      <div className="w-full h-auto bg-[#F2F5F8] p-8 grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-4 items-start">
          <div className="flex justify-start items-start gap-8">
            <Image
              src={alert}
              alt=""
              width={40}
              height={40}
              className="object-cover"
            />
            <div className="w-[360px] h-auto text-3xl text-[#1D3448] font-medium">Остались вопросы? Оставьте заявку и мы вам поможем!</div>
          </div>
          <div className="w-[414px] h-auto text-[#0A1E32] text-base font-normal">
            Наши специалисты найдут для вас персональное решение и решим
            возникшие вопросы! Свяжитесь с нами или оставьте заявку заполнив
            форму
          </div>
        </div>
        <form className="flex flex-col items-start justify-start gap-1">
            <label className="text-[#0A1E32] text-sm font-normal">Как к вам обращаться?</label>
            <input className="text-black w-[300px] h-[45px] rounded px-4 border-none outline-none" type="text" placeholder="Ваше имя и фамилия"/>
            <label className="text-[#0A1E32] text-sm font-normal">Номер телефона</label>
            <input className="text-black w-[300px] h-[45px] rounded px-4 border-none outline-none" type="text" placeholder="+998 (__) ___-__-__"/>
            <div className="flex justify-start items-center gap-4 mt-4">
                <Button type={'button'} label={'Оформить'}/>
                <Button type={'button'} label={'Подробнее'}/>
            </div>
        </form>
      </div>
    </Container>
  );
}
