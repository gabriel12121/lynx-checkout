import { Button } from "@/components/ui/button"
import {Card,CardContent} from "@/components/ui/card"
import Link from "next/link"
import {ChevronLeft} from "lucide-react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
export default function Create(){
    return(
        <>
        <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" className="h-7 w-7">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>
        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
        CADASTRAR NOVO CLIENTE
        </h1>
      </div>
                      <Card x-chunk="dashboard-07-chunk-0">
                      <CardContent>
                        <div className="grid gap-6">
                          <div className="grid gap-3">
                            <Label htmlFor="name">Nome Completo</Label>
                            <Input
                              id="name"
                              type="text"
                              className="w-full"
                              defaultValue="Informe seu nome completo"
                            />
                          </div>
                          <div className="grid gap-3">
                            <Label htmlFor="email">E-mail</Label>
                            <Input
                              id="email"
                              type="email"
                              className="w-full"
                              defaultValue="Ex:e-mail@provedor.com/"
                            />
                          </div>
                          <div className="grid gap-3">
                            <Label htmlFor="telefone">Telefone</Label>
                            <Input
                              id="telefone"
                              type="text"
                              className="w-full"
                              defaultValue="Ex:99999-9999"
                            />
                          </div>
                          <div className="grid gap-3">
                            <Label htmlFor="cpf">CPF</Label>
                            <Input
                              id="cpf"
                              type="text"
                              className="w-full"
                              defaultValue="Ex: 000.000.000-00"
                            />
                          </div>
                          <div className="grid gap-3">
                            <Label htmlFor="data_nasc">Data de Nascimento
                            </Label>
                            <Input
                              id="cpf"
                              type="text"
                              className="w-full"
                              defaultValue="Ex: DD/MM/AA"
                            />
                          </div>
                          <div className="grid gap-3">
                            <Label htmlFor="sexo">Sexo</Label>
                            <Select>
                          <SelectTrigger id="status" aria-label="Select status">
                            <SelectValue placeholder="Selecionar" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="homem">Homem</SelectItem>
                            <SelectItem value="mulher">Mulher</SelectItem>
                          </SelectContent>
                        </Select>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    </>
    )
}