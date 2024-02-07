import React from "react";
import { Container } from "..";
import flag from "@/public/flag.png";
import address from "@/public/address.png";
import Image from "next/image";

export default function Money() {
  return (
    <Container>
      <div className="flex flex-col gap-8 pt-4 my-[4rem]">
        <div className="text-[36px] font-medium text-[#0A1E32]">
          Курс валют для юридических лиц
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="w-full h-full rounded-lg border border-[#F2F5F8] overflow-hidden">
            <div className="px-8 py-4 flex justify-between items-center bg-[#F2F5F8] text-base font-medium text-[#1D3448]">
              <div>Обновлено 11.11.2022 в 10:00</div>
              <div className="text-[#D52023]">Все курсы</div>
            </div>
            <div className="px-8 py-4">
              <div className="flex justify-between items-center">
                <div className="text-base font-medium text-[#1d344877]">
                  Валюта
                </div>
                <div className="text-base font-medium text-[#1d344877]">
                  Валюта
                </div>
                <div className="text-base font-medium text-[#1d344877]">
                  Валюта
                </div>
              </div>
              <div className="flex flex-col gap-4 py-8">
                <div className="flex justify-between items-center text-[#1D3448]">
                  <div className="text-base font-medium flex justify-start items-center gap-2">
                    <Image
                      src={flag}
                      alt=" "
                      width={20}
                      height={20}
                      className="object-cover"
                    />
                    1 USD
                  </div>
                  <div className="text-base font-medium flex justify-start items-center gap-2">
                    <span>
                      <svg
                        width="10"
                        height="14"
                        viewBox="0 0 10 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.23178 12.1367C4.63157 12.6165 5.36843 12.6165 5.76822 12.1367L8.63318 8.69878C9.17595 8.04745 8.7128 7.05859 7.86496 7.05859L2.13504 7.05859C1.2872 7.05859 0.824048 8.04745 1.36682 8.69878L4.23178 12.1367Z"
                          fill="#F42E31"
                        />
                        <line
                          x1="5"
                          y1="0.0585938"
                          x2="5"
                          y2="8.05859"
                          stroke="#F42E31"
                          stroke-width="2"
                        />
                      </svg>
                    </span>
                    11 200.00
                  </div>
                  <div className="text-base font-medium flex justify-start items-center gap-2">
                    <span>
                      <svg
                        width="10"
                        height="14"
                        viewBox="0 0 10 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.23178 0.980458C4.63157 0.500704 5.36843 0.500705 5.76822 0.980459L8.63318 4.41841C9.17595 5.06974 8.7128 6.05859 7.86496 6.05859L2.13504 6.05859C1.2872 6.05859 0.824048 5.06974 1.36682 4.41841L4.23178 0.980458Z"
                          fill="#23D34A"
                        />
                        <line
                          y1="-1"
                          x2="8"
                          y2="-1"
                          transform="matrix(-4.37112e-08 -1 -1 4.37112e-08 4 13.0586)"
                          stroke="#23D34A"
                          stroke-width="2"
                        />
                      </svg>
                    </span>
                    11 200.00
                  </div>
                </div>
                <div className="w-full h-[1px] bg-[#1d34484d]"></div>
                <div className="flex justify-between items-center text-[#1D3448]">
                  <div className="text-base font-medium flex justify-start items-center gap-2">
                    <Image
                      src={flag}
                      alt=" "
                      width={20}
                      height={20}
                      className="object-cover"
                    />
                    1 USD
                  </div>
                  <div className="text-base font-medium flex justify-start items-center gap-2">
                    <span>
                      <svg
                        width="10"
                        height="14"
                        viewBox="0 0 10 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.23178 12.1367C4.63157 12.6165 5.36843 12.6165 5.76822 12.1367L8.63318 8.69878C9.17595 8.04745 8.7128 7.05859 7.86496 7.05859L2.13504 7.05859C1.2872 7.05859 0.824048 8.04745 1.36682 8.69878L4.23178 12.1367Z"
                          fill="#F42E31"
                        />
                        <line
                          x1="5"
                          y1="0.0585938"
                          x2="5"
                          y2="8.05859"
                          stroke="#F42E31"
                          stroke-width="2"
                        />
                      </svg>
                    </span>
                    11 200.00
                  </div>
                  <div className="text-base font-medium flex justify-start items-center gap-2">
                    <span>
                      <svg
                        width="10"
                        height="14"
                        viewBox="0 0 10 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.23178 12.1367C4.63157 12.6165 5.36843 12.6165 5.76822 12.1367L8.63318 8.69878C9.17595 8.04745 8.7128 7.05859 7.86496 7.05859L2.13504 7.05859C1.2872 7.05859 0.824048 8.04745 1.36682 8.69878L4.23178 12.1367Z"
                          fill="#F42E31"
                        />
                        <line
                          x1="5"
                          y1="0.0585938"
                          x2="5"
                          y2="8.05859"
                          stroke="#F42E31"
                          stroke-width="2"
                        />
                      </svg>
                    </span>
                    11 200.00
                  </div>
                </div>
                <div className="w-full h-[1px] bg-[#1d34484d]"></div>
                <div className="flex justify-between items-center text-[#1D3448]">
                  <div className="text-base font-medium flex justify-start items-center gap-2">
                    <Image
                      src={flag}
                      alt=" "
                      width={20}
                      height={20}
                      className="object-cover"
                    />
                    1 USD
                  </div>
                  <div className="text-base font-medium flex justify-start items-center gap-2">
                    <span>
                      <svg
                        width="10"
                        height="14"
                        viewBox="0 0 10 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.23178 12.1367C4.63157 12.6165 5.36843 12.6165 5.76822 12.1367L8.63318 8.69878C9.17595 8.04745 8.7128 7.05859 7.86496 7.05859L2.13504 7.05859C1.2872 7.05859 0.824048 8.04745 1.36682 8.69878L4.23178 12.1367Z"
                          fill="#F42E31"
                        />
                        <line
                          x1="5"
                          y1="0.0585938"
                          x2="5"
                          y2="8.05859"
                          stroke="#F42E31"
                          stroke-width="2"
                        />
                      </svg>
                    </span>
                    11 200.00
                  </div>
                  <div className="text-base font-medium flex justify-start items-center gap-2">
                    <span>
                      <svg
                        width="10"
                        height="14"
                        viewBox="0 0 10 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.23178 12.1367C4.63157 12.6165 5.36843 12.6165 5.76822 12.1367L8.63318 8.69878C9.17595 8.04745 8.7128 7.05859 7.86496 7.05859L2.13504 7.05859C1.2872 7.05859 0.824048 8.04745 1.36682 8.69878L4.23178 12.1367Z"
                          fill="#F42E31"
                        />
                        <line
                          x1="5"
                          y1="0.0585938"
                          x2="5"
                          y2="8.05859"
                          stroke="#F42E31"
                          stroke-width="2"
                        />
                      </svg>
                    </span>
                    11 200.00
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full rounded-lg border border-[#F2F5F8] overflow-hidden">
            <div className="px-8 py-4 flex justify-between items-center bg-[#F2F5F8] text-base font-medium text-[#1D3448]">
              <div>Офисы и банкоматы</div>
              <div className="text-[#D52023]">Открыть карту</div>
            </div>
            <div className="w-full h-full relative">
            <Image src={address} alt="" width={'100%'} height={'100%'} className="object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
