/** import logo*/
'use client'
import Link from "next/link";
import {
  Bell,
  Home,
  LineChart,
  Package2,
  ShoppingCart,
  Users,
  ChevronDown,
} from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

export default function Navbar(){
	return(
            <aside className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Acme Inc</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/inicio"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/cliente"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <ShoppingCart className="h-4 w-4" />
                Clientes

              </Link>
              <Link
                href="/cupon"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
              >
                Cupons
              </Link>
              <Link
                href="/leads"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Users className="h-4 w-4" />
                Leads
              </Link>
                    <Collapsible className="group">
            <CollapsibleTrigger className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted group-[.open]:bg-muted">
              <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary" prefetch={false}>
                Recuperação
              </Link>
              <ChevronDown className="h-4 w-4 transition-transform group-[.open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1 pl-6">
              <Link
                href="/recover/pix"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted">
                Pix
              </Link>
              <Link
                href="/recover/billet"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted">
                Boleto
              </Link>
              <Link
                href="/recover/carts"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted">
                Carrinho
              </Link>
            </CollapsibleContent>
          </Collapsible>
                    <Collapsible className="group">
            <CollapsibleTrigger className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted group-[.open]:bg-muted">
              <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary" prefetch={false}>
                Configurações
              </Link>
              <ChevronDown className="h-4 w-4 transition-transform group-[.open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1 pl-6">
              <Link
                href="/setting/geral"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                prefetch={false}
              >
                Geral
              </Link>
              <Link
                href="#"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                prefetch={false}
              >
                Fulfillment
              </Link>
              <Link
                href="#"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                prefetch={false}
              >
                Returns
              </Link>
            </CollapsibleContent>
          </Collapsible>
                        <Link
                href=""
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                Faturamento

              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </aside>
		)
}