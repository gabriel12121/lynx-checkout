"use client"
import { TrendingUp,DollarSign } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Carts(){
    return(
        <>
        <h1>Carrinho Abandonado</h1>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card>
            <CardHeader>
               <CardTitle>Total Abandono</CardTitle>
               <DollarSign className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <p className="text-2x1 font-bold">R$100.000</p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
               <CardTitle>Total Recuperados</CardTitle>
               <DollarSign className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <p className="text-2x1 font-bold">R$0,00</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
               <CardTitle>Taxa de Recuperação</CardTitle>
               <DollarSign className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <p className="text-2x1 font-bold">0,00%</p>
            </CardContent>
          </Card>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Carrinho Abandonado</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Data</TableHead>
                            <TableHead>STATUS</TableHead>
                            <TableHead>NOME DO CLIENTE</TableHead>
                            <TableHead>Total</TableHead>
                        </TableRow>
                    </TableHeader>
                </Table>
            </CardContent>
        </Card>
        </>
    )
}