"use client"
import { TrendingUp } from "lucide-react"
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
    </>
    )
}