/** import logo*/
import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
	return(
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

       	  <section className="felx items-center gap-8">
       	  	<button className="h-fit rounded-xl border-2 border-neutral-200
       	  	px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
       	  		Login
       	  	</button>

       	  </section>
       </div>
		)
}