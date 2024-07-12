import Link from "next/link"

import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Logistic(){
    return(
    <>
            <div className="flex items-center gap-4">

              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
              Logistica
              </h1>
              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Link href="/create">
             <Button size="sm">CADASTRAR FRETE</Button>
             </Link>
              </div>
            </div>
            <Card>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>NOME DO FRETE</TableHead>
                            <TableHead>VALOR</TableHead>
                        </TableRow>
                    </TableHeader>
                </Table>
            </CardContent>
        </Card>
    </>
    )
}