import { Button } from "..";
import Image from 'next/image'
import banner1 from '@/public/banner1.png'
import banner2 from '@/public/banner2.png'

export default function MiniBanner() {
  return (
    <div className="p-8 bg-[#E5EBF0] rounded-lg grid grid-cols-2">
      <Image src={banner1} alt="" width={'430px'} height={'220px'} className="object-contain"/>
      <div className="flex flex-col gap-2">
        <div className="text-[#0A1E32] text-3xl font-medium">Новый интернет-банкинг SQB BUSINESS</div>
        <div className="text-base text-[#0A1E32] font-normal">
          Простота, скорость, удобство и надёжность в управлении счетами
          Использование и установка интернет-банкинга — Бесплатно Настрой свой
          бизнес на комфорт!
        </div>
        <div className="flex justify-start items-center gap-2">
          <Button type={"button"} label={"Войти в банк"} />
          <Button type={"button"} label={"Подробнее"} />
        </div>
      </div>
    </div>
  );
}
