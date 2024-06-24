import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
export default function ForgotPassword(){
	return(
          <div className="flex items-center justify-center min-h-[100dvh] bg-muted">
      <Card className="w-full max-w-md p-6 md:p-8">

        <div className="mx-auto max-w-md space-y-6 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Recuperar senha
</h1>
        <p className="text-muted-foreground">
          Para recuperar sua senha, digite seu e-mail na caixa de texto abaixo que enviaremos um link de recuperação.


        </p>
      </div>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Digite seu e-mail" required />
        </div>
        <Button type="submit" className="w-full">
          Recuperar senha
        </Button>
      </form>
      <div className="text-center text-sm text-muted-foreground">
        <Link href="#" className="underline underline-offset-4" prefetch={false}>
          Voltar
        </Link>
      </div>
    </div>
      </Card>
    </div>
  )
}

