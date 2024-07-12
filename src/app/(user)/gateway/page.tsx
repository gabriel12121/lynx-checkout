import { Card, CardHeader, CardDescription, CardTitle } from '@/components/ui/card'
import Image from "next/image"
import Mercadopago from "@/assets/mercadopago.png";
import Shopify from "@/assets/shopify.png";
import Woocommerce from "@/assets/woocommerce.png";
import Whatsapp from "@/assets/whatsapp.png";
import Pagarme from "@/assets/pagarme.png";
import Googletagmanager from "@/assets/googletagmanager.png";

export default function Gateway(){
    return(
        <>
        <h2 className="text-3xl font-bold tracking-tight my-4">Integrações</h2>
   <div className="container px-4 md:px-6">
     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
       <div className="flex flex-col items-start gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
         <div className="flex items-center gap-4">
           <div className=" p-3 text-primary-foreground">
              <Image src={Mercadopago} alt="logo" width={74} height={29} />
           </div>
           <h3 className="text-xl font-semibold">Mercado Pago</h3>
         </div>
         <p className="text-muted-foreground">Aceite pagamentos com cartão de creditom boleto e pix co repasse imediato</p>
       </div>
       <div className="flex flex-col items-start gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
         <div className="flex items-center gap-4">
            <Image src={Shopify} alt="logo" width={74} height={29} />
           <h3 className="text-xl font-semibold">Shopify</h3>
         </div>
         <p className="text-muted-foreground">Plataforma global de e-commerce.</p>
       </div>
       <div className="flex flex-col items-start gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
         <div className="flex items-center gap-4">
           <div className=" p-3 text-primary-foreground">
            <Image src={Woocommerce} alt="logo" width={74} height={29} />
           </div>
           <h3 className="text-xl font-semibold">Woocommerce</h3>
         </div>
         <p className="text-muted-foreground">Plataforma de comércio eletrônico construída no Wordpress.</p>
       </div>
       <div className="flex flex-col items-start gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
         <div className="flex items-center gap-4">
           <div className=" p-3 text-primary-foreground">
<Image src={Whatsapp} alt="logo" width={74} height={29} />
           </div>
           <h3 className="text-xl font-semibold">PagBank</h3>
         </div>
         <p className="text-muted-foreground">Gateway inteligente com as melhores soluções de pagamento.</p>
       </div>
       <div className="flex flex-col items-start gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
         <div className="flex items-center gap-4">
           <div className=" p-3 text-primary-foreground">
<Image src={Pagarme} alt="logo" width={74} height={29} />
           </div>
           <h3 className="text-xl font-semibold">Pagarme</h3>
         </div>
         <p className="text-muted-foreground">Gateway inteligente com as melhores soluções de pagamento.</p>
       </div>
       <div className="flex flex-col items-start gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
         <div className="flex items-center gap-4">
           <div className=" p-3 text-primary-foreground">
             <Image src={Googletagmanager} alt="logo" width={74} height={29} />
           </div>
           <h3 className="text-xl font-semibold">GetNet</h3>
         </div>
         <p className="text-muted-foreground">Ecossistema completo que forneersos para o mercado de pagamento</p>
       </div>
     </div>
   </div>
 </>
    )
}