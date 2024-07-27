"use client"
import Link from "next/link"
import { TrendingUp,
Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
  Badge } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
const chartData = [
  { month: "Janeiro", desktop: 186, mobile: 80 },
  { month: "Fevereiro", desktop: 305, mobile: 200 },
  { month: "Março", desktop: 237, mobile: 120 },
  { month: "Abril", desktop: 73, mobile: 190 },
  { month: "Maio", desktop: 209, mobile: 130 },
  { month: "Junho", desktop: 214, mobile: 140 },
]
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig
export default function Dashboard(){
    return(
        <>
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
       <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card>
            <CardHeader>
               <CardTitle>Venda Totais</CardTitle>
               
            </CardHeader>
            <CardContent>
              <p className="text-2x1 font-bold">R$100.000</p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
               <CardTitle>Pedido Pagos</CardTitle>
               
            </CardHeader>
            <CardContent>
              <p className="text-2x1 font-bold">R$0,00</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
               <CardTitle>Lucro liquido</CardTitle>
               
            </CardHeader>
            <CardContent>
              <p className="text-2x1 font-bold">0,00%</p>
            </CardContent>
          </Card>
        </div>
        <Card className='col-span-1 lg:col-span-4'>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
            <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card
            className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
          >
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Ultimas transações</CardTitle>
              </div>

            </CardHeader>

          </Card>
          <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Meios de pagamento</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="https://th.bing.com/th/id/R.d137237fa41ab78e8ee67f4276605825?rik=MTcmcc%2bjqk2I6w&pid=ImgRaw&r=0" alt="@shadcn" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Pix
                  </p>

                </div>
                <div className="ml-auto font-medium">0%</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="https://th.bing.com/th/id/OIP.sd-4BbfnGt8Seo9LRSQYMgHaHa?rs=1&pid=ImgDetMain" alt="@shadcn" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Cartão Credito
                  </p>
                </div>
                <div className="ml-auto font-medium">0%</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="https://th.bing.com/th/id/OIP.sd-4BbfnGt8Seo9LRSQYMgHaHa?rs=1&pid=ImgDetMain" alt="@shadcn" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Cartão Débito
                  </p>
                </div>
                <div className="ml-auto font-medium">0%</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="https://th.bing.com/th/id/R.0cc8db142eebf92b3ff1fb1da3e8b80b?rik=BMma%2fgthM0kASw&pid=ImgRaw&r=0" alt="@shadcn" />
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Boleto
                  </p>
                </div>
                <div className="ml-auto font-medium">0%</div>
              </div>

            </CardContent>
          </Card>
        </div>
    </>
    )
}