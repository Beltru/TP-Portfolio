import Image from "next/image";
import Navbar from "./components/Nav";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <Navbar></Navbar>
      <main className="flex min-h-screen w-full flex-col items-center justify-center">
        <section className="flex flex-row w-full h-screen items-center justify-center ">
          <img src="imagen.png" className="h-[50vh]"/>
          <div className="flex flex-col">
            <l1 className="text-black text-8xl">TFOLIO</l1>
            <ul>
              <div className="bg-gray-100 h-[15vh] w-[10vw] position: absolute ml-45"><p className="text-black mt-3 ml-2 flex">Figma: <br />IG: <br />LI:</p></div>
              <l1 className="text-black text-8xl">TFOL</l1> 
            </ul>
            <l1 className="text-black text-8xl">TFOLIO</l1>
          </div>
        </section>
      </main>
    </div>
  );
}
