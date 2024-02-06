import { Footer, Header } from "..";

export default function Layout({children}) {
  return (
    <div className="w-full min-h-[100vh] flex flex-col">
      <Header />
      <main className="grow">
       {children}
      </main>
      <Footer />
    </div>
  );
}
