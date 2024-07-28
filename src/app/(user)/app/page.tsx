import { Card, CardHeader, CardDescription, CardTitle } from '@/components/ui/card'
import Image from "next/image"
import Mercadopago from "@/assets/mercadopago.png";
import Shopify from "@/assets/shopify.png";
import Woocommerce from "@/assets/woocommerce.png";
import Whatsapp from "@/assets/whatsapp.png";
import Pagarme from "@/assets/pagarme.png";
import Tiktok from "@/assets/tiktok.png"
import Getnet from "@/assets/getnet.png"
import Googletagmanager from "@/assets/googletagmanager.png";
import Link from "next/link"
export default function App(){
    return(
        <>
        <h2 className="text-3xl font-bold tracking-tight my-4">Integrações</h2>
   <div className="container px-4 md:px-6">
     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
       <Link href="app/whatsapp">
         <div className="flex flex-col items-start gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
           <div className="flex items-center gap-4">
             <div className=" p-3 text-primary-foreground">
                <Image src={Mercadopago} alt="logo" width={74} height={29} />
             </div>
             <h3 className="text-xl font-semibold">Mercado Pago</h3>
           </div>
           <p className="text-muted-foreground">Aceite pagamentos com cartão de crédito, boleto e pix com repasse imediato.</p>
         </div>
         </Link>
        <Link href="app/getnet">
         <div className="flex flex-col items-start gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
           <div className="flex items-center gap-4">
             <div className=" p-3 text-primary-foreground">
                <Image src={Getnet} alt="logo" width={74} height={29} />
             </div>
             <h3 className="text-xl font-semibold">Getnet</h3>
           </div>
           <p className="text-muted-foreground">Gateway inteligente com as melhores soluções de pagamento.</p>
         </div>
         </Link>
                 <Link href="app/pagarme">
         <div className="flex flex-col items-start gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
           <div className="flex items-center gap-4">
             <div className=" p-3 text-primary-foreground">
                <Image src={Pagarme} alt="logo" width={74} height={29} />
             </div>
             <h3 className="text-xl font-semibold">Pagarme</h3>
           </div>
           <p className="text-muted-foreground">Gateway inteligente com as melhores soluções de pagamento.</p>
         </div>
         </Link>
         <Link href="app/tiktok">
         <div className="flex flex-col items-start gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
           <div className="flex items-center gap-4">
             <div className=" p-3 text-primary-foreground">
                <Image src={Tiktok} alt="logo" width={74} height={29} />
             </div>
             <h3 className="text-xl font-semibold">Tiktok</h3>
           </div>
           <p className="text-muted-foreground">Integração nativa com pixel do Tiktok para rastreio de suas vendas.</p>
         </div>
         </Link>
     </div>
   </div>
 </>
    )
}