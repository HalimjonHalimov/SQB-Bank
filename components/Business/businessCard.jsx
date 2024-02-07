import Image from "next/image";
import pic from "@/public/start_pic.png";

export default function BusinessCard() {
  return (
    <div className="bg-[#E5EBF0] rounded p-6 flex flex-col items-center justify-center gap-4">
      <div className="w-full h-auto flex justify-start items-center gap-8">
        <Image
          src={pic}
          alt=""
          width={40}
          height={40}
          className="object-cover"
        />
        <div className="text-[#1D3448] font-semibold text-[26px] w-[133px] h-auto">
          Начало бизнеса
        </div>
      </div>
      <div className="w-full h-auto flex flex-col gap-2">
        <div className="w-full h-[60px] bg-white flex justify-between items-center px-4 rounded text-[16px] text-[#0A1E32] font-medium">
          Открыть расчетный счет
          <span>
            <svg
              width="30"
              height="10"
              viewBox="0 0 30 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.4243 5.42451C29.6586 5.1902 29.6586 4.8103 29.4243 4.57598L25.6059 0.757605C25.3716 0.523291 24.9917 0.523291 24.7574 0.757605C24.523 0.99192 24.523 1.37182 24.7574 1.60613L28.1515 5.00025L24.7574 8.39436C24.523 8.62867 24.523 9.00857 24.7574 9.24289C24.9917 9.4772 25.3716 9.4772 25.6059 9.24289L29.4243 5.42451ZM-5.24537e-08 5.60024L29 5.60025L29 4.40025L5.24537e-08 4.40024L-5.24537e-08 5.60024Z"
                fill="url(#paint0_linear_0_523)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_523"
                  x1="23.5062"
                  y1="4.15814"
                  x2="23.6452"
                  y2="6.34112"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#1D3448" />
                  <stop offset="1" stop-color="#878B90" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
        <div className="w-full h-[60px] bg-white flex justify-between items-center px-4 rounded text-[16px] text-[#0A1E32] font-medium">
          Подобрать тариф
          <span>
            <svg
              width="30"
              height="10"
              viewBox="0 0 30 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.4243 5.42451C29.6586 5.1902 29.6586 4.8103 29.4243 4.57598L25.6059 0.757605C25.3716 0.523291 24.9917 0.523291 24.7574 0.757605C24.523 0.99192 24.523 1.37182 24.7574 1.60613L28.1515 5.00025L24.7574 8.39436C24.523 8.62867 24.523 9.00857 24.7574 9.24289C24.9917 9.4772 25.3716 9.4772 25.6059 9.24289L29.4243 5.42451ZM-5.24537e-08 5.60024L29 5.60025L29 4.40025L5.24537e-08 4.40024L-5.24537e-08 5.60024Z"
                fill="url(#paint0_linear_0_523)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_523"
                  x1="23.5062"
                  y1="4.15814"
                  x2="23.6452"
                  y2="6.34112"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#1D3448" />
                  <stop offset="1" stop-color="#878B90" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
        <div className="w-full h-[60px] bg-white flex justify-between items-center px-4 rounded text-[16px] text-[#0A1E32] font-medium">
          Фабрика проектов
          <span>
            <svg
              width="30"
              height="10"
              viewBox="0 0 30 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.4243 5.42451C29.6586 5.1902 29.6586 4.8103 29.4243 4.57598L25.6059 0.757605C25.3716 0.523291 24.9917 0.523291 24.7574 0.757605C24.523 0.99192 24.523 1.37182 24.7574 1.60613L28.1515 5.00025L24.7574 8.39436C24.523 8.62867 24.523 9.00857 24.7574 9.24289C24.9917 9.4772 25.3716 9.4772 25.6059 9.24289L29.4243 5.42451ZM-5.24537e-08 5.60024L29 5.60025L29 4.40025L5.24537e-08 4.40024L-5.24537e-08 5.60024Z"
                fill="url(#paint0_linear_0_523)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_523"
                  x1="23.5062"
                  y1="4.15814"
                  x2="23.6452"
                  y2="6.34112"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#1D3448" />
                  <stop offset="1" stop-color="#878B90" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </div>
      <div className="w-full h-auto text-base  font-normal text-[#1D34488">
        Открывайте бизнес вместе с нами на выгодных условиях и достигайте
        поставленных целей
      </div>
    </div>
  );
}
