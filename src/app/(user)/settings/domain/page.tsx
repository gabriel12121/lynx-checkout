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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
export default function Domain(){
    return(
    <>
            <div className="flex items-center gap-4">

              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Dominios
              </h1>
              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Dialog>
      <DialogTrigger asChild>
      <Button size="sm">Adicionar Dominio</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>ADICIONAR NOVO DOMÍNIO</DialogTitle>
          <DialogDescription>
          Vincule um domínio que já pertença a você. Você também pode vincular um subdomínio. Ex.: loja.sualoja.com.br Não use http, https , www e url da sua loja myshopify.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              placeholder="ex:sualoja.com.br"
              
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
        <DialogClose asChild>
            <Button type="button" variant="secondary">
              Salvar
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Fechar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
              </div>
            </div>
            <Card>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Dominio</TableHead>
                            <TableHead>STATUS</TableHead>
                            <TableHead>SSL</TableHead>
                        </TableRow>
                    </TableHeader>
                </Table>
            </CardContent>
        </Card>
    </>
    )
}