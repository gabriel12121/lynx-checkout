import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft,
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Upload,
  Users2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Checkout() {
  return (
    <>
    <div className="flex min-h-screen w-full flex-col bg-muted/40">

      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">

        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">

            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-0">
                  <CardHeader>
                    <CardTitle>Nova customização de checkout</CardTitle>
                    <CardDescription>
                      É aqui que você configura como seu checkout ira ser visualmente pelos clientes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Nome</Label>
                        <Input
                          id="name"
                          type="text"
                          className="w-full"
                        />
                      </div>
      
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-1">
                  <CardHeader>
                    <CardTitle>Descontos</CardTitle>
                     <CardDescription>
                      Caso o cliente tenha desconto se realizar o pagamento em um dos meios de pagamento amet
                      seguir, é aqui que você deve colocar
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                      <Label htmlFor="airplane-mode">Desconto no Cartão de crédito </Label>
                        <Input
                          id="name"
                          type="text"
                          className="w-full"
                          placeholder="0%"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="description">Desconto no Boleto</Label>
                        <Input
                          id="name"
                          type="text"
                          className="w-full"
                          placeholder="0%"
                        />
                      </div>
                                            <div className="grid gap-3">
                        <Label htmlFor="description">Desconto no Pix</Label>
                        <Input
                          id="name"
                          type="text"
                          className="w-full"
                          placeholder="0%"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-1">
                  <CardHeader>
                    <CardTitle>Metodos de Pagamento</CardTitle>
                     <CardDescription>
                      Selecione quais métodos de pagamento estarão ativos no seu checkout
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                      <Label htmlFor="airplane-mode">Cartão de crédito </Label>
                        <Switch id="airplane-mode" />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="airplane-mode">Boleto</Label>
                        <Switch id="airplane-mode" />
                      </div>
                       <div className="grid gap-3">
                        <Label htmlFor="airplane-mode">Pix</Label>
                        <Switch id="airplane-mode" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card x-chunk="dashboard-07-chunk-1">
                  <CardHeader>
                    <CardTitle>Timer</CardTitle>
                     <CardDescription>
                      Altere as informações do timer que aparecerá na pagina de checkout
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                        <Label htmlFor="airplane-mode">Timer</Label>
                        <Switch id="airplane-mode" />
                    </div>
                  </CardContent>
                </Card>

                <Card x-chunk="dashboard-07-chunk-1">
                  <CardHeader>
                    <CardTitle>Cor de Fundo</CardTitle>
                     <CardDescription>
                      Configure a cor de fundo dos items a seguir
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="description">Cor de fundo do Timer</Label>
                        <Input
                          id="name"
                          type="text"
                          className="w-full"
                          placeholder="Clique para selecionar a cor"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="description">Cor de fundo do Order Bump</Label>
                        <Input
                          id="name"
                          type="text"
                          className="w-full"
                          placeholder="Clique para selecionar a cor"
                        />
                      </div>
                       <div className="grid gap-3">
                        <Label htmlFor="description">Cor de fundo do botão de finalizar compra</Label>
                        <Input
                          id="name"
                          type="text"
                          className="w-full"
                          placeholder="Clique para selecionar a cor"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

            </div>

          </div>
        </main>
      </div>
    </div>
    </>
  )
}
