import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function Payments(){
	return(
		<div className="w-full max-w-md mx-auto space-y-4 py-8">

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Dados principais</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Defina o produto e o valor do que será vendido em seu link de pagamento.
        </p>
      </div>
      <form className="space-y-4 ">
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="name">Link</Label>
            <Input id="name" placeholder="" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">Título do seu produto ou serviço</Label>
            <Input id="email" type="email" placeholder="" />
          </div>
                    <div className="space-y-1.5">
            <Label htmlFor="email">Valor</Label>
            <Input id="email" type="email" placeholder="" />
          </div>
          
        </div>
    
      </form>
    </div>
		)
}