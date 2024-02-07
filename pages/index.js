import { Activity, Banner, Banners, Business, BusinessService, Company, Contact, Layout, Money, School } from "@/components";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Business />
      <BusinessService />
      <Activity />
      <School />
      <Money />
      <Banners />
      <Company />
      <Contact />
    </Layout>
  );
}
