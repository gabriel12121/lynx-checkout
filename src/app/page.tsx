import Image from "next/image";
import Balancer from 'react-wrap-balancer'
import Hero from "@/assets/hero.png";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <section className="mx-auto flex max-w-6xl  flex-col-reverse gap-2  px-4  pb-12 transition-all md:flex-row md:gap-4">
        <div className="flex flex-col items-center gap-6 pt-8 text-center
        md:w-1/2 md:items-start md:gap-10 md-pt-32 md:text-left">
          <Balancer>
            <h1 className="text-4xl font-semibold md:text-6xl">
Explore nossa coleção agora e descubra como o dropshipping pode ser simples e eficiente.            </h1>
          </Balancer>
                    <Balancer>
            <p className=" text-neutral-400 md:max-w-[400px]">
Estamos aqui para transformar sua experiência de compra online. Com nosso sistema de checkout transparente, você pode aproveitar ao máximo suas compras sem complicações.

            </p>
          <button className="border-balck  w-fit rounded-xl border-2 bg-black px-4 py-2  text-white transition-all hover:border-black hover:bg-black hover:bg-transparent  hover:text-black/90">
            Cadastrar
          </button>
          </Balancer>
        </div>
                <section className="md:w-1/2 ">
          <Image
            className="hidden h-auto max-w-[400px]  md:block"
            src={Hero}
            alt="hreo-image"
          />
        
        </section>
      </section>
    </div>
  );
}
