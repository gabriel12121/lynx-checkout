import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
export default function Register(){
	return(
          <div className="flex items-center justify-center min-h-[100dvh] bg-muted">
      <Card className="w-full max-w-md p-6 md:p-8">

        <form className="space-y-4 mt-6">
                  <div className="space-y-2">
            <Label htmlFor="email">Nome</Label>
            <Input id="email" type="email" placeholder="Digite seu nome" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" placeholder="Digite seu e-mail" required />
          </div>
                    <div className="space-y-2">
            <Label htmlFor="email">Telefone</Label>
            <Input id="email" type="email" placeholder="Digite seu telefone" required />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Senha</Label>

            </div>
            <Input id="password" type="password" placeholder="Digite seu e-mail" required />
          </div>
          <Button type="submit" className="w-full">
            Cadastrar
          </Button>
        </form>
        <div className="mt-4 text-center text-sm text-muted-foreground">
          <Link href="/login" className="underline" prefetch={false}>
            Já possuo uma conta
          </Link>
        </div>
      </Card>
    </div>
  )
}

