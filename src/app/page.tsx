'use-client'
import Hero from "@/assets/hero.png";
import Link from "next/link"
import Image from "next/image";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
export default function Home() {
  return (
    <>
       <div className="mx-auto flex w-full max-w-7x1 justify-between px-4 py-5 text-sm">
          <section className="flex items-center gap-10">
            <Image src="/logo.png" alt="logo" width={74} height={29} />
            <div className="flex items-center gap-4 transition-all">
              <Link href="/" className="text-neutral-200">
                Empresa
              </Link>
                            <Link href="/" className="text-neutral-200">
                Taxas
              </Link>
                            <Link href="/" className="text-neutral-200">
                Ajuda
              </Link>
                            <Link href="/" className="text-neutral-200">
                Blog
              </Link>
            </div>
          </section>

      <section className=" hidden md:flex   items-center gap-8 ">
        <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
          Login
        </button>

        <button className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
          Register
        </button>
      </section>
      </div>

<div className="pt-4 lg:pt-10 min-h-screen w-full bg-gray-100">
  <div className="px-[20px] lg:px-[280px]">
    <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026]">
      Explore nossa coleção agora e descubra como o dropshipping pode ser simples e eficiente. 
    </h1>
    <p className="text-center pt-6 text-[#36485C]">
      Estamos aqui para transformar sua experiência de compra online. Com nosso sistema de checkout transparente, você pode aproveitar ao máximo suas compras sem complicações.
    </p>

    <div className="flex w-full pt-8">
      <Link href="/sign-in">
      <button className=" w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 ">
        Cadastrar
      </button>
      </Link>
      <Link href="/sign-up">
      <button className="  w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2">
        Login
      </button>
      </Link>
    </div>
  </div>
</div>
</>
  );
}
