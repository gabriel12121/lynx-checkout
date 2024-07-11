"use client"

import {
  Card,
  CardContent,

  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Pix(){
    return(
        
        <>
        <h1 className="text-lg font-semibold md:text-2xl">Pix Abandonado</h1>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Pix em Recuperação
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$45,231.89</div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Recuperado
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 0,00</div>

            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taxa de Recuperação</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0,00%</div>

            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ativo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
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