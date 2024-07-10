'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
export default function Geral(){
    return(
        
        <>
        <h1>CONFIGURAÇÕES GERAIS</h1>
        <div className="grid gap-6">
            <Card x-chunk="dashboard-04-chunk-1">
                  <CardHeader>
                    <CardTitle>DADOS DO REMETENTE                    </CardTitle>

                  </CardHeader>
                 <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Nome</Label>
                        <Input
                          id="nome"
                          type="text"
                          className="w-full"
                          placeholder="Nome"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="email">E-mail</Label>
                        <Input
                          id="email"
                          type="text"
                          className="w-full"
                          placeholder="E-mail"
                        />
                      </div>
                      <CardFooter>
        <Button type="submit" className="ml-auto">
          Validar
        </Button>
      </CardFooter>                    </div>
                  </CardContent>
            </Card>
            <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>ENDEREÇO DA LOJA</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
      <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cep">Cep</Label>
              <Input id="cep" placeholder="CEP" />
            </div>
            </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="endereco">Endereço</Label>
            <Input id="endereco" placeholder="Endereço" />
          </div>
            <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="numero">Numero</Label>
              <Input id="numero" placeholder="S/N" />
            </div>
            </div>
          </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="destination">Estado</Label>
            <Select defaultValue="system">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="system">Estado</SelectItem>
                        <SelectItem value="user">Acre</SelectItem>
                        <SelectItem value="user">Alagoas</SelectItem>
                        <SelectItem value="user">Amapá</SelectItem>
                        <SelectItem value="user">Amazonas</SelectItem>
                        <SelectItem value="user">Bahia</SelectItem>
                        <SelectItem value="user">Ceará</SelectItem>
                        <SelectItem value="user">Distrito Federal</SelectItem>
                        <SelectItem value="user">Espírito Santo</SelectItem>
                        <SelectItem value="user">Goiás</SelectItem>
                        <SelectItem value="user">Maranhão</SelectItem>
                        <SelectItem value="user">Mato Grosso</SelectItem>
                        <SelectItem value="user">Mato Grosso do Sul</SelectItem>
                        <SelectItem value="user">Minas Gerais</SelectItem>
                        <SelectItem value="user">Pará</SelectItem>
                        <SelectItem value="user">Paraíba</SelectItem>
                        <SelectItem value="user">Parana</SelectItem>
                        <SelectItem value="user">Pernambuco</SelectItem>
                        <SelectItem value="user">Piauí</SelectItem>
                        <SelectItem value="user">Rio de Janeiro</SelectItem>
                        <SelectItem value="user">Rio Grande do Norte</SelectItem>
                        <SelectItem value="user">Rio Grande do Sul</SelectItem>
                        <SelectItem value="user">Rondônia</SelectItem>
                        <SelectItem value="RO">Roraima</SelectItem>
                        <SelectItem value="SC">Santa Catarina</SelectItem>
                        <SelectItem value="SP">São Paulo</SelectItem>
                        <SelectItem value="SE">Sergipe</SelectItem>
                        <SelectItem value="TO">Tocantins</SelectItem>
                      </SelectContent>
                    </Select>
          </div>
            <div className="space-y-2">
              <Label htmlFor="start-date">Cidade</Label>
              <Input id="department" placeholder="Cidade" />
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="bairro">Bairro</Label>
            <Input id="bairro" placeholder="Bairro" />
          </div>
            <div className="space-y-2">
              <Label htmlFor="completo">completo</Label>
              <Input id="completo" placeholder="completo" />
            </div>
          </div>
      </CardContent>
    </Card>
          </div>
          <CardFooter>
        <Button type="submit" className="ml-auto">
          Salvar
        </Button>
      </CardFooter>
        </>
    )
}