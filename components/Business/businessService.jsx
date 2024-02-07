import { Container } from "..";
import BusinessCard from "./businessCard";

export default function BusinessService() {
  return (
    <Container>
      <div className="flex flex-col gap-4 pt-4 my-[4rem]">
        <div className="text-[36px] font-medium text-[#0A1E32]">
          Для малого бизнеса
        </div>
        <div className="grid grid-cols-3 gap-4">
          <BusinessCard />
          <BusinessCard />
          <BusinessCard />
        </div>
      </div>
    </Container>
  );
}
