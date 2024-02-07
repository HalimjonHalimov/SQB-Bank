import { Container } from "..";
import Image from "next/image";
import schoolLogo from "@/public/schoolLogo.png";

export default function Scholl() {
  return (
    <Container>
      <div className="flex flex-col gap-4 pt-4 my-[4rem]">
        <div className="text-[36px] font-medium text-[#0A1E32]">
          Школа предпринимателей от SQB
        </div>
        <div className="w-full h-auto p-8 bg-[#E5EBF0] rounded-lg grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <Image
              src={schoolLogo}
              alt=""
              width={"220px"}
              height={"60px"}
              className="object-cover"
            />
            <div className="w-[492px] h-auto text-[38px] text-[#0A1E32] font-medium">
              Открываете производство стройматериалов?
            </div>
            <div className="w-[492px] h-auto text-base text-[#0A1E32] font-normal">
              «Школа предпринимателей» – это полный практический курс,
              включающий в себя теорию и практику для успешного старта или
              ведения бизнеса в сфере производства строительных материалов.{" "}
            </div>
            <button
              type="button"
              className="w-[264px] h-[45px] rounded hover:bg-[#004D7E] border border-[#004D7E] bg-white  text-base font-semibold hover:text-white text-[#004D7E] transition"
            >
              Подробнее
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-full h-auto p-[20px] rounded flex justify-start items-center gap-4 bg-[#FFFFFF99] text-[#0A1E32] text-base font-normal">
              <svg
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.260643 4.66153L1.73933 3.31487L5.30655 7.23182L12.2801 -5.58473e-05L13.7198 1.38821L5.26485 10.1563L0.260643 4.66153Z"
                  fill="#D52023"
                />
              </svg>

              <span>
                Ознакомьтесь с практическими пособиями по специализации
              </span>
            </div>
            <div className="w-full h-auto p-[20px] rounded flex justify-start items-center gap-4 bg-[#FFFFFF99] text-[#0A1E32] text-base font-normal">
              <svg
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.260643 4.66153L1.73933 3.31487L5.30655 7.23182L12.2801 -5.58473e-05L13.7198 1.38821L5.26485 10.1563L0.260643 4.66153Z"
                  fill="#D52023"
                />
              </svg>

              <span>
                Ознакомьтесь с практическими пособиями по специализации
              </span>
            </div>
            <div className="w-full h-auto p-[20px] rounded flex justify-start items-center gap-4 bg-[#FFFFFF99] text-[#0A1E32] text-base font-normal">
              <svg
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.260643 4.66153L1.73933 3.31487L5.30655 7.23182L12.2801 -5.58473e-05L13.7198 1.38821L5.26485 10.1563L0.260643 4.66153Z"
                  fill="#D52023"
                />
              </svg>

              <span>
                Ознакомьтесь с практическими пособиями по специализации
              </span>
            </div>
            <div className="w-full h-auto p-[20px] rounded flex justify-start items-center gap-4 bg-[#FFFFFF99] text-[#0A1E32] text-base font-normal">
              <svg
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.260643 4.66153L1.73933 3.31487L5.30655 7.23182L12.2801 -5.58473e-05L13.7198 1.38821L5.26485 10.1563L0.260643 4.66153Z"
                  fill="#D52023"
                />
              </svg>

              <span>
                Ознакомьтесь с практическими пособиями по специализации
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
