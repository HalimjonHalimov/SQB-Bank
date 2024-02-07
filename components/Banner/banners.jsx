import { Container } from "..";
import MiniBanner from "./miniBanner";
import MiniBannerTwo from "./miniBannerTwo";

export default function Banners() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <MiniBanner />
        <MiniBannerTwo />
      </div>
    </Container>
  );
}
